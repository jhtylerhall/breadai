import { Dimensions, View, ViewStyle, ImageBackground } from "react-native";
import { Card, Text } from "react-native-paper";
import { StartRecipe } from "../../buttons/StartRecipe/StartRecipe";
import { StartBaking } from "@/components/buttons/StartBaking/StartBaking";
import React, { memo } from "react";
import { BreadItem } from "@/types/Bread";
import { breadImages } from "@/constants/configs";

const { width, height } = Dimensions.get("window");

interface BreadCardProps {
  bread: BreadItem;
}

function BreadCardComponent(props: BreadCardProps) {
  const { bread } = props;
  const cardWidth = width * 0.8;
  const cardHeight = height * 0.75;

  return (
    <View className="flex-1">
      <Text
        variant="titleLarge"
        className="font-semibold text-center underline"
      >
        {bread.name}
      </Text>
      <Card
        className="mx-2 shadow-md rounded-xl overflow-hidden"
        style={{ width: cardWidth, height: cardHeight } as ViewStyle}
        mode="outlined"
      >
        <ImageBackground
          source={breadImages[bread.name]}
          resizeMode="cover"
          style={{ height: cardHeight }}
          imageStyle={{ opacity: 0.8 }}
        >
          <Card.Content
            className="flex-1 justify-between p-4"
            style={{ height: cardHeight }}
          >
            <View className="flex-1" />
            <View className="pb-2 flex flex-row justify-evenly items-center">
              <StartRecipe bread={bread} />
              <StartBaking bread={bread} />
            </View>
          </Card.Content>
        </ImageBackground>
      </Card>
    </View>
  );
}

export const BreadCard = memo(BreadCardComponent);
