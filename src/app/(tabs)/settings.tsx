import {View, Text, Switch, ScrollView} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";
import HapticsDemo from "@/components/HapticsDemo";



export default function SettingsScreen() {
    const {theme, toggleTheme, themeColors} = useTheme();
    const isDark = theme === "dark";

    return (
        <View style={{flex: 1, backgroundColor: themeColors.background}}>
            <View className="p-4 gap-4">

                {/* Theme Toggle Card */}
                <View
                    style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                    className="p-4 rounded-lg border"
                >
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-3 flex-1">
                            <FontAwesome
                                name={isDark ? "moon-o" : "sun-o"}
                                size={24}
                                color={themeColors.primary}
                            />
                            <View className="flex-1">
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg">
                                    Dark Mode
                                </Text>
                                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                    {isDark ? "Enabled" : "Disabled"}
                                </Text>
                            </View>
                        </View>
                        <Switch
                            value={isDark}
                            onValueChange={toggleTheme}
                            trackColor={{false: themeColors.backgroundMuted, true: themeColors.primary}}
                            thumbColor={isDark ? themeColors.primaryForeground : "#f4f3f4"}
                        />
                    </View>
                </View>

                {/* Theme Preview Card */}
                <View
                    style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                    className="p-4 rounded-lg border"
                >
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-3">
                        Current Theme
                    </Text>
                    <View className="flex-row gap-2 mb-3">
                        <View className="flex-1">
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Primary
                            </Text>
                            <View
                                style={{backgroundColor: themeColors.primary}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                        <View className="flex-1">
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Secondary
                            </Text>
                            <View
                                style={{backgroundColor: themeColors.secondary}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                    </View>
                    <View className="flex-row gap-2">
                        <View className="flex-1">
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Success
                            </Text>
                            <View
                                style={{backgroundColor: themeColors.success}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                        <View className="flex-1">
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Error
                            </Text>
                            <View
                                style={{backgroundColor: themeColors.error}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                    </View>
                </View>
                <HapticsDemo />

            </View>
        </View>
    );
}