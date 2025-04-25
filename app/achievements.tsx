import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-paper";

type AchievementData = {
  sharedBread: boolean;
};

export default function AchievementScreen() {
  const [sharedImage, setSharedImage] = useState<string | null>(null);
  const [achievement, setAchievement] = useState<AchievementData>({
    sharedBread: false,
  });

  useEffect(() => {
    const load = async () => {
      try {
        // fetch both values in parallel
        const [uri, achJson] = await AsyncStorage.multiGet([
          "sharedImage",
          "achievement",
        ]);
        const imageUri = uri[1];
        const achRaw = achJson[1];

        if (imageUri) {
          setSharedImage(imageUri);
        }
        if (achRaw) {
          setAchievement(JSON.parse(achRaw));
        }
      } catch (e) {
        console.warn("Error loading achievements:", e);
      }
    };
    load();
  }, []);

  return (
    <View className="flex-1 bg-bread px-4 pt-8">
      <Text className="text-white text-2xl font-bold mb-6">Achievements</Text>

      {achievement.sharedBread ? (
        <Card className="mb-4">
          {sharedImage && (
            <Card.Cover source={{ uri: sharedImage }} className="h-64" />
          )}
          <Card.Content className="px-4 py-2">
            <Text className="text-lg font-bold mb-1">🍞 Bread Master</Text>
            <Text>You shared your finished bread photo!</Text>
          </Card.Content>
        </Card>
      ) : (
        <Text className="text-white">
          No achievements unlocked yet. Share a bread photo to earn one!
        </Text>
      )}
    </View>
  );
}
