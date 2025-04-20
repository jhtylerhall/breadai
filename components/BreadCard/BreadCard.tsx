import { BreadItem } from "@/types/Bread";
import { Dimensions, View, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";
import { StartRecipe } from "../buttons/StartRecipe/StartRecipe";
import { memo } from "react";

const { width, height } = Dimensions.get("window");

interface BreadCardProps {
  bread: BreadItem;
}

function BreadCardComponent(props: BreadCardProps) {
  const { bread } = props;
  const cardWidth = width * 0.8;
  const cardHeight = height * 0.8;
  return (
    <Card
      className="mx-2 bg-white shadow-md rounded-xl"
      style={{ width: cardWidth, height: cardHeight } as ViewStyle}
      mode="outlined"
    >
      <Card.Content className="gap-1">
        <Text variant="titleLarge" className="text-bread font-semibold">
          {bread.name}
        </Text>
        <View>
          <StartRecipe bread={bread} />
        </View>
      </Card.Content>
    </Card>
  );
}

export const BreadCard = memo(BreadCardComponent);
