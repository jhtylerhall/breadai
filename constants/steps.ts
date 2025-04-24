export const SOURDOUGH_STEPS = [
  {
    id: "gather",
    title: "Gather Ingredients",
    description: "Collect flour, water, starter, and salt.",
  },
  {
    id: "mix",
    title: "Mix Dough",
    description:
      "Combine ingredients until well mixed. Let rest for 30 minutes.",
    timer: 1800, // seconds
  },
  {
    id: "bulk_fermentation",
    title: "Bulk Fermentation",
    description: "Let the dough rise for 4 hours, stretching every 30 minutes.",
    timer: 14400,
  },
  {
    id: "shape",
    title: "Shape Dough",
    description: "Shape the dough and place it into a proofing basket.",
  },
  {
    id: "proof",
    title: "Final Proof",
    description:
      "Let the dough proof at room temperature for 1 hour or overnight in the fridge.",
    timer: 3600,
  },
  {
    id: "bake",
    title: "Bake",
    description:
      "Bake at 450°F for 20 minutes with lid, then 20 minutes without.",
    timer: 2400,
  },
];

export const GATHER_INGREDIENTS = [
  { id: "flour", label: "Flour", amount: "2 cups" },
  { id: "water", label: "Water", amount: "3 tbsp" },
  { id: "oven", label: "Pre-heat oven", amount: "324°F" },
];
