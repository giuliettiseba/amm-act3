import {ScrollView, Switch, Text, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";
import HapticsDemo from "@/components/HapticsDemo";
import {DeviceInfoDemo} from "@/components/DeviceInfoDemo";


export default function SettingsScreen() {
    const {theme, toggleTheme, themeColors} = useTheme();
    const isDark = theme === "dark";

    return (
        <ScrollView style={{flex: 1, backgroundColor: themeColors.background}}>
                {/* Theme Toggle Card */}
                <View
                    style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                    className="p-4 rounded-lg border my-4"
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

                <DeviceInfoDemo />
                <HapticsDemo />
        </ScrollView>
    );
}