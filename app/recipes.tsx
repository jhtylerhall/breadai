import { BreadCarousel } from "@/components/structure/BreadCarousel/BreadCarousel";
import { View } from "react-native";

export default function RecipesScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-bread py-1">
      <View>
        <BreadCarousel />
      </View>
    </View>
  );
}
