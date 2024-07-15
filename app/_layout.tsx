import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useState } from 'react';
import { Theme, View } from '@tamagui/core';
import { TamaguiProvider } from '@tamagui/core';
import appConfig from '@/tamagui.config';
import { supabase } from './utils/supabase';
import Auth from './EmailAuth';
import { Session } from '@supabase/supabase-js';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [session, setSession] = useState<Session | null>(null)
  const { title } = useLocalSearchParams();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <TamaguiProvider config={appConfig}>
      <ThemeProvider value={DefaultTheme/*DefaultTheme*/}>
        
          {session && session.user ? (
            <Theme name="pink">
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
              <Stack.Screen name="AddDrugModal" options={{ presentation: 'modal', title: 'Add Drug' }} />
            </Stack>
            </Theme>
          ) : (
            <Theme name="pink">
              <Auth />
            </Theme>
          )}
      </ThemeProvider>
    </TamaguiProvider>
  );
}
