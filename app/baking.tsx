import React, { useCallback, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { BakingIndex, SOURDOUGH_STEPS } from "@/constants/steps";
import { BakingStep } from "@/types/Bread";
import { SuggestedTimer } from "@/components/time/SuggestedTimer/SuggestedTimer";
import { Button, Icon, IconButton, MD3Colors } from "react-native-paper";
import { Ingredients } from "@/components/steps/Ingredients/Ingredients";
import { useRouter } from "expo-router";
import { ReferenceCarousel } from "@/components/structure/ReferenceCarousel/ReferenceCarousel";

const ICON_SIZE = 16;

const StepScene: React.FC<{
  step: BakingStep;
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
}> = ({ step, isActive, isCompleted, onComplete }) => {
  const [taskCompleted, setTaskCompleted] = useState(
    step.ingredients ? false : true
  );
  const onSelectHelp = useCallback(() => {}, []);
  return (
    <View className="flex-1 p-4 justify-between">
      <Text className="text-base text-gray-700">{step.description}</Text>
      {step.timer != null && <SuggestedTimer seconds={step.timer} />}
      {step.ingredients != null && (
        <Ingredients
          ingredients={step.ingredients}
          onAllChecked={() => setTaskCompleted(true)}
          isCompleted={isCompleted}
        />
      )}
      {step.referenceImages != null && (
        <ReferenceCarousel images={step.referenceImages} />
      )}
      <View className="inline-flex items-center flex-row">
        <Button icon="chat-question" mode="elevated" onPress={onSelectHelp}>
          Help
        </Button>
        {isActive && !isCompleted ? (
          <View className="ml-auto">
            <IconButton
              icon="arrow-right-circle"
              iconColor={taskCompleted ? MD3Colors.primary0 : MD3Colors.error0}
              size={48}
              onPress={onComplete}
              disabled={!taskCompleted}
            />
          </View>
        ) : (
          <View className="ml-auto">
            <IconButton
              icon="check-circle"
              iconColor={"#00C853"}
              size={48}
              disabled={!taskCompleted}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default function BakingScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const router = useRouter();

  const routes = SOURDOUGH_STEPS.map((step) => ({
    key: step.id,
    title: step.title,
  }));

  const markStepComplete = useCallback(
    (stepIndex: number) => {
      setCompletedSteps((prev) =>
        prev.includes(stepIndex) ? prev : [...prev, stepIndex]
      );
      if (index + 1 === SOURDOUGH_STEPS.length) {
        router.push("./share");
      }
      setIndex(index + 1);
    },
    [index, router]
  );

  const renderScene = SceneMap(
    SOURDOUGH_STEPS.reduce((scenes, step, stepIndex) => {
      scenes[step.id] = () => (
        <StepScene
          step={step}
          isActive={index === stepIndex}
          isCompleted={completedSteps.includes(stepIndex)}
          onComplete={() => markStepComplete(stepIndex)}
        />
      );
      return scenes;
    }, {} as Record<string, React.ComponentType>)
  );

  // @ts-expect-error vibe
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      className="bg-black/90"
      indicatorStyle={{ backgroundColor: "#F4A261" }}
      // This breaks the tab component
      // renderTabBarItem={({ route, ...itemProps }) => {
      //   // @ts-expect-error vibe
      //   const stepIndex = BakingIndex[route.key];
      //   const isDone = completedSteps.includes(stepIndex);
      //   return (
      //     <View className="inline-flex flex-row items-center space-x-2">
      //       {isDone && (
      //         <Icon source="check-circle" size={ICON_SIZE} color="#00C853" />
      //       )}
      //       <TabBarItem route={route} {...itemProps} />
      //     </View>
      //   );
      // }}
      onTabPress={({ route, preventDefault }) => {
        // @ts-expect-error vibe
        const stepIndex = BakingIndex[route.key];
        if (stepIndex > 0 && !completedSteps.includes(stepIndex - 1)) {
          preventDefault();
        }
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy
    />
  );
}
