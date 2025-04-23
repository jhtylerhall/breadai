import { useBread } from "@/context/BreadContext";
import { TimerEvent } from "@/types/Time";
import { memo, useCallback, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

interface TimerProps {
  timer: TimerEvent;
}

function TimerComponent(props: TimerProps) {
  const { timer } = props;
  const { removeTimers } = useBread();
  const [showDelete, setShowDelete] = useState(false);

  const onCancelTimer = useCallback(() => {
    removeTimers([timer.id]);
  }, [timer, removeTimers]);

  const onLongPressTimer = useCallback(() => {
    setShowDelete(prev => !prev);
  }, []);

  const totalSeconds = timer.hours * 3600 + timer.minutes * 60;

  return (
    <View className="relative w-20 h-20 items-center justify-center">
      {showDelete && (
        <View className="absolute top-0 right-0 z-10">
          <IconButton
            icon="close"
            iconColor={MD3Colors.primary0}
            size={16}
            onPress={onCancelTimer}
          />
        </View>
      )}

      <Pressable onLongPress={onLongPressTimer}>
        <CountdownCircleTimer
          isPlaying
          duration={totalSeconds}
          size={64}
          strokeWidth={6}
          trailColor="#e6e6e6"
          colors={["#2196F3", "#FFC107", "#F44336"]}
          colorsTime={[totalSeconds, Math.floor(totalSeconds / 2), 0]}
          onComplete={() => {
            return { shouldRepeat: false };
          }}
        >
          {({ remainingTime }) => (
            <Text className="text-xs text-black font-semibold">
              {remainingTime}s
            </Text>
          )}
        </CountdownCircleTimer>
      </Pressable>
    </View>
  );
}

export const Timer = memo(TimerComponent);
