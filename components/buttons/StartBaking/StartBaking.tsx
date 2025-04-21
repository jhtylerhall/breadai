import { useBread } from "@/context/BreadContext";
import { BreadItem } from "@/types/Bread";
import { memo, useCallback } from "react";
import { Button } from "react-native-paper";

interface StartRecipeProps {
  bread: BreadItem;
}

function StartBakingComponent(props: StartRecipeProps) {
  const { bread } = props;
  const { setSelectedBread } = useBread();
  const onSelectRecipe = useCallback(() => {
    setSelectedBread(bread.name);
  }, [bread, setSelectedBread]);
  return (
    <Button icon="chef-hat" mode="elevated" onPress={onSelectRecipe}>
      Start Baking
    </Button>
  );
}

export const StartBaking = memo(StartBakingComponent);
