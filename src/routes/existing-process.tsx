import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Loader2, Search } from "lucide-react";
import { Arrow, Button, FlowCard, PageShell } from "@/components/poc/ui";
import { existingProcess } from "@/lib/poc-data";
import { setSetting } from "@/lib/workflow-store";

export const Route = createFileRoute("/existing-process")({
  head: () => ({
    meta: [
      { title: "Existing Process — Loan Application Example" },
      {
        name: "description",
        content:
          "A five-stage loan application process, shown as connected cards, ready for AI opportunity analysis.",
      },
      { property: "og:title", content: "Existing Process — Loan Application Example" },
      {
        property: "og:description",
        content: "The process an organization already runs today, before any AI is added.",
      },
    ],
  }),
  component: ExistingProcess,
});

const ideas = [
  "Document checks are slow and repetitive.",
  "Credit analysis needs summarising, not guessing.",
  "Approvals should still belong to a person.",
  "Processing steps are routine and rule-based.",
];

function ExistingProcess() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      setSetting("analyzed", true);
      navigate({ to: "/analysis" });
    }, 1600);
    return () => clearTimeout(t);
  }, [loading, navigate]);

  return (
    <PageShell
      step={2}
      eyebrow="Example"
      title="Loan Application Process"
      intro="This is how the process runs today — entirely manual, step after step."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {existingProcess.map((s, i) => (
            <div key={s.title}>
              <FlowCard index={i} title={s.title} note={s.note} />
              {i < existingProcess.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>

        <aside className="surface h-fit p-6 lg:sticky lg:top-24">
          <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
            <Search className="size-5" />
          </span>
          <h2 className="mt-4 text-xl font-semibold">What could AI improve?</h2>
          <ul className="mt-4 space-y-3">
            {ideas.map((t) => (
              <li key={t} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="mt-6 w-full"
            disabled={loading}
            onClick={() => setLoading(true)}
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" /> Analyzing process…
              </>
            ) : (
              <>
                Analyze Process <ArrowRight className="size-5" />
              </>
            )}
          </Button>
          {loading ? (
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Scanning 5 stages for AI opportunities, risks and policy needs…
            </p>
          ) : null}
        </aside>
      </div>
    </PageShell>
  );
}
