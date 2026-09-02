import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Bot, Cog, User, Users } from "lucide-react";
import { LinkButton, PageShell } from "@/components/poc/ui";
import { opportunities } from "@/lib/poc-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "AI Opportunity Analysis — Where Can AI Help?" },
      {
        name: "description",
        content:
          "Stage-by-stage recommendations showing where AI fits, where humans must decide, and where extra controls are needed.",
      },
      { property: "og:title", content: "AI Opportunity Analysis" },
      {
        property: "og:description",
        content: "Where can AI help, and where should people stay in charge?",
      },
    ],
  }),
  component: Analysis,
});

const toneMap = {
  ai: { icon: Bot, cls: "bg-primary-soft text-primary border-primary/25" },
  mixed: { icon: Users, cls: "bg-primary-soft text-primary border-primary/25" },
  human: { icon: User, cls: "bg-human-soft text-human-foreground border-human/30" },
  automation: {
    icon: Cog,
    cls: "bg-automation-soft text-automation-foreground border-automation/30",
  },
  risk: { icon: AlertTriangle, cls: "bg-warn-soft text-warn-foreground border-warn/30" },
} as const;

function Analysis() {
  return (
    <PageShell
      step={3}
      eyebrow="AI opportunity analysis"
      title="Where can AI help?"
      intro="Each stage gets a recommendation — not every step should become AI."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {opportunities.map((o, i) => {
          const tone = toneMap[o.tone];
          return (
            <div
              key={o.stage}
              style={{ animationDelay: `${i * 80}ms` }}
              className="animate-rise surface p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base font-semibold">{o.stage}</h2>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold",
                    tone.cls,
                  )}
                >
                  <tone.icon className="size-3.5" />
                  {o.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{o.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <LinkButton to="/workflow" size="lg">
          Generate Suggested Workflow <ArrowRight className="size-5" />
        </LinkButton>
      </div>
    </PageShell>
  );
}
