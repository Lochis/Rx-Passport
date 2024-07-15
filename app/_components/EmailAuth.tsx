import React, { useState } from 'react'
import { Alert, StyleSheet} from 'react-native'
import { View } from 'tamagui';
import { supabase } from '../utils/supabase';
import { Button, Input, Text, YStack } from 'tamagui';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const colorScheme = useColorScheme();
    const currentTheme = colorScheme == 'light' ? Colors.light : Colors.dark

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    return (
        <YStack padding="$3" rowGap="$3">
            <View>
                <Text themeInverse nativeID="emailLabel">Email</Text>
                <Input
                    aria-labelledby="emailLabel"
                    placeholder="email@address.com"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize={'none'}
                />
            </View>
            <View>
                <Text themeInverse nativeID="passwordLabel">Password</Text>
                <Input
                    aria-labelledby="passwordLabel"
                    placeholder="**********"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                />
            </View>
            <YStack paddingTop="$5" rowGap="$3">
                <Button disabled={loading} onPress={() => signInWithEmail()}>Sign in</Button>
                <Button disabled={loading} themeInverse onPress={() => signUpWithEmail()}>Sign up</Button>
            </YStack>
        </YStack>
    )
}