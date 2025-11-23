import {View, Text, ScrollView, TouchableOpacity, Linking} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";

export default function InformacionScreen() {
    const {themeColors} = useTheme();

    const handlePress = (type: string, value: string) => {
        switch(type) {
            case 'phone':
                Linking.openURL(`tel:${value}`);
                break;
            case 'email':
                Linking.openURL(`mailto:${value}`);
                break;
            case 'location':
                Linking.openURL(`https://maps.google.com/?q=${value}`);
                break;
            case 'web':
                Linking.openURL(value);
                break;
        }
    };

    return (
        <ScrollView style={{backgroundColor: themeColors.background}} className="flex-1">


            {/* Content */}
            <View className="p-6 ">
                {/* Horarios */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-5 rounded-xl border mb-4">
                    <View className="flex-row items-center mb-4">
                        <View style={{backgroundColor: themeColors.info + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-3">
                            <FontAwesome name="clock-o" size={24} color={themeColors.info} />
                        </View>
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl">
                            Horarios
                        </Text>
                    </View>
                    <View className="gap-2">
                        <View className="flex-row justify-between">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Medium'}}>
                                Lunes - Viernes
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}>
                                8:00 AM - 8:00 PM
                            </Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Medium'}}>
                                Sábado
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}>
                                9:00 AM - 2:00 PM
                            </Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Medium'}}>
                                Domingo
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}>
                                Cerrado
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Contacto */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-5 rounded-xl border mb-4">
                    <View className="flex-row items-center mb-4">
                        <View style={{backgroundColor: themeColors.success + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-3">
                            <FontAwesome name="phone" size={24} color={themeColors.success} />
                        </View>
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl">
                            Contacto
                        </Text>
                    </View>
                    <View className="gap-3">
                        <TouchableOpacity
                            onPress={() => handlePress('phone', '+1234567890')}
                            className="flex-row items-center"
                        >
                            <FontAwesome name="phone" size={18} color={themeColors.primary} />
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="ml-3 text-base">
                                +1 (234) 567-890
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePress('email', 'info@amm.com')}
                            className="flex-row items-center"
                        >
                            <FontAwesome name="envelope" size={18} color={themeColors.primary} />
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="ml-3 text-base">
                                info@amm.com
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePress('web', 'https://amm.com')}
                            className="flex-row items-center"
                        >
                            <FontAwesome name="globe" size={18} color={themeColors.primary} />
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="ml-3 text-base">
                                www.amm.com
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Ubicación */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-5 rounded-xl border mb-4">
                    <View className="flex-row items-center mb-4">
                        <View style={{backgroundColor: themeColors.warning + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-3">
                            <FontAwesome name="map-marker" size={24} color={themeColors.warning} />
                        </View>
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl">
                            Ubicación
                        </Text>
                    </View>
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="text-base mb-3">
                        Calle Principal #123{'\n'}
                        Colonia Centro{'\n'}
                        Ciudad, CP 12345
                    </Text>
                    <TouchableOpacity
                        onPress={() => handlePress('location', 'Calle Principal 123')}
                        style={{backgroundColor: themeColors.warning}}
                        className="py-3 rounded-lg"
                    >
                        <Text style={{color: '#FFFFFF', fontFamily: 'HankenGrotesk-SemiBold'}} className="text-center">
                            Ver en Mapa
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Servicios */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-5 rounded-xl border">
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-4">
                        Nuestros Servicios
                    </Text>
                    <View className="gap-3">
                        {[
                            {icon: "book", text: "Biblioteca Digital y Física", color: themeColors.primary},
                            {icon: "users", text: "Espacios de Coworking", color: themeColors.success},
                            {icon: "coffee", text: "Cafetería", color: themeColors.warning},
                            {icon: "wifi", text: "WiFi Gratuito", color: themeColors.info},
                            {icon: "print", text: "Impresión y Escaneo", color: themeColors.primary},
                            {icon: "graduation-cap", text: "Talleres y Eventos", color: themeColors.success},
                        ].map((service, index) => (
                            <View key={index} className="flex-row items-center">
                                <View style={{backgroundColor: service.color + '20'}} className="w-10 h-10 rounded-full items-center justify-center mr-3">
                                    <FontAwesome name={service.icon as any} size={16} color={service.color} />
                                </View>
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Regular'}} className="text-base flex-1">
                                    {service.text}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Redes Sociales */}
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}} className="p-5 rounded-xl border mt-4">
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-4 text-center">
                        Síguenos en Redes Sociales
                    </Text>
                    <View className="flex-row justify-center gap-6">
                        <TouchableOpacity className="items-center">
                            <View style={{backgroundColor: '#1877F2' + '20'}} className="w-14 h-14 rounded-full items-center justify-center mb-2">
                                <FontAwesome name="facebook" size={28} color="#1877F2" />
                            </View>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs">
                                Facebook
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center">
                            <View style={{backgroundColor: '#E4405F' + '20'}} className="w-14 h-14 rounded-full items-center justify-center mb-2">
                                <FontAwesome name="instagram" size={28} color="#E4405F" />
                            </View>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs">
                                Instagram
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center">
                            <View style={{backgroundColor: '#1DA1F2' + '20'}} className="w-14 h-14 rounded-full items-center justify-center mb-2">
                                <FontAwesome name="twitter" size={28} color="#1DA1F2" />
                            </View>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-xs">
                                Twitter
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

