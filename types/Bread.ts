export type SupportedBreads = "Sourdough" | "Baguette" | "Focaccia";
export type BreadType = SupportedBreads | null;
export type RecipeStep =
  | "Ingredients"
  | "Mixing"
  | "Proofing"
  | "Baking"
  | null;
export type BreadItem = { name: SupportedBreads; description: string };
export type BakingStep = {
  id: string;
  title: string;
  description: string;
  timer?: number;
};
