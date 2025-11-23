import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from "@/contexts/ThemeContext";


export const ErrorMessage = ({message}: { message: string }) => {

    const {themeColors} = useTheme();

    return (
        <View
            className="p-10 mh-10 mt-10 br-5"
            style={{
                backgroundColor: themeColors.error,
            }}>
            <Text
                accessibilityHint="sadas"
                style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: 'HankenGrotesk-regular',
                    color: themeColors.background,


                }}>{message}</Text>

        </View>
    );
}
