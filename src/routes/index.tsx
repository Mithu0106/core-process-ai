import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, ShieldCheck, User, Workflow } from "lucide-react";
import { LinkButton, TopBar } from "@/components/poc/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Transformation & Governance Engine" },
      {
        name: "description",
        content:
          "Turn existing business processes into smarter, safer AI-enabled workflows with built-in human oversight and governance checks.",
      },
      { property: "og:title", content: "AI Transformation & Governance Engine" },
      {
        property: "og:description",
        content:
          "Turn existing business processes into smarter, safer AI-enabled workflows.",
      },
    ],
  }),
  component: Welcome,
});

const pillars = [
  { icon: Bot, title: "Where AI helps", text: "Spot the steps AI can speed up." },
  { icon: User, title: "Where humans stay", text: "Keep people on key decisions." },
  { icon: ShieldCheck, title: "What the risks are", text: "Surface risk before rollout." },
  { icon: Workflow, title: "What rules apply", text: "Check policies and audit trails." },
];

function Welcome() {
  return (
    <div className="min-h-screen">
      <TopBar current={0} />
      <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:pt-24">
        <div className="animate-rise max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Final-year project prototype
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            AI Transformation &amp; Governance Engine
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Turn existing business processes into smarter, safer AI-enabled workflows.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Upload or describe a business process. Our system identifies where AI can
            help, where human decisions are needed, and what governance controls should
            be applied.
          </p>
          <div className="mt-9">
            <LinkButton to="/how-it-works" size="lg">
              Explore Demo <ArrowRight className="size-5" />
            </LinkButton>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              style={{ animationDelay: `${120 + i * 80}ms` }}
              className="animate-rise surface p-5"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <p.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
