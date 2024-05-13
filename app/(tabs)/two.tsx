import { StyleSheet, Pressable, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Sun, Moon } from '@tamagui/lucide-icons';

export default function TabTwoScreen() {
  let colorScheme = useColorScheme();

  const onColorChange = () => {
    if (colorScheme == "dark"){
      colorScheme = "light";
    } else if (colorScheme == "light"){
      colorScheme = "dark";
    }
  }

  return (
    <View style={styles.container}>
       <Pressable>
              {({pressed}) => (
                <Sun size={25} onPress={onColorChange} color={colorScheme == "light" ? 'rgba(255,255,255,0.1)' : '#eee'} />
              )}
            </Pressable>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      
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
