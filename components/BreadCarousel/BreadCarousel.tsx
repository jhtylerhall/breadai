import { memo, useCallback } from "react";
import { FlatList, Dimensions, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";

const { width } = Dimensions.get("window");

type BreadItem = { name: string; description: string };
const keyExtractor = (item: BreadItem) => (item.name);
const CONTAINER_STYLE = { paddingHorizontal: 20, paddingVertical: 40 }

const breadTypes: BreadItem[] = [
  { name: "Sourdough", description: "Tangy and crusty" },
  { name: "Baguette", description: "Long and French" },
  { name: "Focaccia", description: "Herby and soft" },
];

function BreadCarouselComponent() {
  const cardWidth = width * 0.8;

  const renderFlatListItem = useCallback(
    ({ item }: { item: BreadItem }) => (
      <Card
        className="mx-2 bg-white shadow-md rounded-xl"
        style={{ width: cardWidth } as ViewStyle}
        mode="outlined"
      >
        <Card.Content className="gap-1">
          <Text variant="titleLarge" className="text-bread font-semibold">
            {item.name}
          </Text>
          <Text variant="bodyMedium" className="text-gray-600">
            {item.description}
          </Text>
        </Card.Content>
      </Card>
    ),
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
