import {Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "@/contexts/ThemeContext";
import {useRouter} from "expo-router";


interface HomeItemProps {
    title: string;
    description: string;
    iconName: 'book' | 'users' | 'calendar' | 'coffee' | 'info-circle';
    route: '/libros' | '/coworking' | '/cafeteria' | '/informacion';
}

const HomeItem = (
    {title, description, iconName, route}: HomeItemProps) => {

    const {themeColors} = useTheme();
    const router = useRouter();

    return (
        <TouchableOpacity
            style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
            className="p-6 rounded-2xl border shadow-sm"
            onPress={() => {
                router.push(route);
            }}
        >

            <View className="flex-row items-center mb-3">
                <View style={{backgroundColor: themeColors.primary + '20'}}
                      className="w-12 h-12 rounded-full items-center justify-center mr-4">
                    <FontAwesome name={iconName} size={24} color={themeColors.primary}/>
                </View>
                <View className="flex-1">
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                          className="text-xl mb-1">
                        {title}
                    </Text>
                    <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                          className="text-sm">
                        {description}
                    </Text>
                </View>
                <FontAwesome name="chevron-right" size={16} color={themeColors.foregroundMuted}/>
            </View>
        </TouchableOpacity>
    )
}
export default HomeItem;