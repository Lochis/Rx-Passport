import { StyleSheet, Pressable, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '@/app/_components/EditScreenInfo';
import { Text, View } from '@/app/_components/Themed';
import { Sun, Moon } from '@tamagui/lucide-icons';
import { Button, XStack, YStack } from 'tamagui';
import { supabase } from '../utils/supabase';

export default function You() {
  const [loading, setLoading] = useState(false)
  let colorScheme = useColorScheme();
  const [native, setNative] = React.useState(false);

  const onColorChange = () => {
    if (colorScheme == "dark"){
      colorScheme = "light";
    } else if (colorScheme == "light"){
      colorScheme = "dark";
    }
  }

  async function signOut() {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) console.error("Sign out error: " + error);
    setLoading(false)
}

  return (
    <View style={styles.container}>
       <Pressable>
              {({pressed}) => (
                <Sun size={25} onPress={onColorChange} color={colorScheme == "light" ? 'rgba(255,255,255,0.1)' : '#eee'} />
              )}
            </Pressable>
      <Text style={styles.title}>You</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
      <EditScreenInfo path="app/(tabs)/settings.tsx" />
      <Button onPress={() => signOut()}>Sign Out</Button>
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
