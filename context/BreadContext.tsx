import { BreadType, RecipeStep } from "@/types/Bread";
import { TimerEvent } from "@/types/Time";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface IBreadContext {
  selectedBread: BreadType;
  setSelectedBread: (bread: BreadType) => void;
  currentStep: RecipeStep;
  setCurrentStep: (step: RecipeStep) => void;
  resetBreadState: () => void;
  timers: TimerEvent[];
  addTimers: (timers: TimerEvent[]) => void;
  removeTimers: (id: string[]) => void;
}

const BreadContext = createContext<IBreadContext | undefined>(undefined);

export const BreadProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedBread, setSelectedBread] = useState<BreadType>(null);
  const [currentStep, setCurrentStep] = useState<RecipeStep>(null);
  const [timers, setTimers] = useState<TimerEvent[]>([]);
  const resetBreadState = useCallback(() => {
    setSelectedBread(null);
    setCurrentStep(null);
  }, []);
  const addTimers = useCallback(
    (nextTimers: TimerEvent[]) => {
      setTimers([...timers, ...nextTimers]);
    },
    [timers]
  );
  const removeTimers = useCallback(
    (ids: string[]) => {
      setTimers(timers.filter((timer) => !ids.includes(timer.id)));
    },
    [timers]
  );
  const value = useMemo(
    () => ({
      selectedBread,
      setSelectedBread,
      currentStep,
      setCurrentStep,
      resetBreadState,
      timers,
      addTimers,
      removeTimers,
    }),
    [
      currentStep,
      selectedBread,
      resetBreadState,
      timers,
      addTimers,
      removeTimers,
    ]
  );

  return (
    <BreadContext.Provider value={value}>{children}</BreadContext.Provider>
  );
};

export function useBread(): IBreadContext {
  const context = useContext(BreadContext);
  if (!context) {
    throw new Error("useBread must be used within a BreadProvider");
  }
  return context;
}
