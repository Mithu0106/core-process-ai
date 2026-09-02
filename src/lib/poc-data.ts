export type Kind = "human" | "ai" | "automation" | "start";

export const existingProcess = [
  { title: "Customer Application", note: "Customer submits the loan request." },
  { title: "Document Verification", note: "Staff check IDs, payslips, statements." },
  { title: "Credit Assessment", note: "Officer reviews credit history manually." },
  { title: "Manager Approval", note: "Manager signs off on the decision." },
  { title: "Loan Processing", note: "Disbursement and record keeping." },
];

export type Opportunity = {
  stage: string;
  badge: string;
  tone: "ai" | "mixed" | "human" | "automation" | "risk";
  text: string;
};

export const opportunities: Opportunity[] = [
  {
    stage: "Document Verification",
    badge: "Good candidate for AI",
    tone: "ai",
    text: "AI can extract and verify documents.",
  },
  {
    stage: "Credit Assessment",
    badge: "AI + Human",
    tone: "mixed",
    text: "AI can assist with analysis, but a person should review the result.",
  },
  {
    stage: "Manager Approval",
    badge: "Human decision",
    tone: "human",
    text: "Final approval should remain with a human.",
  },
  {
    stage: "Loan Processing",
    badge: "Automation",
    tone: "automation",
    text: "Routine processing can be automated.",
  },
  {
    stage: "Risk Review",
    badge: "Higher Risk",
    tone: "risk",
    text: "AI can assist, but stronger controls are needed.",
  },
];

export type WorkflowStep = {
  id: string;
  title: string;
  kind: Kind;
  summary: string;
  helps: string[];
  approach: string;
  human: string;
  risk: "Low" | "Medium" | "High";
};

export const suggestedWorkflow: WorkflowStep[] = [
  {
    id: "application",
    title: "Customer Application",
    kind: "start",
    summary: "The process starts when a customer submits their loan request.",
    helps: ["Application form", "Uploaded documents"],
    approach: "Unchanged entry point",
    human: "Customer input",
    risk: "Low",
  },
  {
    id: "doc",
    title: "AI Document Assistant",
    kind: "ai",
    summary: "AI reads and checks submitted documents before a human looks at them.",
    helps: ["ID and address proof", "Payslips", "Bank statements"],
    approach: "AI-automated with spot checks",
    human: "Optional",
    risk: "Low",
  },
  {
    id: "credit",
    title: "AI Credit Analysis",
    kind: "ai",
    summary: "AI summarises the applicant's financial position and flags concerns.",
    helps: ["Credit history", "Application details", "Financial information"],
    approach: "AI-assisted decision",
    human: "Required",
    risk: "Medium",
  },
  {
    id: "review",
    title: "Human Review",
    kind: "human",
    summary: "A credit officer checks the AI recommendation and its explanation.",
    helps: ["AI explanation", "Flagged risks", "Supporting evidence"],
    approach: "Human-in-the-loop checkpoint",
    human: "Required",
    risk: "Low",
  },
  {
    id: "approval",
    title: "Manager Approval",
    kind: "human",
    summary: "The manager keeps the final accountability for the decision.",
    helps: ["Reviewed case file", "Officer notes"],
    approach: "Human decision only",
    human: "Required",
    risk: "Low",
  },
  {
    id: "processing",
    title: "Automated Processing",
    kind: "automation",
    summary: "Approved loans are set up and recorded without manual data entry.",
    helps: ["Account setup", "Disbursement", "Record keeping"],
    approach: "Rule-based automation",
    human: "Exception handling only",
    risk: "Low",
  },
];

export const finalWorkflow = [
  { title: "Application", kind: "start" as Kind },
  { title: "AI Document Check", kind: "ai" as Kind },
  { title: "AI Credit Analysis", kind: "ai" as Kind },
  { title: "Human Review", kind: "human" as Kind },
  { title: "Manager Approval", kind: "human" as Kind },
  { title: "Automated Processing", kind: "automation" as Kind },
];

export const kindLabel: Record<Kind, string> = {
  start: "START",
  ai: "AI",
  human: "HUMAN",
  automation: "AUTOMATION",
};
