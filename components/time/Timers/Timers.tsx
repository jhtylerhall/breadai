import { useBread } from "@/context/BreadContext";
import { memo } from "react";
import { View } from "react-native";
import { Timer } from "../Timer/Timer";

function TimersComponent() {
  const { timers } = useBread();
  return (
    <View className="flex-row px-2 items-center space-x-2">
      {timers.map((timer) => (
        <Timer key={timer.id} timer={timer} />
      ))}
    </View>
  );
}

export const Timers = memo(TimersComponent);
