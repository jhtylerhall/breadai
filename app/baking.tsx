import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { SOURDOUGH_STEPS } from "@/constants/steps";

export default function BakingScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  // Map steps to routes
  const routes = SOURDOUGH_STEPS.map((step) => ({
    key: step.id,
    title: step.title,
  }));

  // Render each step screen dynamically
  const renderScene = SceneMap(
    SOURDOUGH_STEPS.reduce((acc, step) => {
      acc[step.id] = () => (
        <View className="p-4">
          <Text className="text-xl font-bold mb-2 text-bread">
            {step.title}
          </Text>
          <Text className="text-base text-gray-700">{step.description}</Text>
          {/* TODO: Insert a Timer or image or video here */}
        </View>
      );
      return acc;
    }, {} as Record<string, () => JSX.Element>)
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={{ backgroundColor: "#F4A261" }}
        />
      )}
    />
  );
}
