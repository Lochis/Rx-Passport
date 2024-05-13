import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, Dimensions, Text, View, Alert, Image, SafeAreaView, Button, Pressable } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  let orientation = "portrait";
  if (useWindowDimensions.height > useWindowDimensions.length) {
    orientation = "portrait";
  } else {
    orientation = "landscape";
  }

  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <StatusBar style="auto" />
      <SafeAreaView style={{
        backgroundColor: "gold",
        flex: 1,
      }}>

        <Text onPress={handlePress}>Open up App.js to start working on your app!</Text>

      </SafeAreaView>
      <View style={{
        backgroundColor: "green",
        flex: 1,
        paddingBottom: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
      }}>

        <Button title="Home" color="#f194ff" onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        } />
        <Button title="You" color="#f194ff" onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        } />
        <Button title="Settings" color="#f194ff" onPress={() =>
          Alert.alert("Hello", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
        />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
