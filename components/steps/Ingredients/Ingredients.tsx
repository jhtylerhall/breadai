import { ingredientImages } from "@/constants/configs";
import { BakingStep } from "@/types/Bread";
import { memo, useCallback, useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Checkbox, List } from "react-native-paper";

interface IngredientsProps {
  ingredients: BakingStep["ingredients"];
  isCompleted: boolean;
  onAllChecked?: () => void;
}

function IngredientsComponent(props: IngredientsProps) {
  const { ingredients, onAllChecked, isCompleted } = props;
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleChecked = useCallback((id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  useEffect(() => {
    if (
      ingredients &&
      checkedIds.length === ingredients.length &&
      onAllChecked
    ) {
      onAllChecked();
    }
  }, [checkedIds, ingredients, onAllChecked]);

  // 👇 Dynamic load based on ingredient.id
  const LeftIcon = useCallback(
    (id: string) => () => {
      try {
        const img = ingredientImages[id];
        return (
          <Image
            source={img}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        );
      } catch (error) {
        console.warn(`Missing image for ingredient: ${id}`);
        return null;
      }
    },
    []
  );

  return (
    <List.Section>
      <List.Subheader>Prep</List.Subheader>
      {ingredients?.map((ingredient) => (
        <View
          key={ingredient.id}
          className="flex-row items-center justify-between px-2"
        >
          <List.Item
            title={`${ingredient.label}: ${ingredient.amount}`}
            left={LeftIcon(ingredient.id)} // 🔥 Pass id dynamically
            style={{ flex: 1 }}
          />
          <Checkbox
            status={
              isCompleted || checkedIds.includes(ingredient.id)
                ? "checked"
                : "unchecked"
            }
            onPress={() => toggleChecked(ingredient.id)}
          />
        </View>
      ))}
    </List.Section>
  );
}

export const Ingredients = memo(IngredientsComponent);
