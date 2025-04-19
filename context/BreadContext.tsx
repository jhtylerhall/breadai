import { BreadType, RecipeStep } from "@/types/Bread";
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
}

const BreadContext = createContext<IBreadContext | undefined>(undefined);

export const BreadProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedBread, setSelectedBread] = useState<BreadType>(null);
  const [currentStep, setCurrentStep] = useState<RecipeStep>(null);

  const resetBreadState = useCallback(() => {
    setSelectedBread(null);
    setCurrentStep(null);
  }, []);
  const value = useMemo(
    () => ({
      selectedBread,
      setSelectedBread,
      currentStep,
      setCurrentStep,
      resetBreadState,
    }),
    [currentStep, selectedBread, resetBreadState]
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
