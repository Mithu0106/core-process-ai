import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Bot, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { LinkButton, PageShell } from "@/components/poc/ui";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — AI Transformation & Governance Engine" },
      {
        name: "description",
        content:
          "Four simple steps: analyse an existing process, find AI opportunities, get a suggested workflow, then run a risk and policy check.",
      },
      { property: "og:title", content: "How It Works — AI Transformation Engine" },
      {
        property: "og:description",
        content: "From existing process to a governed, AI-enabled workflow in four steps.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: Workflow,
    title: "Existing Process",
    text: "Start with the process the organization already runs today.",
  },
  {
    icon: Sparkles,
    title: "AI Opportunity Analysis",
    text: "We highlight the steps where AI can genuinely help.",
  },
  {
    icon: Bot,
    title: "AI Workflow Suggestion",
    text: "A new workflow mixing AI, humans and automation.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Policy Check",
    text: "We check oversight, risk controls and audit trails.",
  },
];

function HowItWorks() {
  return (
    <PageShell
      step={1}
      eyebrow="How it works"
      title="Four steps, one clear idea"
      intro="Nothing is replaced blindly. Each stage asks whether AI helps, and whether a person should stay in charge."
    >
      <div className="mx-auto max-w-2xl">
        {steps.map((s, i) => (
          <div key={s.title}>
            <div
              style={{ animationDelay: `${i * 90}ms` }}
              className="animate-rise surface flex items-start gap-4 p-5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </p>
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
            {i < steps.length - 1 ? (
              <div className="flex justify-center py-2" aria-hidden>
                <ArrowDown className="size-5 text-primary/50" />
              </div>
            ) : null}
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft p-6 text-center">
          <p className="text-lg font-semibold">Let&apos;s see an example</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ll use a loan application process.
          </p>
          <LinkButton to="/existing-process" size="lg" className="mt-5">
            Try Example <ArrowRight className="size-5" />
          </LinkButton>
        </div>
      </div>
    </PageShell>
  );
}
