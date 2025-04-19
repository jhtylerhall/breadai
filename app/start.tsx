import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function StartScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant="titleLarge">Sourdough Recipe</Text>
    </View>
  );
}