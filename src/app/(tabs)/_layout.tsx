import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@/utils/ThemeContext";

export default function TabsLayout() {
    const {colors} = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: colors.border,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.foregroundMuted,
                headerStyle: {
                    backgroundColor: colors.card,
                },
                headerTintColor: colors.foreground,
                headerTitleStyle: {
                    color: colors.foreground,
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