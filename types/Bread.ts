export type SupportedBreads = "Sourdough" | "Baguette" | "Focaccia";
export type BreadType = SupportedBreads | null;
export type RecipeStep =
  | "Ingredients"
  | "Mixing"
  | "Proofing"
  | "Baking"
  | null;
export type BreadItem = { name: SupportedBreads; description: string };
