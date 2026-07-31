#!/usr/bin/env python3
"""Extract the Bytes Dance thesis into structured TypeScript article data."""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import pdfplumber
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "articles" / "bytesDanceData.ts"
IMAGE_DIR = ROOT / "public" / "writing" / "bytes-dance"


CHAPTERS = [
    {
        "slug": "introduction",
        "title": "Introduction",
        "start": 7,
        "end": 40,
        "skip_titles": {"Introduction"},
        "mode": "body",
    },
    {
        "slug": "chapter-1",
        "title": "Chapter 1: Myth-Making Genesis",
        "subtitle": "The Huangshan Conference and the Genealogy of Chinese Database Science",
        "start": 41,
        "end": 81,
        "skip_titles": {
            "Chapter 1",
            "Myth-Making Genesis:",
            "The Huangshan Conference and the Genealogy of Chinese Database Science",
        },
        "mode": "body",
    },
    {
        "slug": "chapter-2",
        "title": "Chapter 2: Standards in Flux",
        "subtitle": "Politics of Codification and Divergence in Database Research and Education",
        "start": 82,
        "end": 116,
        "skip_titles": {
            "Chapter 2",
            "Standards in Flux:",
            "Politics of Codification and Divergence in Database Research and Education",
        },
        "mode": "body",
    },
    {
        "slug": "chapter-3",
        "title": "Chapter 3: From Papers to Magnetic Diskettes",
        "subtitle": "The 1982 Census and the Global Logistics of a National Database State",
        "start": 117,
        "end": 158,
        "skip_titles": {
            "Chapter 3",
            "From Papers to Magnetic Diskettes:",
            "The 1982 Census and the Global Logistics of a National Database State",
        },
        "mode": "body",
    },
    {
        "slug": "chapter-4",
        "title": "Chapter 4: Statistics Reengineered",
        "subtitle": "The State Economic Information Database System",
        "start": 159,
        "end": 189,
        "skip_titles": {
            "Chapter 4",
            "Statistics Reengineered: the State Economic Information Database System",
        },
        "mode": "body",
    },
    {
        "slug": "conclusion",
        "title": "Conclusion",
        "subtitle": "Database and Statecraft in the Age of “AI Agents”",
        "start": 190,
        "end": 199,
        "skip_titles": {
            "Conclusion",
            "Database and Statecraft in the age of “AI Agents”",
        },
        "mode": "body",
    },
    {
        "slug": "bibliography",
        "title": "Bibliography",
        "start": 200,
        "end": 221,
        "skip_titles": {"Bibliography"},
        "mode": "bibliography",
    },
    {
        "slug": "abbreviations",
        "title": "Abbreviations",
        "start": 222,
        "end": 223,
        "skip_titles": {"Abbreviations"},
        "mode": "abbreviations",
    },
]


