import { useBread } from "@/context/BreadContext";
import { BreadItem } from "@/types/Bread";
import { useRouter } from "expo-router";
import { memo, useCallback } from "react";
import { Button } from "react-native-paper";

interface StartRecipeProps {
  bread: BreadItem;
}

function StartBakingComponent(props: StartRecipeProps) {
  const { bread } = props;
  const { setSelectedBread } = useBread();
  const router = useRouter();
  const onSelectRecipe = useCallback(() => {
    setSelectedBread(bread.name);
    router.push("./baking");
  }, [bread, setSelectedBread, router]);
  return (
    <Button icon="chef-hat" mode="elevated" onPress={onSelectRecipe}>
      Start Baking
    </Button>
  );
}

export const StartBaking = memo(StartBakingComponent);
