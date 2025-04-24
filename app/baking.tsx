import React, { useCallback, useState } from "react";
import { View, Text, useWindowDimensions, Pressable } from "react-native";
import { TabView, TabBar, SceneMap, TabBarItem } from "react-native-tab-view";
import { BakingIndex, SOURDOUGH_STEPS } from "@/constants/steps";
import { BakingStep } from "@/types/Bread";
import { SuggestedTimer } from "@/components/time/SuggestedTimer/SuggestedTimer";
import { Icon, MD3Colors } from "react-native-paper";

export default function BakingScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const routes = SOURDOUGH_STEPS.map((step) => ({
    key: step.id,
    title: step.title,
  }));

  const markStepComplete = useCallback((stepIndex: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepIndex) ? prev : [...prev, stepIndex]
    );
  }, []);

  const stepBodyReducer = useCallback(
    (step: BakingStep, stepIndex: number) => {
      const canComplete = !completedSteps.includes(stepIndex);
      const showCompleteButton = stepIndex === index && canComplete;
      const BasicTimerComponent = (
        <View className="flex-1">
          <Text className="text-base text-gray-700">{step.description}</Text>
          <SuggestedTimer seconds={step.timer ?? 0} />
          <View className="p-4 flex-1 justify-between">
            {showCompleteButton && (
              <View className="absolute bottom-4 right-4">
                <Pressable
                  className="bg-bread px-4 py-2 rounded-full"
                  onPress={() => markStepComplete(stepIndex)}
                >
                  <Text className="text-white font-bold">Complete</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      );
      switch (step.id) {
        case "bulk_fermentation":
          return BasicTimerComponent;
        case "mix":
          return BasicTimerComponent;
        case "proof":
          return BasicTimerComponent;
        case "bake":
          return BasicTimerComponent;
        default:
          return (
            <View className="p-4 flex-1 justify-between">
              <View>
                <Text className="text-base text-gray-700">
                  {step.description}
                </Text>
              </View>
              {showCompleteButton && (
                <View className="absolute bottom-4 right-4">
                  <Pressable
                    className="bg-bread px-4 py-2 rounded-full"
                    onPress={() => markStepComplete(stepIndex)}
                  >
                    <Text className="text-white font-bold">Complete</Text>
                  </Pressable>
                </View>
              )}
            </View>
          );
      }
    },
    [completedSteps, index, markStepComplete]
  );

  const renderScene = SceneMap(
    SOURDOUGH_STEPS.reduce((acc, step, stepIndex) => {
      acc[step.id] = () => stepBodyReducer(step, stepIndex);
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
          renderTabBarItem={(props) => {
            return (
              <View className="flex-row items-center">
                {/* @ts-expect-error ignore */}
                {completedSteps.includes(BakingIndex[props.key]) ? (
                  <Icon source="check-circle" color={"#00C853"} size={20} />
                ) : null}
                <TabBarItem {...props} />
              </View>
            );
          }}
        />
      )}
    />
  );
}
