import { BakingStep } from "@/types/Bread";

export const BakingIndex = {
  gather: 0,
  mix: 1,
  bulk_fermentation: 2,
  shape: 3,
  proof: 4,
  bake: 5,
};

export const GATHER_INGREDIENTS = [
  { id: "flour", label: "Flour", amount: "2 cups" },
  { id: "water", label: "Water", amount: "3 tbsp" },
  { id: "oven", label: "Pre-heat oven", amount: "324°F" },
];

export const SOURDOUGH_STEPS: BakingStep[] = [
  {
    id: "gather",
    title: "Gather Ingredients",
    description: "Collect flour, water, starter, and pre-heat oven.",
    ingredients: GATHER_INGREDIENTS,
  },
  {
    id: "mix",
    title: "Mix Dough",
    description:
      "Combine ingredients until well mixed. Let rest for 30 minutes.",
    timer: 1800, // seconds
    referenceImages: [
      require("@/assets/images/reference/MixingReference1.png"),
      require("@/assets/images/reference/MixingReference2.png"),
    ],
  },
  {
    id: "bulk_fermentation",
    title: "Bulk Fermentation",
    description: "Let the dough rise for 4 hours, stretching every 30 minutes.",
    timer: 14400,
    referenceImages: [
      require("@/assets/images/reference/FerementationReference1.png"),
    ],
  },
  {
    id: "shape",
    title: "Shape Dough",
    description: "Shape the dough and place it into a proofing basket.",
    referenceImages: [
      require("@/assets/images/reference/KneadingReference1.png"),
    ],
  },
  {
    id: "proof",
    title: "Final Proof",
    description:
      "Let the dough proof at room temperature for 1 hour or overnight in the fridge.",
    timer: 3600,
    referenceImages: [require("@/assets/images/reference/ProofingExample.png")],
  },
  {
    id: "bake",
    title: "Bake",
    description:
      "Bake at 450°F for 20 minutes with lid, then 20 minutes without.",
    timer: 2400,
    referenceImages: [
      require("@/assets/images/reference/Sourdough_Finished.png"),
    ],
  },
];
