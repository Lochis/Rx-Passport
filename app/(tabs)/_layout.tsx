import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Stack} from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/app/_components/useColorScheme';
import { useClientOnlyValue } from '@/app/_components/old/useClientOnlyValue';
import appConfig from '@/tamagui.config';
import {Pill, Sun, UserRound} from '@tamagui/lucide-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
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
           
            {/* used to be where pill icon was */}

            </>
          ),
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          title: 'You',
          tabBarIcon: ({ color }) => <UserRound size={25} color={color}/>,
        }}
      />
    </Tabs>
  );
}
