import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@/utils/ThemeContext";
import {TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export default function TabsLayout() {
    const {colors} = useTheme();
    const router = useRouter();

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
            <Tabs.Screen name="coworking" options={{
                href: null,
                title: "Coworking",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => router.replace("/")}
                        style={{marginLeft: 16, padding: 4}}
                        accessibilityLabel="Volver al Home"
                    >
                        <FontAwesome name="arrow-left" size={22} color={colors.primary} />
                    </TouchableOpacity>
                ),
            }}/>
            <Tabs.Screen name="cafeteria" options={{
                href: null,
                title: "Cafetería",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => router.replace("/")}
                        style={{marginLeft: 16, padding: 4}}
                        accessibilityLabel="Volver al Home"
                    >
                        <FontAwesome name="arrow-left" size={22} color={colors.primary} />
                    </TouchableOpacity>
                ),
            }}/>
            <Tabs.Screen name="informacion" options={{
                href: null,
                title: "Información",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => router.replace("/")}
                        style={{marginLeft: 16, padding: 4}}
                        accessibilityLabel="Volver al Home"
                    >
                        <FontAwesome name="arrow-left" size={15} color={colors.primary} />
                    </TouchableOpacity>
                ),
            }}/>
        </Tabs>

    )
}