FIGURES = [
    {
        "page": 8,
        "image_index": 0,
        "filename": "figure-1-1-health-code.png",
        "anchor": "figure 1-1",
        "alt": "Code from China’s first COVID-19 Health Code system displayed at the National Museum of China",
        "caption": (
            "Figure 1-1. The “first lines of code” from China’s first COVID-19 Health Code "
            "system, by Alibaba software engineers. Credit: National Museum of China."
        ),
    },
    {
        "page": 126,
        "image_index": 0,
        "filename": "figure-4-1-ibm-system-370.png",
        "anchor": "figure 4-1",
        "alt": "IBM System/370 mainframe installation",
        "caption": "Figure 4-1. IBM System/370 Series. Credit: IBM Archive.",
    },
    {
        "page": 128,
        "image_index": 0,
        "filename": "figure-4-2-ibm-system-4341.png",
        "anchor": "figure 4-2",
        "alt": "IBM System/4341 mainframe installation",
        "caption": "Figure 4-2. IBM System/4341 System. Credit: IBM Archive.",
    },
    {
        "page": 135,
        "image_index": 0,
        "filename": "figure-4-3-census-workflow.png",
        "anchor": "figure 4-3",
        "alt": "Workflow diagram of the 1982 Chinese census data-processing system",
        "caption": (
            "Figure 4-3. Workflow Diagram of the 1982 Census Data Processing System. "
            "Credit: National Census Office."
        ),
    },
    {
        "page": 137,
        "image_index": 0,
        "filename": "figure-4-4-fosdic-console.jpg",
        "anchor": "figure 4-4",
        "alt": "Film Optical Sensing Device for Input to Computers console",
        "caption": "Figure 4-4. FOSDIC console. Credit: U.S. Census Bureau.",
    },
    {
        "page": 142,
        "image_index": 0,
        "filename": "figure-4-5-census-questionnaire.png",
        "anchor": "figure 4-5",
        "alt": "English replication of the 1982 Chinese census questionnaire",
        "caption": (
            "Figure 4-5. An English replication of the 1982 Census questionnaire "
            "(produced by the author with Figma)."
        ),
    },
    {
        "page": 146,
        "image_index": 0,
        "filename": "figure-4-6-ibm-5280.jpg",
        "anchor": "figure 4-6",
        "alt": "IBM 5280 distributed data system",
        "caption": "Figure 4-6. An IBM 5280 system. Credit: IBM Archive.",
    },
    {
        "page": 147,
        "image_index": 0,
        "filename": "figure-4-7-ibm-3700.png",
        "anchor": "figure 4-7",
        "alt": "IBM 3700 data-entry system",
        "caption": "Figure 4-7. The IBM 3700 System. Credit: IBM Archive.",
    },
    {
        "page": 147,
        "image_index": 1,
        "filename": "figure-4-8-census-record.png",
        "anchor": "figure 4-8",
        "alt": "Simulation of a census record on an IBM 3742 display unit",
        "caption": (
            "Figure 4-8. A simulation of a male historian’s record on the IBM 3742’s "
            "display unit. Created by the author with Figma based on technical manuscripts "
            "and photographs."
        ),
    },
    {
        "page": 176,
        "image_index": 0,
        "filename": "figure-5-1-liaoning-price-system.png",
        "anchor": "figure 5-1",
        "alt": "Diagram of Liaoning province’s price and market data system in 1989",
        "caption": "Figure 5-1. The Liaoning province’s price and market data system in 1989.",
    },
]


TABLES = [
    {
        "anchor": "Table 4-1 and 4-2",
        "caption": "Table 4-1. Number of Entries and Data Size per Record",
        "headers": ["Data Category", "Entries per Record", "Data Size per Record (Bytes)"],
        "rows": [
            ["Person", "13", "26"],
            ["Household Unit", "5", "14"],
            ["Standard Volume", "6", "28"],
            ["Deceased Person", "13", "24"],
        ],
    },
    {
        "anchor": "Table 4-1 and 4-2",
        "caption": "Table 4-2. Total Number of Entries and Data Size",
        "headers": ["Data Category", "Total Records", "Total Entries", "Total Data Size (Bytes)"],
        "rows": [
            ["Person", "1 × 10⁹", "1.3 × 10¹⁰", "2.6 × 10¹⁰"],
            ["Household Unit", "2.21 × 10⁸", "1.10 × 10⁹", "3.09 × 10⁹"],
            ["Standard Volume", "2.21 × 10⁶", "1.33 × 10⁷", "6.18 × 10⁷"],
            ["Deceased Person", "7 × 10⁶", "9.1 × 10⁷", "1.68 × 10⁸"],
            ["Total", "", "1.43 × 10¹⁰", "2.93 × 10¹⁰"],
        ],
    },
]


SKIP_BODY_PAGES = {8, 142, 143, 147}
TABLE_PAGES = {138, 139}
KEEP_HYPHENATED_TERMS = {
    "age-specific",
    "anti-feudal",
    "cloud-based",
    "command-control",
    "computer-assisted",
    "cost-benefit",
    "chinese-character",
    "cross-checked",
    "cutting-edge",
    "data-based",
    "data-driven",
    "data-entry",
    "database-based",
    "decision-making",
    "discipline-building",
    "double-byte",
    "first-generation",
    "foreign-made",
    "government-led",
    "health-code",
    "high-performance",
    "high-value",
    "input-output",
    "key-to-disk",
    "key-to-diskette",
    "labor-saving",
    "laid-off",
    "large-scale",
    "long-standing",
    "machine-readable",
    "market-oriented",
    "mid-range",
    "month-end",
    "nation-state",
    "nineteenth-century",
    "one-to-one",
    "one-digit",
    "open-source",
    "open-sourced",
    "party-state",
    "pre-histories",
    "problem-solving",
    "real-time",
    "real-world",
    "research-oriented",
    "sector-spanning",
    "self-reliance",
    "self-criticism",
    "self-understanding",
    "semi-colonial",
    "semi-feudal",
    "share-nothing",
    "short-lived",
    "state-centric",
    "state-level",
    "state-owned",
    "top-secret",
    "twentieth-century",
    "twenty-first-century",
    "two-week",
    "web-scale",
    "well-known",
}

