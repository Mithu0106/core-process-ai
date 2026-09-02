import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, Lightbulb } from "lucide-react";
import { LinkButton, PageShell } from "@/components/poc/ui";
import { cn } from "@/lib/utils";
import { useSettings } from "@/lib/workflow-store";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance Result — Is the Workflow Safe?" },
      {
        name: "description",
        content:
          "A plain-language governance check covering AI usage, human oversight, risk control and audit trail.",
      },
      { property: "og:title", content: "Governance Result" },
      {
        property: "og:description",
        content: "Does the customized workflow keep humans on the higher-risk decision?",
      },
    ],
  }),
  component: Governance,
});

function Governance() {
  const s = useSettings();
  const ok = s.humanReview;

  const checks = [
    { label: "AI Usage", pass: true },
    { label: "Human Oversight", pass: s.humanReview },
    { label: "Risk Control", pass: s.humanReview },
    { label: "Audit Trail", pass: s.history },
    { label: "AI Act / Legal Compliance", pass: s.humanReview && s.explanations },
  ];

  return (
    <PageShell
      step={6}
      eyebrow="Risk & policy check"
      title="Governance Result"
      intro="We check the workflow you customized against simple safety, policy and legal expectations, including AI Act-style requirements for high-risk AI decisions."
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <div
          className={cn(
            "animate-rise rounded-2xl border p-6 shadow-soft",
            ok
              ? "border-automation/30 bg-automation-soft"
              : "border-warn/30 bg-warn-soft",
          )}
        >
          <div className="flex items-start gap-4">
            <span
              className={cn(
                "grid size-11 shrink-0 place-items-center rounded-xl",
                ok
                  ? "bg-automation text-primary-foreground"
                  : "bg-warn text-destructive-foreground",
              )}
            >
              {ok ? <Check className="size-5" /> : <AlertTriangle className="size-5" />}
            </span>
            <div>
              <h2 className="text-xl font-semibold">
                {ok ? "Workflow Looks Good" : "Review Recommended"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {ok
                  ? "Human review is included for the higher-risk AI decision."
                  : "This workflow removes human review from a higher-risk decision."}
              </p>
              {!ok ? (
                <div className="mt-4 rounded-xl border border-warn/25 bg-card p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Lightbulb className="size-4 text-accent" /> Recommended action
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Keep a human approval step before the final decision.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="animate-rise surface divide-y divide-border">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center justify-between px-5 py-4">
              <span className="text-sm font-semibold">{c.label}</span>
              {c.pass ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-automation">
                  <Check className="size-4" /> Passed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-warn">
                  <AlertTriangle className="size-4" /> Needs attention
                </span>
              )}
            </div>
          ))}
        </div>

        {ok ? (
          <LinkButton to="/summary" size="lg" className="w-full">
            See Final Workflow <ArrowRight className="size-5" />
          </LinkButton>
        ) : (
          <LinkButton to="/customize" size="lg" variant="outline" className="w-full">
            Back to Customize
          </LinkButton>
        )}
      </div>
    </PageShell>
  );
}
