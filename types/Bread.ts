export type BreadType = "Sourdough" | "Baguette" | "Focaccia" | null;
export type RecipeStep =
  | "Ingredients"
  | "Mixing"
  | "Proofing"
  | "Baking"
  | null;
export type BreadItem = { name: BreadType; description: string };
