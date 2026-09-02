import { useSyncExternalStore } from "react";

export type Settings = {
  /** 0 = more human, 100 = more AI */
  autonomy: number;
  humanReview: boolean;
  explain: boolean;
  history: boolean;
  analyzed: boolean;
};

const initial: Settings = {
  autonomy: 45,
  humanReview: true,
  explain: true,
  history: true,
  analyzed: false,
};

let state: Settings = { ...initial };
const listeners = new Set<() => void>();

function emit() {
  state = { ...state };
  listeners.forEach((l) => l());
}

export function setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
  state[key] = value;
  emit();
}

export function resetSettings() {
  state = { ...initial };
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useSettings(): Settings {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => initial,
  );
}
