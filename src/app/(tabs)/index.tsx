import {Text, TouchableOpacity, View, ScrollView} from "react-native";
import { useRouter} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";

export default function IndexScreen() {
    const {colors} = useTheme();
    const router = useRouter();

    return (
        <ScrollView style={{backgroundColor: colors.background}} className="flex-1 ">

            {/* Main Content */}
            <View className="p-6  ">
                {/* Cards Grid */}
                <View className="gap-4">
                    {/* Catálogo de libros */}
                        <TouchableOpacity
                            style={{backgroundColor: colors.card, borderColor: colors.border}}
                            className="p-6 rounded-2xl border shadow-sm"
                            onPress={() => router.push('/libros')}

                        >
                            <View className="flex-row items-center mb-3">
                                <View style={{backgroundColor: colors.primary + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                    <FontAwesome name="book" size={24} color={colors.primary} />
                                </View>
                                <View className="flex-1">
                                    <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-1">
                                        Biblioteca
                                    </Text>
                                    <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                        Explora nuestro catálogo de libros
                                    </Text>
                                </View>
                                <FontAwesome name="chevron-right" size={16} color={colors.foregroundMuted} />
                            </View>
                        </TouchableOpacity>

                    {/* Coworking */}
                    <TouchableOpacity
                        style={{backgroundColor: colors.card, borderColor: colors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/coworking')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: colors.success + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="users" size={24} color={colors.success} />
                            </View>
                            <View className="flex-1">
                                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-1">
                                    Coworking
                                </Text>
                                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                    Reserva tu espacio de trabajo
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={colors.foregroundMuted} />
                        </View>
                    </TouchableOpacity>

                    {/* Cafetería */}
                    <TouchableOpacity
                        style={{backgroundColor: colors.card, borderColor: colors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/cafeteria')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: colors.warning + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="coffee" size={24} color={colors.warning} />
                            </View>
                            <View className="flex-1">
                                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-1">
                                    Cafetería
                                </Text>
                                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                    Menú y pedidos online
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={colors.foregroundMuted} />
                        </View>
                    </TouchableOpacity>

                    {/* Info adicional (opcional) */}
                    <TouchableOpacity
                        style={{backgroundColor: colors.card, borderColor: colors.border}}
                        className="p-6 rounded-2xl border shadow-sm"
                        onPress={() => router.push('/informacion')}
                    >
                        <View className="flex-row items-center mb-3">
                            <View style={{backgroundColor: colors.info + '20'}} className="w-12 h-12 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="info-circle" size={24} color={colors.info} />
                            </View>
                            <View className="flex-1">
                                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-xl mb-1">
                                    Información
                                </Text>
                                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                    Horarios y contacto
                                </Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color={colors.foregroundMuted} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    );
}