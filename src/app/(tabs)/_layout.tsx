import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@/contexts/ThemeContext";

export default function TabsLayout() {
    const {themeColors} = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: themeColors.card,
                    borderTopColor: themeColors.border,
                },
                tabBarActiveTintColor: themeColors.primary,
                tabBarInactiveTintColor: themeColors.foregroundMuted,
                headerStyle: {
                    backgroundColor: themeColors.card,
                },
                headerTintColor: themeColors.foreground,
                headerTitleStyle: {
                    color: themeColors.foreground,
                    fontFamily: 'HankenGrotesk-SemiBold',
                },
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
            }}/>
            <Tabs.Screen name="settings" options={{
                title: "Settings",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="gear" color={color}/>
            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>
            }}/>

        </Tabs>

    )
}