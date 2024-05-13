import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Stack} from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import appConfig from '@/tamagui.config';
import {Pill, Sun, UserRound} from '@tamagui/lucide-icons';
import { View } from 'tamagui';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Passport',
          tabBarIcon: ({ color }) => <Pill size={25} color={color}/>,
          headerRight: () => (
            <>
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Pill size={25} color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'You',
          tabBarIcon: ({ color }) => <UserRound size={25} color={color}/>,
        }}
      />
    </Tabs>
  );
}
