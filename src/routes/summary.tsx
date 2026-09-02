import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { Arrow, Button, FlowCard, PageShell } from "@/components/poc/ui";
import { finalWorkflow } from "@/lib/poc-data";
import { resetSettings } from "@/lib/workflow-store";

export const Route = createFileRoute("/summary")({
  head: () => ({
    meta: [
      { title: "Your AI Transformation Plan — Final Summary" },
      {
        name: "description",
        content:
          "The final governed workflow: AI opportunities, human checkpoints, risk controls and passed policy checks.",
      },
      { property: "og:title", content: "Your AI Transformation Plan" },
      {
        property: "og:description",
        content:
          "Adopt AI without handing the entire workflow over to AI — the final plan at a glance.",
      },
    ],
  }),
  component: Summary,
});

const stats = [
  { label: "Existing Process", value: "Loan Application Process" },
  { label: "AI Opportunities", value: "3 identified" },
  { label: "Human Checkpoints", value: "2 recommended" },
  { label: "Risk Controls", value: "4 suggested" },
  { label: "Policy Checks", value: "Passed" },
];

function Summary() {
  const navigate = useNavigate();

  return (
    <PageShell
      step={7}
      eyebrow="Final summary"
      title="Your AI Transformation Plan"
      intro="A clear before-and-after: what AI takes on, and where people stay in control."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{ animationDelay: `${i * 70}ms` }}
            className="animate-rise surface p-5"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-2 text-lg font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <h2 className="text-center text-lg font-semibold">Final Workflow</h2>
        <div className="mt-6">
          {finalWorkflow.map((s, i) => (
            <div key={s.title}>
              <FlowCard index={i} title={s.title} kind={s.kind} />
              {i < finalWorkflow.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft p-6 text-center text-base leading-relaxed">
          This is how the proposed system helps organizations adopt AI without simply
          handing the entire workflow to AI.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={() => {
              resetSettings();
              navigate({ to: "/" });
            }}
          >
            <RotateCcw className="size-5" /> Start Another Process
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
