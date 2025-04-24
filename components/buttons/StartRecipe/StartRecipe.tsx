import { useBread } from "@/context/BreadContext";
import { useSnackbar } from "@/context/SnackbarContex";
import { BreadItem } from "@/types/Bread";
import { memo, useCallback } from "react";
import { Button } from "react-native-paper";

interface StartRecipeProps {
  bread: BreadItem;
}

function StartRecipeComponent(props: StartRecipeProps) {
  const { bread } = props;
  const { setSelectedBread } = useBread();
  const snackbar = useSnackbar();
  const onSelectRecipe = useCallback(() => {
    setSelectedBread(bread.name);
    snackbar.show(bread.name);
  }, [bread, setSelectedBread, snackbar]);
  return (
    <Button icon="eye" mode="elevated" onPress={onSelectRecipe}>
      See Recipe
    </Button>
  );
}

export const StartRecipe = memo(StartRecipeComponent);