TEXT_FIXES = {
    "agespecific": "age-specific",
    "cloudbased": "cloud-based",
    "commandcontrol": "command-control",
    "crosschecked": "cross-checked",
    "cuttingedge": "cutting-edge",
    "databased": "data-based",
    "DeepSeekR1": "DeepSeek-R1",
    "end-toend": "end-to-end",
    "Englishlanguage": "English-language",
    "exampledriven": "example-driven",
    "governmentled": "government-led",
    "highvalue": "high-value",
    "intermediatesized": "intermediate-sized",
    "laidoff": "laid-off",
    "marketoriented": "market-oriented",
    "monthend": "month-end",
    "onedigit": "one-digit",
    "opensourced": "open-sourced",
    "oftenunderstated": "often-understated",
    "questionnaireto-database": "questionnaire-to-database",
    "realworld": "real-world",
    "researchoriented": "research-oriented",
    "selfcriticism": "self-criticism",
    "topsecret": "top-secret",
}


@dataclass
class Line:
    top: float
    words: list[dict[str, Any]]

    @property
    def x0(self) -> float:
        return min(word["x0"] for word in self.words)


def make_lines(page: Any) -> tuple[list[Line], list[dict[str, Any]]]:
    words = page.extract_words(extra_attrs=["size", "fontname"])
    lines: list[Line] = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        if word["top"] < 60:
            continue
        matching = next(
            (line for line in reversed(lines[-4:]) if abs(line.top - word["top"]) <= 2.6),
            None,
        )
        if matching is None:
            matching = Line(top=word["top"], words=[])
            lines.append(matching)
        matching.words.append(word)
    return lines, words


