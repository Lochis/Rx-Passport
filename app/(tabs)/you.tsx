import { StyleSheet, Pressable, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '@/app/_components/old/EditScreenInfo';
import { Text } from '@/app/_components/Themed';
import { Sun, Moon } from '@tamagui/lucide-icons';
import { Button, XStack, YStack, View, Theme, H1 } from 'tamagui';
import { supabase } from '../utils/supabase';

export default function You() {
  const [loading, setLoading] = useState(false)
  const [native, setNative] = React.useState(false);



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
                <Sun size={25} />
              )}
            </Pressable>
      <H1>You</H1>
      <View style={styles.separator} />
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
