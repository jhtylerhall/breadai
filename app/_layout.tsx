import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import theme from '../constants/theme';
import { BreadProvider } from '../context/BreadContext';

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <BreadProvider>
        <View className="flex-1 bg-white">
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </BreadProvider>
    </PaperProvider>
  );
}
