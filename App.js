import { StatusBar } from 'expo-status-bar';
import {Home, Settings, UserRound} from '@tamagui/lucide-icons';
import { View, Text, Button } from 'tamagui';
import appConfig from './tamagui.config';
import { StyleSheet, useWindowDimensions, Dimensions, Alert, Image, SafeAreaView, Pressable } from 'react-native';
import { TamaguiProvider, Theme } from '@tamagui/core';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  let orientation = "portrait";
  if (useWindowDimensions.height > useWindowDimensions.length) {
    orientation = "portrait";
  } else {
    orientation = "landscape";
  }

  return (
    <TamaguiProvider config={appConfig}>
      <Theme name="dark">
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingBottom: 10,
    }}>
      <StatusBar style="auto" />
        <Button icon={<Home/>} size='$5' title="Home" color="#f194ff" style={styles.navBtn} onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }></Button>
        <Button icon={<UserRound/>} size='$5' title="You" color="#f194ff" style={styles.navBtn} onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }></Button>
        <Button icon={<Settings/>} size='$5' title="Settings" color="#f194ff" style={styles.navBtn} onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
        ></Button>
        </View>
    </Theme>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtn: {
    borderRadius: 0,
    width: '33%',
    marginBottom: 20,
  }
});
