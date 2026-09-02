# AI Flow Weaver

Build a simple frontend-only proof-of-concept for my final-year project.

PROJECT TITLE:

AI Transformation & Governance Engine

PURPOSE OF THIS POC:

The main goal is to help my project coordinators quickly understand the

project concept through a visual and interactive demo.

IMPORTANT:

Do NOT build the actual AI system yet.

Do NOT build backend, database, RAG, LangGraph, authentication, APIs,

real LLM integration, or complex enterprise dashboards.

This is only a friendly UI prototype that demonstrates the IDEA.

TECH:

- React

- TypeScript

- Vite

- Tailwind CSS

- Lucide React icons if useful

CORE IDEA TO COMMUNICATE:

An organization already has a business process.

Example:

Customer submits loan application

→ Documents are checked

→ Application is assessed

→ Manager approves

→ Loan is processed

Our proposed system looks at this existing process and asks:

1. Where can AI help?

2. Where should humans remain involved?

3. What risks are involved?

4. What rules/policies should be followed?

It then suggests an improved AI-enabled workflow.

The user can review and modify the suggested workflow.

The system finally shows whether the modified workflow is safe/compliant.

-----------------------------------

PAGE 1 — WELCOME

-----------------------------------

Create a friendly landing page.

Title:

"AI Transformation & Governance Engine"

Subtitle:

"Turn existing business processes into smarter, safer AI-enabled workflows."

Short explanation:

"Upload or describe a business process. Our system identifies where AI

can help, where human decisions are needed, and what governance controls

should be applied."

Add a large button:

"Explore Demo →"

Use a clean, modern, approachable visual style.

Avoid making it look like ChatGPT.

-----------------------------------

PAGE 2 — HOW IT WORKS

-----------------------------------

Show the project as a simple 4-step visual flow:

Existing Process

        ↓

AI Opportunity Analysis

        ↓

AI Workflow Suggestion

        ↓

Risk & Policy Check

Each step should have a small icon and one short explanation.

At the bottom:

"Let's see an example"

button → "Try Example"

-----------------------------------

PAGE 3 — EXISTING PROCESS

-----------------------------------

Show an example business process:

"Loan Application Process"

Display it visually as simple connected cards:

Customer Application

        ↓

Document Verification

        ↓

Credit Assessment

        ↓

Manager Approval

        ↓

Loan Processing

Beside/below it show:

"What could AI improve?"

Button:

"Analyze Process"

When clicked, show a short loading animation and then move to the

AI analysis section.

-----------------------------------

PAGE 4 — AI OPPORTUNITY ANALYSIS

-----------------------------------

Keep this extremely simple.

Heading:

"Where can AI help?"

Show the five process stages with recommendations:

Document Verification

✓ Good candidate for AI

"AI can extract and verify documents."

Credit Assessment

✓ AI + Human

"AI can assist with analysis, but a person should review the result."

Manager Approval

👤 Human decision

"Final approval should remain with a human."

Loan Processing

✓ Automation

"Routine processing can be automated."

Risk Review

⚠ Higher Risk

"AI can assist, but stronger controls are needed."

Add a simple button:

"Generate Suggested Workflow →"

-----------------------------------

PAGE 5 — SUGGESTED AI WORKFLOW

-----------------------------------

This is the MAIN demo screen.

Heading:

"Suggested AI-Enabled Workflow"

Show a simple visual workflow:

Customer Application

        ↓

AI Document Assistant

        ↓

AI Credit Analysis

        ↓

Human Review

        ↓

Manager Approval

        ↓

Automated Processing

Use friendly labels:

AI

HUMAN

AUTOMATION

Clicking a workflow step should show a small information panel.

Example:

AI Credit Analysis

AI helps analyze:

• Credit history

• Application details

• Financial information

Recommended approach:

"AI-assisted decision"

Human involvement:

"Required"

Risk:

"Medium"

Keep this visually simple.

-----------------------------------

PAGE 6 — CHANGE THE WORKFLOW

-----------------------------------

Heading:

"Customize the Workflow"

Explain:

"The suggested workflow is not final. Organizations can change how much

AI autonomy they want."

Show one simple control:

AI Credit Analysis

Human involvement:

[ More Human ] ─────●───── [ More AI ]

Also show:

☑ Human review required

☑ Explain AI recommendation

☑ Keep decision history

Button:

"Check My Workflow"

-----------------------------------

PAGE 7 — SIMPLE GOVERNANCE RESULT

-----------------------------------

If the user keeps human review ON:

Show a friendly success state:

✓ Workflow Looks Good

"Human review is included for the higher-risk AI decision."

Then show:

AI Usage       ✓

Human Oversight ✓

Risk Control   ✓

Audit Trail    ✓

Button:

"See Final Workflow"

If the user turns human review OFF:

Show:

⚠ Review Recommended

"This workflow removes human review from a higher-risk decision."

"Recommended action:

Keep a human approval step before the final decision."

Do NOT make this overly technical.

-----------------------------------

PAGE 8 — FINAL SUMMARY

-----------------------------------

Show:

"Your AI Transformation Plan"

Existing Process

Loan Application Process

AI Opportunities

3 identified

Human Checkpoints

2 recommended

Risk Controls

4 suggested

Policy Checks

Passed

Then show the final workflow again:

Application

↓

AI Document Check

↓

AI Credit Analysis

↓

Human Review

↓

Manager Approval

↓

Automated Processing

At the bottom:

"This is how the proposed system helps organizations adopt AI

without simply handing the entire workflow to AI."

Button:

"Start Another Process"

-----------------------------------

DESIGN REQUIREMENTS

-----------------------------------

Make the UI:

- Friendly

- Clean

- Modern

- Easy for a non-technical professor/coordinator to understand

- Visually interesting

- Not intimidating

- Not overly corporate

- Not a chatbot

Use cards, icons, arrows, small animations and clear headings.

Use a light interface.

Use plenty of whitespace.

Keep text short.

The project concept should be understandable within 30 seconds

without someone needing to read technical documentation.

IMPORTANT:

Every button in the prototype should work.

Use local mock data only.

No backend.

No external APIs.

No authentication.

No real AI.

The prototype should run with:

npm install

npm run dev

Make sure there are no build errors.

Before finishing, test all navigation and buttons.

The most important thing is NOT technical complexity.

The most important thing is that someone seeing the prototype immediately

understands:

"Ah — they take an existing business process, find where AI can be used,

suggest a better workflow, and check whether it is safe and follows rules."

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://core-process-ai.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/278ec3d5-8dc5-41ab-b23f-13472040403b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
