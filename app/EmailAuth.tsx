import React, { useState } from 'react'
import { Alert, StyleSheet, useWindowDimensions } from 'react-native'
import { H1, Image, View } from 'tamagui';
import { supabase } from './utils/supabase';
import { Button, Input, Text, YStack } from 'tamagui';

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

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

    const ResponsiveImage = ({ source = require('@/assets/images/icon.png'), aspectRatio = 301 / 427 }) => {
        const { width, height } = useWindowDimensions();

        const isTablet = width <= 1024
        let scale = 0.05;

        if (isTablet) {
            scale = 0.2;
        }


        // Calculate the image dimensions
        
        const imageWidth = width * scale;
        const imageHeight = imageWidth / aspectRatio;

        return (
            <Image
                source={source}
                style={{
                    alignSelf: 'center',
                    width: imageWidth,
                    height: imageHeight,
                }}
            />
        );
    };

    return (
        <>

            <YStack padding="$3" rowGap="$3" flex={1} justifyContent='center' paddingHorizontal={'$2'}>
                {/* Not a fan of images in react native. Need to figure out how to resize */}
                {/*<Image alignSelf='center' objectFit='scale-down' src={require('@/assets/images/icon.png')} />*/}
                <ResponsiveImage />
                <H1 textAlign='center'>RX Passport</H1>
                <YStack paddingTop="$3" rowGap="$3">
                    <Text nativeID="emailLabel">Email</Text>
                    <Input
                        aria-labelledby="emailLabel"
                        placeholder="email@address.com"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        autoCapitalize={'none'}
                    />
                    <Text nativeID="passwordLabel">Password</Text>
                    <Input
                        aria-labelledby="passwordLabel"
                        placeholder="**********"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                    />
                </YStack>


                <YStack paddingTop="$5" rowGap="$3">
                    <Button disabled={loading} themeInverse onPress={() => signInWithEmail()}>Sign in</Button>
                    <Button disabled={loading} onPress={() => signUpWithEmail()}>Sign up</Button>
                </YStack>
            </YStack>
        </>
    )
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