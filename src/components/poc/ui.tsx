import { Link } from "@tanstack/react-router";
import { ArrowDown, Bot, Cog, Sparkles, User } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { kindLabel, type Kind } from "@/lib/poc-data";

/* ---------------- buttons ---------------- */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  soft: "bg-primary-soft text-primary hover:bg-secondary",
  ghost: "text-muted-foreground hover:text-foreground",
  outline: "border border-input bg-card text-foreground hover:bg-muted",
} as const;

const sizes = {
  lg: "px-8 py-4 text-base",
  md: "px-5 py-2.5 text-sm",
} as const;

type BtnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
}: BtnProps & { to: string }) {
  return (
    <Link
      to={to}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

/* ---------------- page chrome ---------------- */

const steps = [
  { to: "/", label: "Welcome" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/existing-process", label: "Process" },
  { to: "/analysis", label: "AI analysis" },
  { to: "/workflow", label: "Suggestion" },
  { to: "/customize", label: "Customize" },
  { to: "/governance", label: "Governance" },
  { to: "/summary", label: "Summary" },
];

export function PageShell({
  step,
  eyebrow,
  title,
  intro,
  children,
}: {
  step: number;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopBar current={step} />
      <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10">
        <header className="animate-rise max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
          {intro ? (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </main>
    </div>
  );
}

export function TopBar({ current }: { current: number }) {
  return (
    <div className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-5 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="hidden text-sm font-bold sm:inline">
            AI Transformation &amp; Governance Engine
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {steps.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                i === current
                  ? "bg-primary-soft text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <span className="ml-auto text-xs font-semibold text-muted-foreground lg:hidden">
          Step {current + 1} / {steps.length}
        </span>
      </div>
    </div>
  );
}

/* ---------------- flow pieces ---------------- */

export function Arrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden>
      <ArrowDown className="size-5 text-primary/50" />
    </div>
  );
}

const kindStyles: Record<Kind, string> = {
  start: "bg-muted text-muted-foreground border-border",
  ai: "bg-primary-soft text-primary border-primary/25",
  human: "bg-human-soft text-human-foreground border-human/30",
  automation: "bg-automation-soft text-automation-foreground border-automation/30",
};

const kindIcon: Record<Kind, typeof Bot> = {
  start: User,
  ai: Bot,
  human: User,
  automation: Cog,
};

export function KindBadge({ kind }: { kind: Kind }) {
  const Icon = kindIcon[kind];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        kindStyles[kind],
      )}
    >
      <Icon className="size-3" />
      {kindLabel[kind]}
    </span>
  );
}

export function FlowCard({
  title,
  note,
  kind = "start",
  active,
  onClick,
  index,
}: {
  title: string;
  note?: string;
  kind?: Kind;
  active?: boolean;
  onClick?: () => void;
  index?: number;
}) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      style={index != null ? { animationDelay: `${index * 70}ms` } : undefined}
      className={cn(
        "animate-rise surface flex w-full items-center gap-4 px-5 py-4 text-left transition-all",
        onClick && "hover:-translate-y-0.5 hover:shadow-lift",
        active && "ring-2 ring-ring",
      )}
    >
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl border",
          kindStyles[kind],
        )}
      >
        {(() => {
          const Icon = kindIcon[kind];
          return <Icon className="size-4" />;
        })()}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">{title}</span>
          {kind !== "start" ? <KindBadge kind={kind} /> : null}
        </span>
        {note ? (
          <span className="mt-0.5 block text-sm text-muted-foreground">{note}</span>
        ) : null}
      </span>
    </Comp>
  );
}
