import {Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {useTheme} from "@/contexts/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";

export default function IndexScreen() {
    const {themeColors} = useTheme();
    const router = useRouter();

    return (
        <View style={{backgroundColor: themeColors.background}} className="flex-1 ">

            {/* Main Content */}
            <View className="p-6  ">
                {/* Cards Grid */}
                <View className="gap-4">

                    {/* Catálogo de libros */}
                    <TouchableOpacity
                        style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/libros')}

                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: themeColors.primary + '20'}}
                                  className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="book" size={24} color={themeColors.primary}/>
                            </View>
                            <View className="flex-1">
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                      className="text-xl mb-1">
                                    Biblioteca
                                </Text>
                                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                      className="text-sm">
                                    Explora nuestro catálogo de libros
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={themeColors.foregroundMuted}/>
                        </View>
                    </TouchableOpacity>

                    {/* Coworking */}
                    <TouchableOpacity
                        style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/coworking')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: themeColors.success + '20'}}
                                  className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="users" size={24} color={themeColors.success}/>
                            </View>
                            <View className="flex-1">
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                      className="text-xl mb-1">
                                    Coworking
                                </Text>
                                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                      className="text-sm">
                                    Reserva tu espacio de trabajo
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={themeColors.foregroundMuted}/>
                        </View>
                    </TouchableOpacity>

                    {/* Cafetería */}
                    <TouchableOpacity
                        style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/cafeteria')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: themeColors.warning + '20'}}
                                  className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="coffee" size={24} color={themeColors.warning}/>
                            </View>
                            <View className="flex-1">
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                      className="text-xl mb-1">
                                    Cafetería
                                </Text>
                                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                      className="text-sm">
                                    Menú y pedidos online
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={themeColors.foregroundMuted}/>
                        </View>
                    </TouchableOpacity>

                    {/* Info adicional */}
                    <TouchableOpacity
                        style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/informacion')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: themeColors.info + '20'}}
                                  className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="info-circle" size={24} color={themeColors.info}/>
                            </View>
                            <View className="flex-1">
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                      className="text-xl mb-1">
                                    Información
                                </Text>
                                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                      className="text-sm">
                                    Horarios y contacto
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={themeColors.foregroundMuted}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}