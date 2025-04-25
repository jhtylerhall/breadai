import { SupportedBreads } from "@/types/Bread";

const breadImages: Record<SupportedBreads, any> = {
  Sourdough: require("@/assets/images/breads/Sourdough.png"),
  Baguette: require("@/assets/images/breads/Baguette.png"),
  Focaccia: require("@/assets/images/breads/Focaccia.png"),
};

const ingredientImages: Record<string, any> = {
  flour: require("@/assets/images/icons/flour.png"),
  water: require("@/assets/images/icons/water.png"),
  oven: require("@/assets/images/icons/oven.png"),
};

export { breadImages, ingredientImages };
