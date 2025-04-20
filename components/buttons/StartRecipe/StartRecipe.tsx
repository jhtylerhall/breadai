import { useBread } from "@/context/BreadContext";
import { BreadItem } from "@/types/Bread";
import { memo, useCallback } from "react";
import { Button } from "react-native-paper";

interface StartRecipeProps {
  bread: BreadItem;
}

function StartRecipeComponent(props: StartRecipeProps) {
  const { bread } = props;
  const { setSelectedBread } = useBread();
  const onSelectRecipe = useCallback(() => {
    setSelectedBread(bread.name);
  }, [bread, setSelectedBread]);
  return (
    <Button icon="camera" mode="elevated" onPress={onSelectRecipe}>
      See Recipe
    </Button>
  );
}

export const StartRecipe = memo(StartRecipeComponent);
