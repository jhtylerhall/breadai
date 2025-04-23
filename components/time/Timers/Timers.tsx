import { useBread } from "@/context/BreadContext";
import { memo } from "react";
import { View } from "react-native";
import { Timer } from "../Timer/Timer";

function TimersComponent() {
  const { timers } = useBread();
  return (
    <View className="inline-flex px-2">
      {timers.map((timer) => (
        <Timer timer={timer} />
      ))}
    </View>
  );
}

export const Timers = memo(TimersComponent);
