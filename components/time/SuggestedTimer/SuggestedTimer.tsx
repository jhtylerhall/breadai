import { memo, useCallback, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSnackbar } from "@/context/SnackbarContex";

interface SuggestedTimerProps {
  seconds: number;
  label?: string;
}

function SuggestedTimerComponent({
  seconds,
  label = "Suggested Time",
}: SuggestedTimerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const snackbar = useSnackbar();

  const onTimerComplete = useCallback(() => {
    snackbar.show(`⏱️ ${label} complete!`);
    return { shouldRepeat: false };
  }, [label, snackbar]);

  return (
    <View className="items-center justify-center mt-4">
      <Text className="text-lg font-semibold mb-2 text-bread">{label}</Text>

      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={seconds}
        size={100}
        strokeWidth={8}
        trailColor="#f0f0f0"
        colors={["#2196F3", "#FFC107", "#F44336"]}
        colorsTime={[seconds, Math.floor(seconds / 2), 0]}
        onComplete={onTimerComplete}
      >
        {({ remainingTime }) => (
          <Text className="text-base font-bold text-black">
            {remainingTime}s
          </Text>
        )}
      </CountdownCircleTimer>

      <View className="flex-row gap-2 mt-4">
        <Pressable
          onPress={() => setIsPlaying(true)}
          className="bg-green-500 px-4 py-2 rounded-full"
        >
          <Text className="text-white font-bold">Start</Text>
        </Pressable>

        <Pressable
          onPress={() => setIsPlaying(false)}
          className="bg-yellow-500 px-4 py-2 rounded-full"
        >
          <Text className="text-white font-bold">Pause</Text>
        </Pressable>
      </View>
    </View>
  );
}

export const SuggestedTimer = memo(SuggestedTimerComponent);
