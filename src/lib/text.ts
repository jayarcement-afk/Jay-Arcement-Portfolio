export type Claim = {
  number: number;
  preamble: string;
  steps: string[];
};

export type PatentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type PatentText = {
  abstract: string;
  sections: PatentSection[];
  claims: Claim[];
};

export type Fact = {
  label: string;
  value: string;
};

export type SourceLink = {
  label: string;
  href: string;
};
