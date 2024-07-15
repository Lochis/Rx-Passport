import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Colors from '@/constants/Colors';

import EditScreenInfo from '@/app/_components/EditScreenInfo';
import {Text, View, H1, H3, H5} from 'tamagui';

export default function ModalScreen() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme == 'light' ? Colors.light : Colors.dark
  const local = useLocalSearchParams();

  return (
    <View flex={1}>
      <H1 color={currentTheme.text} textAlign='center'>{local.title}</H1>
      <View style={styles.separator} />
      <H3 color={currentTheme.text} textAlign='center'>{local.subTitle}</H3>
      <Text color={currentTheme.text} textAlign='center'>{local.inner}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
