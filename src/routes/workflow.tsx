import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Arrow, FlowCard, KindBadge, LinkButton, PageShell } from "@/components/poc/ui";
import { suggestedWorkflow } from "@/lib/poc-data";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "Suggested AI-Enabled Workflow" },
      {
        name: "description",
        content:
          "An improved loan workflow combining AI assistants, human review checkpoints and rule-based automation.",
      },
      { property: "og:title", content: "Suggested AI-Enabled Workflow" },
      {
        property: "og:description",
        content: "AI, human and automation steps working together — click any step for details.",
      },
    ],
  }),
  component: SuggestedWorkflow,
});

function SuggestedWorkflow() {
  const [selected, setSelected] = useState("credit");
  const step = suggestedWorkflow.find((s) => s.id === selected)!;

  return (
    <PageShell
      step={4}
      eyebrow="Suggestion"
      title="Suggested AI-Enabled Workflow"
      intro="Click any step to see what AI does, whether a human is involved, and the risk level."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {suggestedWorkflow.map((s, i) => (
            <div key={s.id}>
              <FlowCard
                index={i}
                title={s.title}
                kind={s.kind}
                active={s.id === selected}
                onClick={() => setSelected(s.id)}
              />
              {i < suggestedWorkflow.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <div key={step.id} className="animate-rise surface p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Info className="size-4" /> Step details
            </div>
            <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
            <div className="mt-2">
              <KindBadge kind={step.kind} />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{step.summary}</p>

            <p className="mt-5 text-sm font-semibold">
              {step.kind === "ai" ? "AI helps analyze:" : "This step involves:"}
            </p>
            <ul className="mt-2 space-y-1.5">
              {step.helps.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
              <Row label="Recommended approach" value={step.approach} />
              <Row label="Human involvement" value={step.human} />
              <Row label="Risk" value={step.risk} />
            </dl>
          </div>

          <div className="mt-6">
            <LinkButton to="/customize" size="lg" className="w-full">
              Customize the Workflow <ArrowRight className="size-5" />
            </LinkButton>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold">{value}</dd>
    </div>
  );
}
