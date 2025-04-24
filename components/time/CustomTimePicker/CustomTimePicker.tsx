import { Dispatch, memo, useCallback, useMemo, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  Button,
  IconButton,
  MD3Colors,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useBread } from "@/context/BreadContext";
import uuid from "react-native-uuid";

interface TimePickerProps {
  visible: boolean;
  setVisible: Dispatch<React.SetStateAction<boolean>>;
}

const hoursList = Array.from({ length: 13 }, (_, i) => i);
const minutesList = Array.from({ length: 61 }, (_, i) => i);

const CustomTimePickerComponent = ({ visible, setVisible }: TimePickerProps) => {
  const { addTimers } = useBread();
  const [hoursToWait, setHoursToWait] = useState<number>(0);
  const [minutesToWait, setMinutesToWait] = useState<number>(0);
  const [description, setDescription] = useState("");

  const now = useMemo(() => new Date(), []);
  const futureTime = useMemo(() => {
    const target = new Date(now);
    target.setHours(now.getHours() + hoursToWait);
    target.setMinutes(now.getMinutes() + minutesToWait);
    return target;
  }, [now, hoursToWait, minutesToWait]);

  const futureTimeDisplay = useMemo(
    () =>
      futureTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [futureTime]
  );

  const close = useCallback(() => setVisible(false), [setVisible]);
  const add = useCallback(() => {
    const id = uuid.v4();
    addTimers([{ id, hours: hoursToWait, minutes: minutesToWait, description }]);
    close();
  }, [addTimers, close, hoursToWait, minutesToWait, description]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={close}
        contentContainerStyle={{
          marginHorizontal: 20,
          backgroundColor: "white",
          borderRadius: 16,
          minHeight: 400,
          justifyContent: "center",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="w-full"
        >
          <ScrollView contentContainerStyle={{ padding: 24 }}>
            <View className="ml-auto">
              <IconButton
                icon="close"
                iconColor={MD3Colors.secondary0}
                size={20}
                onPress={close}
              />
            </View>

            <TextInput
              label="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              placeholder="Set Wait Time"
              mode="outlined"
              className="mb-4"
            />

            <View className="flex-row justify-center space-x-6">
              <View className="items-center">
                <Text className="mb-1">Hours</Text>
                <Picker
                  selectedValue={hoursToWait}
                  onValueChange={(val: number) => setHoursToWait(val)}
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
                  onValueChange={(val: number) => setMinutesToWait(val)}
                  style={{ width: 100 }}
                >
                  {minutesList.map((val) => (
                    <Picker.Item key={val} label={`${val}`} value={val} />
                  ))}
                </Picker>
              </View>
            </View>

            <Text className="text-base text-center pt-4">
              ⏰ Ready at: {futureTimeDisplay}
            </Text>

            <View className="pt-6">
              <Button mode="contained" onPress={add}>
                Create Timer
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </Portal>
  );
};

export const CustomTimePicker = memo(CustomTimePickerComponent);
