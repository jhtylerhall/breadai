import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import theme from '../constants/theme';
import { BreadProvider } from '../context/BreadContext';

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <BreadProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BreadProvider>
    </PaperProvider>
  );
}
