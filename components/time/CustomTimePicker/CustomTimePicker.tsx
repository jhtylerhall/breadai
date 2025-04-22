import { Dispatch, memo, useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import { Button, Modal, Portal, Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

interface TimePickerProps {
  visible: boolean;
  setVisible: Dispatch<React.SetStateAction<boolean>>;
}

const hoursList = Array.from({ length: 13 }, (_, i) => i);
const minutesList = Array.from({ length: 61 }, (_, i) => i); 

const CustomTimePickerComponent = ({ visible, setVisible }: TimePickerProps) => {
  const [hoursToWait, setHoursToWait] = useState(0);
  const [minutesToWait, setMinutesToWait] = useState(0);

  const now = useMemo(() => new Date(), []);
  const futureTime = useMemo(() => {
    const target = new Date(now);
    target.setHours(now.getHours() + hoursToWait);
    target.setMinutes(now.getMinutes() + minutesToWait);
    return target;
  }, [now, hoursToWait, minutesToWait]);

  const futureTimeDisplay = useMemo(
    () => futureTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    [futureTime]
  );

  const close = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={close} contentContainerStyle={{ padding: 0 }}>
        <View className="bg-white mx-5 rounded-xl p-6 items-center justify-center space-y-6">
          <Text className="text-lg font-bold">Set Wait Time</Text>
          <View className="flex-row justify-center space-x-6 w-full">
            <View className="items-center">
              <Text className="mb-1">Hours</Text>
              <Picker
                selectedValue={hoursToWait}
                onValueChange={(val) => setHoursToWait(val)}
                style={{ width: 100 }}
              >
                {hoursList.map((val) => (
                  <Picker.Item key={val} label={`${val}`} value={val} />
                ))}
              </Picker>
            </View>
            <View className="items-center">
              <Text className="mb-1">Minutes</Text>
              <Picker
                selectedValue={minutesToWait}
                onValueChange={(val) => setMinutesToWait(val)}
                style={{ width: 100 }}
              >
                {minutesList.map((val) => (
                  <Picker.Item key={val} label={`${val}`} value={val} />
                ))}
              </Picker>
            </View>
          </View>
          <Text className="text-base pt-2">⏰ Ready at: {futureTimeDisplay}</Text>
          <View className="flex-row space-x-4 pt-2">
            <Button onPress={close}>Done</Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export const CustomTimePicker = memo(CustomTimePickerComponent);
