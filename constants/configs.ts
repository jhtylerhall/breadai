import { SupportedBreads } from "@/types/Bread";

const breadImages: Record<SupportedBreads, any> = {
  Sourdough: require("@/assets/images/breads/Sourdough.png"),
  Baguette: require("@/assets/images/breads/Baguette.png"),
  Focaccia: require("@/assets/images/breads/Focaccia.png"),
};

export { breadImages };
