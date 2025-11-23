import {View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";
import {useQuery} from "@tanstack/react-query";
import {CoworkingRoom} from "@/types/CoworkingRoom";
import * as Haptics from "expo-haptics";

export default function CoworkingScreen() {
    const {themeColors} = useTheme();


    const {isPending, error, data} = useQuery({
        queryKey: ['rooms', 'coworking'],
        queryFn: () =>
            fetch('https://mock.apidog.com/m1/1069422-1057565-default/rooms').then((res) =>
                res.json(),
            ),
    })

    if (error) {
        Alert.alert('Error', 'No se pudieron cargar las categorías. Por favor, inténtalo de nuevo más tarde.');
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

    }

    if (isPending) {
        return (
            <ActivityIndicator size="large"/>
        )
    }

    const rooms = data as CoworkingRoom[]

    return (
        <ScrollView style={{backgroundColor: themeColors.background}} className="flex-1">


            {/* Content */}
            <View className="p-6 R">
                {/* Info Card */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-4 rounded-xl border mb-6">
                    <View className="flex-row items-center mb-2">
                        <FontAwesome name="clock-o" size={20} color={themeColors.primary} />
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="ml-2 text-base">
                            Horario
                        </Text>
                    </View>
                    <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                        Lunes a Viernes: 8:00 AM - 8:00 PM
                    </Text>
                    <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                        Sábados: 9:00 AM - 2:00 PM
                    </Text>
                </View>

                {/* Spaces */}
                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-2xl mb-4">
                    Espacios Disponibles
                </Text>

                <View className="gap-4">
                    {rooms.map((space) => (
                        <View
                            key={space.id}
                            style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                            className="p-5 rounded-xl border"
                        >
                            <View className="flex-row items-center justify-between mb-3">
                                <View className="flex-row items-center flex-1">
                                    <View style={{backgroundColor: themeColors.primary + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-3">
                                       <Image src={space.image} className="w-10 h-10 rounded-full" />
                                    </View>
                                    <View className="flex-1">
                                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-lg">
                                            {space.name}
                                        </Text>
                                        <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                            Capacidad: {space.capacity} {space.capacity === "1" ? 'persona' : 'personas'}
                                        </Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text style={{color: themeColors.primary, fontFamily: 'HankenGrotesk-Bold'}} className="text-lg">
                                        {space.precio}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{backgroundColor: themeColors.primary}}
                                className="py-3 rounded-lg"
                            >
                                <Text style={{color: themeColors.primaryForeground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-center">
                                    Reservar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Amenities */}
                <View className="mt-6">
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-4">
                        Servicios Incluidos
                    </Text>
                    <View className="gap-3">
                        {[
                            {icon: "wifi", text: "WiFi de alta velocidad"},
                            {icon: "coffee", text: "Café y té gratis"},
                            {icon: "print", text: "Impresora y escáner"},
                            {icon: "plug", text: "Enchufes en cada mesa"},
                        ].map((amenity, index) => (
                            <View key={index} className="flex-row items-center">
                                <View style={{backgroundColor: themeColors.success + '20'}} className="w-10 h-10 rounded-full items-center justify-center mr-3">
                                    <FontAwesome name={amenity.icon as any} size={16} color={themeColors.success} />
                                </View>
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="text-base">
                                    {amenity.text}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

