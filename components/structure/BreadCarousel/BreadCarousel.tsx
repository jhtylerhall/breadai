import { BreadItem } from "@/types/Bread";
import { memo, useCallback } from "react";
import { FlatList, Dimensions } from "react-native";
import { BreadCard } from "../BreadCard/BreadCard";

const { width, height } = Dimensions.get("window");
const keyExtractor = (item: BreadItem) => String(item.name);
const CONTAINER_STYLE = { paddingHorizontal: 20 };

const breadTypes: BreadItem[] = [
  { name: "Sourdough", description: "Tangy and crusty" },
  { name: "Baguette", description: "Long and French" },
  { name: "Focaccia", description: "Herby and soft" },
];

function BreadCarouselComponent() {
  const cardWidth = width * 0.8;

  const renderFlatListItem = useCallback(
    ({ item }: { item: BreadItem }) => <BreadCard bread={item} />,
    [cardWidth]
  );

  return (
    <FlatList
      data={breadTypes}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={cardWidth + 16}
      decelerationRate="fast"
      contentContainerStyle={CONTAINER_STYLE}
      keyExtractor={keyExtractor}
      renderItem={renderFlatListItem}
    />
  );
}

export const BreadCarousel = memo(BreadCarouselComponent);
