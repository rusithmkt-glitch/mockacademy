"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ExamResult } from "@/lib/exam/types";
import {
  completeSession,
  createInitialState,
  DEMO_STORAGE_KEY,
  loadDemoState,
  recordExamAttempt,
  saveDemoState,
  type CheckOutcome,
  type DemoState,
} from "./store";

interface DemoStoreValue extends DemoState {
  hydrated: boolean;
  completeSession: (outcome: CheckOutcome) => void;
  recordAttempt: (result: ExamResult) => void;
}

const DemoStoreContext = createContext<DemoStoreValue | null>(null);

export function DemoDataProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DemoState>(createInitialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Progress lives in localStorage, so it can only be read after mount;
    // hydrating state here keeps the server-rendered markup stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadDemoState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveDemoState(state);
  }, [state, hydrated]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === DEMO_STORAGE_KEY) setState(loadDemoState());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addCheckResult = useCallback((outcome: CheckOutcome) => {
    setState((current) => completeSession(current, outcome));
  }, []);

  const addAttempt = useCallback((result: ExamResult) => {
    setState((current) => recordExamAttempt(current, result));
  }, []);

  const value = useMemo<DemoStoreValue>(
    () => ({
      ...state,
      hydrated,
      completeSession: addCheckResult,
      recordAttempt: addAttempt,
    }),
    [state, hydrated, addCheckResult, addAttempt],
  );

  return (
    <DemoStoreContext.Provider value={value}>
      {children}
    </DemoStoreContext.Provider>
  );
}

export function useDemoStore(): DemoStoreValue {
  const context = useContext(DemoStoreContext);
  if (!context) {
    throw new Error("useDemoStore must be used inside DemoDataProvider");
  }
  return context;
}