def clean_spacing(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(?<=\w)\s+-", "-", text)
    text = re.sub(r"\s+([,.;:!?%\)\]\}”’。，；：！？])", r"\1", text)
    text = re.sub(r"([\(\[\{“‘])\s+", r"\1", text)
    text = re.sub(r"\s*([—–])\s*", r"\1", text)
    text = re.sub(r"(?<=[\u3400-\u9fff])\s+(?=[\u3400-\u9fff])", "", text)
    text = text.replace("ﬁ", "fi").replace("ﬂ", "fl")
    for source, replacement in TEXT_FIXES.items():
        text = re.sub(rf"\b{re.escape(source)}\b", replacement, text)
    return text


def line_text(line: Line, *, notes: bool = False) -> str:
    tokens: list[str] = []
    for word in sorted(line.words, key=lambda item: item["x0"]):
        size = float(word["size"])
        text = word["text"]
        if size <= 8.1 and text.isdigit():
            if notes and 71.5 <= word["x0"] <= 72.5:
                continue
            if not notes and not (71.5 <= word["x0"] <= 72.5):
                tokens.append(f"{{{{note:{text}}}}}")
            continue
        tokens.append(text)
    return clean_spacing(" ".join(tokens))


def join_wrapped(existing: str, continuation: str) -> str:
    if not existing:
        return continuation
    if not continuation:
        return existing
    existing = existing.rstrip()
    continuation = continuation.lstrip()
    if existing.endswith("-"):
        left_match = re.search(r"([A-Za-z]+(?:-[A-Za-z]+)*)-$", existing)
        right_match = re.match(r"([A-Za-z0-9]+)", continuation)
        left = left_match.group(1) if left_match else ""
        right = right_match.group(1) if right_match else ""
        hyphenated = f"{left}-{right}".lower()
        keep_hyphen = (
            hyphenated in KEEP_HYPHENATED_TERMS
            or continuation[:1].isdigit()
            or continuation[:1].isupper()
        )
        if not keep_hyphen:
            existing = existing[:-1]
        return existing + continuation
    return existing + " " + continuation


def is_heading(line: Line) -> bool:
    words = [word for word in line.words if float(word["size"]) > 8.1]
    if not words:
        return False
    bold_ratio = sum("Bold" in word["fontname"] for word in words) / len(words)
    return bold_ratio > 0.8


def is_figure_caption(line: Line) -> bool:
    return bool(re.match(r"^Figure\s+\d+-\d+\.", line_text(line)))


def table_start(lines: list[Line], page_number: int) -> float:
    if page_number not in TABLE_PAGES:
        return 9999
    starts = [line.top for line in lines if line_text(line).startswith("Table 4-")]
    return min(starts, default=9999)


def footnote_start(words: list[dict[str, Any]], page_number: int) -> float:
    if page_number in TABLE_PAGES and page_number == 139:
        return 9999
    markers = [
        word["top"]
        for word in words
        if float(word["size"]) <= 8.1
        and word["text"].isdigit()
        and 71.5 <= word["x0"] <= 72.5
    ]
    return min(markers, default=9999)


def parse_notes(
    lines: list[Line],
    start: float,
) -> list[dict[str, Any]]:
    notes: list[dict[str, Any]] = []
    current: dict[str, Any] | None = None
    skip_caption_until = -1.0
    for line in lines:
        if is_figure_caption(line):
            skip_caption_until = line.top + 35
            continue
        if line.top <= skip_caption_until:
            continue
        # The 8pt note marker sits a fraction below the 12pt note text on the
        # same visual line, so allow a small top-coordinate tolerance.
        if line.top < start - 3:
            continue
        marker = next(
            (
                word["text"]
                for word in line.words
                if float(word["size"]) <= 8.1
                and word["text"].isdigit()
                and 71.5 <= word["x0"] <= 72.5
            ),
            None,
        )
        if marker is not None:
            if current:
                current["text"] = clean_spacing(current["text"])
                notes.append(current)
            current = {"n": int(marker), "text": ""}
        if current is None:
            continue
        current["text"] = join_wrapped(current["text"], line_text(line, notes=True))
    if current:
        current["text"] = clean_spacing(current["text"])
        notes.append(current)
    return notes


def parse_chapter(pdf: Any, chapter: dict[str, Any]) -> dict[str, Any]:
    blocks: list[dict[str, Any]] = []
    notes: list[dict[str, Any]] = []
    paragraph = ""

    def flush_paragraph() -> None:
        nonlocal paragraph
        paragraph = clean_spacing(paragraph)
        if paragraph:
            blocks.append({"kind": "paragraph", "text": paragraph})
        paragraph = ""

    for page_number in range(chapter["start"], chapter["end"] + 1):
        lines, words = make_lines(pdf.pages[page_number - 1])
        table_top = table_start(lines, page_number)
        note_top = footnote_start(words, page_number)
        body_stop = min(table_top, note_top)
        notes.extend(parse_notes(lines, note_top))

        if page_number in SKIP_BODY_PAGES:
            continue

        skip_caption_until = -1.0
        for line in lines:
            # Like note parsing, body/footnote separation needs a small
            # tolerance because the smaller marker sits slightly lower.
            if line.top >= body_stop - 3:
                continue
            if is_figure_caption(line):
                skip_caption_until = line.top + 35
                continue
            if line.top <= skip_caption_until:
                continue
            text = line_text(line)
            if not text:
                continue
            if text in chapter["skip_titles"] or re.fullmatch(r"Chapter \d", text):
                flush_paragraph()
                continue

            if chapter["mode"] == "abbreviations":
                flush_paragraph()
                blocks.append({"kind": "paragraph", "text": text})
                continue

            if is_heading(line):
                flush_paragraph()
                blocks.append({"kind": "heading", "text": text})
                continue

            if chapter["mode"] == "bibliography":
                if line.x0 <= 73:
                    flush_paragraph()
                paragraph = join_wrapped(paragraph, text)
                continue

            if line.x0 >= 100:
                flush_paragraph()
            paragraph = join_wrapped(paragraph, text)

    flush_paragraph()
    return {
        "slug": chapter["slug"],
        "title": chapter["title"],
        **({"subtitle": chapter["subtitle"]} if chapter.get("subtitle") else {}),
        "blocks": blocks,
        "notes": notes,
    }


def insert_after_anchor(
    blocks: list[dict[str, Any]],
    anchor: str,
    new_blocks: list[dict[str, Any]],
) -> None:
    normalized = anchor.lower()
    for index, block in enumerate(blocks):
        if block.get("kind") != "paragraph":
            continue
        if normalized in block.get("text", "").lower():
            offset = index + 1
            while offset < len(blocks) and blocks[offset].get("kind") in {"figure", "table"}:
                offset += 1
            blocks[offset:offset] = new_blocks
            return
    blocks.extend(new_blocks)


def add_media(chapters: list[dict[str, Any]]) -> None:
    chapter_three = next(chapter for chapter in chapters if chapter["slug"] == "chapter-3")
    introduction = next(chapter for chapter in chapters if chapter["slug"] == "introduction")
    chapter_four = next(chapter for chapter in chapters if chapter["slug"] == "chapter-4")

    for figure in FIGURES:
        target = (
            introduction
            if figure["page"] == 8
            else chapter_four
            if figure["page"] == 176
            else chapter_three
        )
        insert_after_anchor(
            target["blocks"],
            figure["anchor"],
            [
                {
                    "kind": "figure",
                    "src": f"/writing/bytes-dance/{figure['filename']}",
                    "alt": figure["alt"],
                    "caption": figure["caption"],
                }
            ],
        )

    insert_after_anchor(
        chapter_three["blocks"],
        TABLES[0]["anchor"],
        [
            {
                "kind": "table",
                "caption": table["caption"],
                "headers": table["headers"],
                "rows": table["rows"],
            }
            for table in TABLES
        ],
    )


def extract_images(pdf_path: Path) -> None:
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(pdf_path)
    for figure in FIGURES:
        image = reader.pages[figure["page"] - 1].images[figure["image_index"]]
        destination = IMAGE_DIR / figure["filename"]
        destination.write_bytes(image.data)


def write_typescript(chapters: list[dict[str, Any]]) -> None:
    payload = json.dumps(chapters, ensure_ascii=False, indent=2)
    source = f"""// Generated by scripts/extract_bytes_dance.py from the source thesis PDF.
// Edit the extraction script and regenerate this file from the original source if needed.

export type BytesDanceBlock =
  | {{ kind: 'heading'; text: string }}
  | {{ kind: 'paragraph'; text: string }}
  | {{ kind: 'figure'; src: string; alt: string; caption: string }}
  | {{ kind: 'table'; caption: string; headers: string[]; rows: string[][] }}

export type BytesDanceChapter = {{
  slug: string
  title: string
  subtitle?: string
  blocks: BytesDanceBlock[]
  notes: Array<{{ n: number; text: string }}>
}}

export const bytesDanceChapters: BytesDanceChapter[] = {payload}
"""
    DATA_PATH.write_text(source, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract the Bytes Dance thesis into the website's article data."
    )
    parser.add_argument("pdf", type=Path, help="Path to the original thesis PDF")
    args = parser.parse_args()
    pdf_path = args.pdf.expanduser().resolve()
    if not pdf_path.is_file():
        parser.error(f"PDF not found: {pdf_path}")

    with pdfplumber.open(pdf_path) as pdf:
        chapters = [parse_chapter(pdf, chapter) for chapter in CHAPTERS]
    add_media(chapters)
    extract_images(pdf_path)
    write_typescript(chapters)

    total_blocks = sum(len(chapter["blocks"]) for chapter in chapters)
    total_notes = sum(len(chapter["notes"]) for chapter in chapters)
    total_words = sum(
        len(block.get("text", "").split())
        for chapter in chapters
        for block in chapter["blocks"]
    )
    print(
        f"Wrote {len(chapters)} sections, {total_blocks} blocks, "
        f"{total_notes} notes, and approximately {total_words:,} words."
    )


if __name__ == "__main__":
    main()
