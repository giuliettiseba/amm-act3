import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {useTheme} from "@/utils/ThemeContext";
import {FontAwesome} from "@expo/vector-icons";

export default function CafeteriaScreen() {
    const {colors} = useTheme();

    const menuCategories = [
        {
            category: "Bebidas Calientes",
            items: [
                {name: "Café Americano", price: "$3.50", description: "Espresso con agua caliente"},
                {name: "Cappuccino", price: "$4.50", description: "Espresso con leche espumada"},
                {name: "Latte", price: "$4.50", description: "Espresso con leche"},
                {name: "Té Chai", price: "$4.00", description: "Té especiado con leche"},
            ]
        },
        {
            category: "Bebidas Frías",
            items: [
                {name: "Frappé de Chocolate", price: "$5.50", description: "Café helado con chocolate"},
                {name: "Smoothie de Frutas", price: "$5.00", description: "Frutas naturales"},
                {name: "Limonada", price: "$3.00", description: "Limonada natural"},
            ]
        },
        {
            category: "Snacks",
            items: [
                {name: "Croissant", price: "$3.00", description: "Recién horneado"},
                {name: "Muffin", price: "$3.50", description: "Diferentes sabores"},
                {name: "Sándwich", price: "$6.50", description: "Jamón y queso o vegetariano"},
            ]
        }
    ];

    return (
        <ScrollView style={{backgroundColor: colors.background}} className="flex-1">


            {/* Content */}
            <View className="p-6">
                {/* Info Card */}
                <View style={{backgroundColor: colors.card, borderColor: colors.border}} className="p-4 rounded-xl border mb-6">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-1">
                            <View className="flex-row items-center mb-2">
                                <FontAwesome name="clock-o" size={20} color={colors.warning} />
                                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="ml-2 text-base">
                                    Horario de Atención
                                </Text>
                            </View>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                Lunes a Viernes: 7:00 AM - 7:00 PM
                            </Text>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                Sábados: 8:00 AM - 3:00 PM
                            </Text>
                        </View>
                        <FontAwesome name="coffee" size={40} color={colors.warning + '40'} />
                    </View>
                </View>

                {/* Menu */}
                {menuCategories.map((category, categoryIndex) => (
                    <View key={categoryIndex} className="mb-6">
                        <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-2xl mb-4">
                            {category.category}
                        </Text>
                        <View className="gap-3">
                            {category.items.map((item, itemIndex) => (
                                <View
                                    key={itemIndex}
                                    style={{backgroundColor: colors.card, borderColor: colors.border}}
                                    className="p-4 rounded-xl border"
                                >
                                    <View className="flex-row justify-between items-start mb-2">
                                        <View className="flex-1">
                                            <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-lg mb-1">
                                                {item.name}
                                            </Text>
                                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                                {item.description}
                                            </Text>
                                        </View>
                                        <Text style={{color: colors.warning, fontFamily: 'HankenGrotesk-Bold'}} className="text-lg ml-2">
                                            {item.price}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={{backgroundColor: colors.warning}}
                                        className="py-2 px-4 rounded-lg self-end"
                                    >
                                        <Text style={{color: '#FFFFFF', fontFamily: 'HankenGrotesk-SemiBold'}} className="text-sm">
                                            Ordenar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Promo Banner */}
                <View style={{backgroundColor: colors.primary + '20', borderColor: colors.primary}} className="p-5 rounded-xl border mt-4">
                    <View className="flex-row items-center">
                        <FontAwesome name="star" size={24} color={colors.primary} />
                        <View className="flex-1 ml-3">
                            <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-lg mb-1">
                                Oferta Especial
                            </Text>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-sm">
                                Café + Croissant por solo $5.00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

