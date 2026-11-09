import capture from "@/content/us-20240005750.json";
import cart from "@/content/us-12711285.json";
import themed from "@/content/us-12725481.json";
import type { Fact, PatentText, SourceLink } from "@/lib/text";

export type PatentDoc = {
  href: "/patents/us-12725481" | "/patents/us-12711285" | "/patents/us-20240005750";
  kind: "Grant" | "Application";
  identifier: string;
  title: string;
  description: string;
  pdf?: { href: string; pages: number };
  facts: Fact[];
  events?: string[];
  text: PatentText;
  sources: SourceLink[];
  archive: {
    sourceLabel: string;
    sourceHref: string;
    kept: string;
  };
};

const themedText = themed as PatentText;
const cartText = cart as PatentText;
const captureText = capture as PatentText;

export const patents: Record<PatentDoc["href"], PatentDoc> = {
  "/patents/us-12725481": {
    href: "/patents/us-12725481",
    kind: "Grant",
    identifier: "US 12,725,481 B2",
    title: "Personalized and themed transaction interface",
    description: themedText.abstract,
    pdf: { href: "/patents/US12725481B2.pdf", pages: 10 },
    facts: [
      { label: "Patent number", value: "12,725,481" },
      { label: "Kind", value: "B2 utility grant" },
      { label: "Filed", value: "November 27, 2024" },
      { label: "Granted", value: "September 1, 2026" },
      { label: "Application", value: "18/963,026" },
      { label: "Assignee", value: "NCR Voyix Corporation, Atlanta, GA" },
      {
        label: "Inventors",
        value:
          "Gina Torcivia Bennett, Lawrenceville, GA; Kip Oliver Morgan, Atlanta, GA; WuChieh James Jong, Raleigh, NC; Jay Arcement, Atlanta, GA",
      },
      {
        label: "CPC",
        value: "G06F 9/451; G06Q 20/20; G06Q 20/40145; G06Q 30/0631; G07F 9/023",
      },
    ],
    text: themedText,
    archive: {
      sourceLabel: "the USPTO PDF for US 12,725,481 B2",
      sourceHref: "/patents/US12725481B2.pdf",
      kept: "That file is stored in this project. The claims and description below are the public patent text, so the grant is still readable if the USPTO link changes.",
    },
    sources: [
      {
        label: "USPTO PDF",
        href: "/patents/US12725481B2.pdf",
      },
      {
        label: "Justia listing",
        href: "https://patents.justia.com/patent/12725481",
      },
      {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US12725481B2/en",
      },
    ],
  },
  "/patents/us-12711285": {
    href: "/patents/us-12711285",
    kind: "Grant",
    identifier: "US 12,711,285 B2",
    title: "Smart cart security with auditing",
    description: cartText.abstract,
    pdf: { href: "/patents/US12711285B2.pdf", pages: 14 },
    facts: [
      { label: "Patent number", value: "12,711,285" },
      { label: "Kind", value: "B2 utility grant" },
      { label: "Filed", value: "December 26, 2024" },
      { label: "Granted", value: "August 18, 2026" },
      { label: "Application", value: "19/002,240" },
      { label: "Publication", value: "2026/0187293" },
      { label: "Assignee", value: "NCR Voyix Corporation, Atlanta, GA" },
      {
        label: "Inventors",
        value:
          "Kip Oliver Morgan, Atlanta, GA; Gina Torcivia Bennett, Lawrenceville, GA; Jay Arcement, Atlanta, GA",
      },
      { label: "Primary examiner", value: "Wodajo Getachew" },
      {
        label: "CPC",
        value:
          "B62B 3/1408; G01C 21/20; G06F 21/88; G06K 7/10554; G06N 3/0464; G06Q 10/087; G06Q 20/12; G06Q 20/18; G06Q 20/208; G06Q 20/4016; G06Q 30/06; G06Q 30/0641; G06V 10/70; G06V 20/52; G06V 20/53; G07G 1/0036; H04W 12/12; H04W 12/126",
      },
    ],
    text: cartText,
    archive: {
      sourceLabel: "the USPTO PDF for US 12,711,285 B2",
      sourceHref: "/patents/US12711285B2.pdf",
      kept: "That file is stored in this project. The claims and description below are the public patent text, so the grant is still readable if the USPTO link changes.",
    },
    sources: [
      { label: "USPTO PDF", href: "/patents/US12711285B2.pdf" },
      {
        label: "Justia listing",
        href: "https://patents.justia.com/patent/12711285",
      },
      {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US12711285B2/en",
      },
    ],
  },
  "/patents/us-20240005750": {
    href: "/patents/us-20240005750",
    kind: "Application",
    identifier: "US 2024/0005750 A1",
    title:
      "Event-triggered capture of item image data and generation and storage of enhanced item identification data",
    description: captureText.abstract,
    facts: [
      { label: "Publication", value: "US 2024/0005750 A1" },
      { label: "Application", value: "18/217,459" },
      { label: "Filed", value: "June 30, 2023" },
      { label: "Priority", value: "July 1, 2022" },
      { label: "Published", value: "January 4, 2024" },
      { label: "Status", value: "Pending on the public record consulted for this page" },
      {
        label: "Filed by",
        value: "NCR Corporation and NCR Voyix Corporation",
      },
      { label: "Assignee", value: "NCR Voyix Corporation" },
      {
        label: "Inventors",
        value:
          "Eric Xavier Schoch; Marc Haberkorn; Brent Vance Zucker; Jay Arcement; Frank Hinek; Yogesh Kamat; Amit Acharya; Matthew Farrow",
      },
    ],
    events: [
      "October 25, 2023: a security interest was recorded to Bank of America, N.A., as administrative agent, from NCR Voyix Corporation.",
      "December 30, 2025: assignment to NCR Voyix Corporation from Brent Vance Zucker, Frank Hinek, and Jay Arcement.",
      "December 30, 2025: assignment to NCR Voyix Corporation from Amit Acharya, Marc Haberkorn, Eric Xavier Schoch, Matthew Farrow, and Yogesh Kamat.",
    ],
    text: captureText,
    archive: {
      sourceLabel: "the Justia publication",
      sourceHref: "https://patents.justia.com/patent/20240005750",
      kept: "The specification and all 20 claims from that listing are stored on this page.",
    },
    sources: [
      {
        label: "Justia publication",
        href: "https://patents.justia.com/patent/20240005750",
      },
      {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US20240005750A1/en",
      },
    ],
  },
};
