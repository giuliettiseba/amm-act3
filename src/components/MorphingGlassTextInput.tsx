import {TextInput} from "react-native";
import React from "react";
import {useTheme} from "@/contexts/ThemeContext";
import {KeyboardTypeOptions} from "react-native/Libraries/Components/TextInput/TextInput";

interface MorphingGlassTextInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder?: string;
    hint?: string;
    secureTextEntry?: boolean;
    keyboardType: KeyboardTypeOptions
}

export function MorphingGlassTextInput({
                                           value,
                                           setValue,
                                           placeholder = '',
                                           hint = '',
                                           secureTextEntry = false,
                                           keyboardType
                                       }: MorphingGlassTextInputProps) {
    const {themeColors} = useTheme();


    const borderColor = hint ? themeColors.error : themeColors.success;

    return (<TextInput


        className="w-full p-3 mb-4 border rounded-md"

        style={{
            backgroundColor: themeColors.input,
            color: themeColors.foreground,
            borderColor: borderColor,
        }}

        placeholder={placeholder}
        placeholderTextColor={themeColors.secondaryForeground}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        accessibilityHint={hint}
        value={value}
        onChangeText={setValue}
    />);
}