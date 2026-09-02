import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, Check, User } from "lucide-react";
import { LinkButton, PageShell } from "@/components/poc/ui";
import { cn } from "@/lib/utils";
import { setSetting, useSettings, type Settings } from "@/lib/workflow-store";

export const Route = createFileRoute("/customize")({
  head: () => ({
    meta: [
      { title: "Customize the Workflow — AI Autonomy Controls" },
      {
        name: "description",
        content:
          "Choose how much AI autonomy the organization wants, and which governance controls stay switched on.",
      },
      { property: "og:title", content: "Customize the Workflow" },
      {
        property: "og:description",
        content: "Slide between more human and more AI, then check the workflow.",
      },
    ],
  }),
  component: Customize,
});

const toggles: { key: keyof Settings; label: string; hint: string }[] = [
  {
    key: "humanReview",
    label: "Human review required",
    hint: "A person checks the AI recommendation before approval.",
  },
  {
    key: "explain",
    label: "Explain AI recommendation",
    hint: "The AI must show the reasons behind its output.",
  },
  {
    key: "history",
    label: "Keep decision history",
    hint: "Every decision is logged for later audit.",
  },
];

function Customize() {
  const s = useSettings();
  const mode = s.autonomy < 35 ? "Mostly human" : s.autonomy > 70 ? "Mostly AI" : "Balanced";

  return (
    <PageShell
      step={5}
      eyebrow="Customize"
      title="Customize the Workflow"
      intro="The suggested workflow is not final. Organizations can change how much AI autonomy they want."
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="animate-rise surface p-6">
          <h2 className="text-lg font-semibold">AI Credit Analysis</h2>
          <p className="mt-1 text-sm text-muted-foreground">Human involvement</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-human-foreground sm:flex">
              <User className="size-4" /> More Human
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={s.autonomy}
              onChange={(e) => setSetting("autonomy", Number(e.target.value))}
              aria-label="AI autonomy level"
              className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
            />
            <span className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary sm:flex">
              More AI <Bot className="size-4" />
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted-foreground sm:hidden">Human ← → AI</span>
            <span className="ml-auto rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
              {mode} · {s.autonomy}% AI
            </span>
          </div>
        </div>

        <div className="animate-rise surface divide-y divide-border p-2">
          {toggles.map((t) => {
            const on = s[t.key] as boolean;
            return (
              <button
                key={t.key}
                onClick={() => setSetting(t.key, !on as never)}
                aria-pressed={on}
                className="flex w-full items-start gap-3 rounded-xl p-4 text-left transition-colors hover:bg-muted"
              >
                <span
                  className={cn(
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-colors",
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-card",
                  )}
                >
                  {on ? <Check className="size-3.5" /> : null}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.label}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {t.hint}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <LinkButton to="/governance" size="lg" className="w-full">
          Check My Workflow <ArrowRight className="size-5" />
        </LinkButton>
      </div>
    </PageShell>
  );
}
