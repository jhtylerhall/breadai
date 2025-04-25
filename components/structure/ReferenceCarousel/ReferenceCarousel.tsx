// components/ReferenceCarousel/ReferenceCarousel.tsx
import React, { memo, useCallback } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.6;
const SPACING = 16;

interface ReferenceCarouselProps {
  images: (string | number)[];
}

function ReferenceCarouselComponent({ images }: ReferenceCarouselProps) {
  const renderItem = useCallback(
    ({ item }: { item: string | number }) => (
      <View
        style={{
          width: ITEM_WIDTH,
          marginHorizontal: SPACING / 2,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image
          source={typeof item === "string" ? { uri: item } : item}
          style={{ width: "100%", height: ITEM_WIDTH * 0.75 }}
          resizeMode="cover"
        />
      </View>
    ),
    []
  );

  return (
    <FlatList
      className="p-2"
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, idx) => String(idx)}
      renderItem={renderItem}
      snapToAlignment="center"
      snapToInterval={ITEM_WIDTH + SPACING}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: SPACING }}
    />
  );
}

export const ReferenceCarousel = memo(ReferenceCarouselComponent);
