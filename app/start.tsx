import { BreadCarousel } from '@/components/BreadCarousel/BreadCarousel';
import { View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <BreadCarousel>
      </BreadCarousel>
    </View>
  );
}