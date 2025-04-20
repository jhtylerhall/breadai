import { BreadCarousel } from "@/components/BreadCarousel/BreadCarousel";
import { View } from "react-native";

export default function RecipesScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-bread pt-10">
      <View>
        <BreadCarousel />
      </View>
    </View>
  );
}
