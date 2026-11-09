export type InventorRecord = {
  title: string;
  href: "/patents/us-12725481" | "/patents/us-12711285" | "/patents/us-20240005750";
  numberLabel: string;
  number: string;
  kind: "Grant" | "Application";
  filed: string;
  datedLabel: string;
  dated: string;
  assignee?: string;
  inventors: string;
  abstract: string;
  note?: string;
  external: { label: string; href: string };
};

export const inventor = {
  name: "Jay Arcement",
  href: "/inventors/jay-arcement" as const,
  intro:
    "Public USPTO records that name Jay Arcement as an inventor. The list includes grants and applications, in the order they appear on the Justia inventor listing consulted for this page.",
  source: {
    label: "Justia inventor listing",
    href: "https://patents.justia.com/inventor/jay-arcement",
  },
  records: [
    {
      title: "Personalized and themed transaction interface",
      href: "/patents/us-12725481",
      numberLabel: "Patent number",
      number: "12,725,481",
      kind: "Grant",
      filed: "November 27, 2024",
      datedLabel: "Date of patent",
      dated: "September 1, 2026",
      assignee: "NCR Voyix Corporation",
      inventors:
        "Gina Torcivia Bennett, Kip Oliver Morgan, WuChieh James Jong, Jay Arcement",
      abstract:
        "Methods and a system for personalizing self-checkout terminals based on customer loyalty information includes receiving customer preferences during registration, generating themed personas with specific color schemes, graphics, and animations relevant to the customer's registered interests, and dynamically applying personalized interface themes when customers are identified at self-checkout terminals. The system maintains cached personas tagged with attributes like interests, religious preferences, and dietary restrictions, enabling sub-second personalization by matching customer preferences to pre-generated themes. The system avoids showing inappropriate content by filtering themes based on offensive content, collects user feedback on displayed themes through a rating mechanism, and employs time-delay factors to prevent theme repetition. New personas and corresponding themes are periodically generated to maintain customer engagement while keeping processing costs manageable.",
      external: {
        label: "Justia grant",
        href: "https://patents.justia.com/patent/12725481",
      },
    },
    {
      title: "Smart cart security with auditing",
      href: "/patents/us-12711285",
      numberLabel: "Patent number",
      number: "12,711,285",
      kind: "Grant",
      filed: "December 26, 2024",
      datedLabel: "Date of patent",
      dated: "August 18, 2026",
      assignee: "NCR Voyix Corporation",
      inventors: "Kip Oliver Morgan, Gina Torcivia Bennett, Jay Arcement",
      abstract:
        "Methods and a system for automated smart cart security and auditing are provided. A cart includes one or more cameras mounted thereon to monitor items placed in the cart. The system performs local item recognition on the items placed in the cart by a mobile shopping device, focusing particularly on high-value items to prevent shrink. When discrepancies are detected between scanned items and items placed in the cart, the system accumulates audit points based on factors including, by way of example only, customer trust level, store shrink rates, and transaction risk scores. Upon reaching configured thresholds, the system triggers automated audit interventions that must be resolved before checkouts at self-service checkout (SCO) terminals.",
      external: {
        label: "Justia grant",
        href: "https://patents.justia.com/patent/12711285",
      },
    },
    {
      title: "Smart cart security with auditing",
      numberLabel: "Publication number",
      number: "20260187293",
      kind: "Application",
      filed: "December 26, 2024",
      datedLabel: "Publication date",
      dated: "July 2, 2026",
      inventors: "Kip Oliver Morgan, Gina Torcivia Bennett, Jay Arcement",
      abstract:
        "Methods and a system for automated smart cart security and auditing are provided. A cart includes one or more cameras mounted thereon to monitor items placed in the cart. The system performs local item recognition on the items placed in the cart by a mobile shopping device, focusing particularly on high-value items to prevent shrink. When discrepancies are detected between scanned items and items placed in the cart, the system accumulates audit points based on factors including, by way of example only, customer trust level, store shrink rates, and transaction risk scores. Upon reaching configured thresholds, the system triggers automated audit interventions that must be resolved before checkouts at self-service checkout (SCO) terminals.",
      note: "The granted patent US 12,711,285 lists this publication number.",
      href: "/patents/us-12711285",
      external: {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US20260187293A1/en",
      },
    },
    {
      title: "Smart cart security with auditing",
      numberLabel: "Publication number",
      number: "20260187636",
      kind: "Application",
      filed: "December 26, 2024",
      datedLabel: "Publication date",
      dated: "July 2, 2026",
      inventors: "Kip Oliver Morgan, Gina Torcivia Bennett, Jay Arcement",
      abstract:
        "Methods and a system for automated smart cart security and auditing are provided. A cart includes one or more cameras mounted thereon to monitor items placed in the cart. The system performs local item recognition on the items placed in the cart by a mobile shopping device, focusing particularly on high-value items to prevent shrink. When discrepancies are detected between scanned items and items placed in the cart, the system accumulates audit points based on factors including, by way of example only, customer trust level, store shrink rates, and transaction risk scores. Upon reaching configured thresholds, the system triggers automated audit interventions that must be resolved before checkouts at self-service checkout (SCO) terminals.",
      note: "Listed with the same abstract, filing date, and inventors as US 12,711,285.",
      href: "/patents/us-12711285",
      external: {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US20260187636A1/en",
      },
    },
    {
      title: "Personalized and themed transaction interface",
      numberLabel: "Publication number",
      number: "20260148604",
      kind: "Application",
      filed: "November 27, 2024",
      datedLabel: "Publication date",
      dated: "May 28, 2026",
      inventors:
        "Gina Torcivia Bennett, Kip Oliver Morgan, WuChieh James Jong, Jay Arcement",
      abstract:
        "Methods and a system for personalizing self-checkout terminals based on customer loyalty information includes receiving customer preferences during registration, generating themed personas with specific color schemes, graphics, and animations relevant to the customer's registered interests, and dynamically applying personalized interface themes when customers are identified at self-checkout terminals. The system maintains cached personas tagged with attributes like interests, religious preferences, and dietary restrictions, enabling sub-second personalization by matching customer preferences to pre-generated themes. The system avoids showing inappropriate content by filtering themes based on offensive content, collects user feedback on displayed themes through a rating mechanism, and employs time-delay factors to prevent theme repetition. New personas and corresponding themes are periodically generated to maintain customer engagement while keeping processing costs manageable.",
      note: "Listed with the same abstract, filing date, and inventors as US 12,725,481.",
      href: "/patents/us-12725481",
      external: {
        label: "Google Patents",
        href: "https://patents.google.com/patent/US20260148604A1/en",
      },
    },
    {
      title:
        "Event-triggered capture of item image data and generation and storage of enhanced item identification data",
      href: "/patents/us-20240005750",
      numberLabel: "Publication number",
      number: "20240005750",
      kind: "Application",
      filed: "June 30, 2023",
      datedLabel: "Publication date",
      dated: "January 4, 2024",
      inventors:
        "Eric Xavier Schoch, Marc Haberkorn, Brent Vance Zucker, Jay Arcement, Frank Hinek, Yogesh Kamat, Amit Acharya, Matthew Farrow",
      abstract:
        "Systems, machines, methods, and computer-readable media are disclosed for detecting an event at a self-checkout (SCO) machine, determining that the event is an item-identifying event, triggering capture of image data of the item identified by the item-identifying event responsive to detecting the event and/or responsive to determining that the event is an item-identifying event, and generating enhanced item identification data that associates the captured image data with identifying information of the item. The enhanced item identification data may be stored in one or more datastores, which may include a local datastore in a retail environment in which a self-checkout machine is located or a remote datastore such as cloud-based data storage.",
      external: {
        label: "Justia publication",
        href: "https://patents.justia.com/patent/20240005750",
      },
    },
  ] satisfies InventorRecord[],
};
