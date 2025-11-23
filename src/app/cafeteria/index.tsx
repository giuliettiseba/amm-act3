import {ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import {CafeteriaCategories} from "@/types/CafeteriaCategories";
import {SvgUri} from 'react-native-svg';
import {useRouter} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import * as Haptics from 'expo-haptics';

export default function CafeteriaScreen() {
    const {themeColors} = useTheme();
    const router = useRouter();
    const [showBanner, setShowBanner] = useState(true);
    const [showWorkingHours, setShowWorkingHours] = useState(true);

    const {isPending, error, data} = useQuery({
        queryKey: ['categorias', 'cafeteria'],
        queryFn: () =>
            fetch('https://mock.apidog.com/m1/1069422-1057565-default/products/categories').then((res) =>
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


    // Mostrar categorías en una grilla de 2 columnas

    const menuCategories = data as CafeteriaCategories[]

    return (
        <View style={{flex: 1, backgroundColor: themeColors.background}} className="p-4 pt-6">
            {/* Info Card */}
            {showWorkingHours && (
                <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
                      className="p-4 rounded-xl border mb-6">
                    <TouchableOpacity
                        onPress={() => setShowWorkingHours(false)}
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 1,
                            padding: 4,
                        }}
                        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                    >
                        <FontAwesome name="close" size={16} color={themeColors.primary}/>
                    </TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-1">
                            <View className="flex-row items-center mb-2">
                                <FontAwesome name="clock-o" size={20} color={themeColors.warning}/>
                                <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                                      className="ml-2 text-base">
                                    Horario de Atención
                                </Text>
                            </View>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-sm">
                                Lunes a Viernes: 7:00 AM - 7:00 PM
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-sm">
                                Sábados: 8:00 AM - 3:00 PM
                            </Text>
                        </View>
                        <FontAwesome name="coffee" size={40} color={themeColors.warning + '40'}/>
                    </View>
                </View>)}

            <FlatList style={{backgroundColor: themeColors.background}} className="flex-1"
                      data={menuCategories}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item: category}) => (


                          <TouchableOpacity
                              onPress={() => router.push(`/cafeteria/categoria/${category.nombre}`)}>
                              <View className="p-6">
                                  <SvgUri
                                      uri={category.imagen}
                                      width="100%"
                                      height={200}
                                      fill={themeColors.primary}
                                      className="rounded"
                                      style={{backgroundColor: themeColors.border}}
                                  />

                                  <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                        className="text-2xl mb-4">
                                      {category.nombre}
                                  </Text>
                                  <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                        className="text-sm mb-4">
                                      {category.descripcion}
                                  </Text>
                              </View>
                          </TouchableOpacity>

                      )}
            />

            {/* Promo Banner */}
            {showBanner && (
                <View
                    style={{backgroundColor: themeColors.primary + '20', borderColor: themeColors.primary, position: 'relative'}}
                    className="p-5 rounded-xl border mt-4">
                    <TouchableOpacity
                        onPress={() => setShowBanner(false)}
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 1,
                            padding: 4,
                        }}
                        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                    >
                        <FontAwesome name="close" size={16} color={themeColors.primary}/>
                    </TouchableOpacity>
                    <View className="flex-row items-center">
                        <FontAwesome name="star" size={24} color={themeColors.primary}/>
                        <View className="flex-1 ml-3">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                  className="text-lg mb-1">
                                Oferta Especial
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-sm">
                                Café + Croissant por solo $5.00
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

