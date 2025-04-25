import { memo, useCallback, useState } from "react";
import { View, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { IconButton, MD3Colors } from "react-native-paper";
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
  const [key, setKey] = useState(0); // to reset timer
  const snackbar = useSnackbar();

  const onTimerComplete = useCallback(() => {
    snackbar.show(`⏱️ ${label} complete!`);
    return { shouldRepeat: false };
  }, [label, snackbar]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    const paddedSecs = secs < 10 ? `0${secs}` : secs;
    return `${minutes}:${paddedSecs}`;
  };

  const onReset = () => {
    setIsPlaying(false);
    setKey((prevKey) => prevKey + 1); // forces timer to re-mount
  };

  return (
    <View className="items-center justify-center mt-4 p-2">
      <Text className="text-lg font-semibold mb-2 text-bread">{label}</Text>

      <CountdownCircleTimer
        key={key} // important for reset
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
            {formatTime(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>

      <View className="flex-row gap-2 mt-4">
        {/* Play/Pause Button */}
        <IconButton
          icon={isPlaying ? "pause" : "play"}
          iconColor={MD3Colors.primary40}
          size={48}
          onPress={() => setIsPlaying((prev) => !prev)}
        />

        {/* Reset Button */}
        <IconButton
          icon="restart"
          iconColor={MD3Colors.error40}
          size={48}
          onPress={onReset}
        />
      </View>
    </View>
  );
}

export const SuggestedTimer = memo(SuggestedTimerComponent);
