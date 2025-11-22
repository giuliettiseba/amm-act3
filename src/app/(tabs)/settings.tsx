import {View, Text, Switch, TouchableOpacity} from "react-native";
import {useTheme} from "@/utils/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";

export default function SettingsScreen() {
    const {theme, toggleTheme, colors} = useTheme();
    const isDark = theme === "dark";

    return (
        <View style={{flex: 1, backgroundColor: colors.background}}>
            <View className="p-4 gap-4">

                {/* Theme Toggle Card */}
                <View
                    style={{backgroundColor: colors.card, borderColor: colors.border}}
                    className="p-4 rounded-lg border"
                >
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-3 flex-1">
                            <FontAwesome
                                name={isDark ? "moon-o" : "sun-o"}
                                size={24}
                                color={colors.primary}
                            />
                            <View className="flex-1">
                                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg">
                                    Dark Mode
                                </Text>
                                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                    {isDark ? "Enabled" : "Disabled"}
                                </Text>
                            </View>
                        </View>
                        <Switch
                            value={isDark}
                            onValueChange={toggleTheme}
                            trackColor={{false: colors.backgroundMuted, true: colors.primary}}
                            thumbColor={isDark ? colors.primaryForeground : "#f4f3f4"}
                        />
                    </View>
                </View>

                {/* Theme Preview Card */}
                <View
                    style={{backgroundColor: colors.card, borderColor: colors.border}}
                    className="p-4 rounded-lg border"
                >
                    <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-3">
                        Current Theme
                    </Text>
                    <View className="flex-row gap-2 mb-3">
                        <View className="flex-1">
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Primary
                            </Text>
                            <View
                                style={{backgroundColor: colors.primary}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                        <View className="flex-1">
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Secondary
                            </Text>
                            <View
                                style={{backgroundColor: colors.secondary}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                    </View>
                    <View className="flex-row gap-2">
                        <View className="flex-1">
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Success
                            </Text>
                            <View
                                style={{backgroundColor: colors.success}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                        <View className="flex-1">
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs mb-1">
                                Error
                            </Text>
                            <View
                                style={{backgroundColor: colors.error}}
                                className="h-12 rounded-lg"
                            />
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View
                    style={{backgroundColor: colors.card, borderColor: colors.border}}
                    className="p-4 rounded-lg border"
                >
                    <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-3">
                        Appearance
                    </Text>
                    <TouchableOpacity
                        onPress={toggleTheme}
                        style={{backgroundColor: colors.primary}}
                        className="py-3 px-4 rounded-lg"
                    >
                        <Text style={{color: colors.primaryForeground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-center">
                            Toggle Theme
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}