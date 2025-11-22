import {ActivityIndicator, Alert, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import {CafeteriaProduct} from "@/types/CafeteriaProduct";

const ListaProductosCategoriaScreen = () => {
    const {id} = useLocalSearchParams();
    const {colors} = useTheme();

    const {isPending, error, data} = useQuery({
        queryKey: ['category', id],
        queryFn: () =>
            fetch(`https://mock.apidog.com/m1/1069422-1057565-default/products?category=${id}`).then((res) =>
                res.json(),
            ),
    })

    if (error) {
        Alert.alert("Error", "No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde.");
    }

    if (isPending) {
        return (
            <ActivityIndicator size="large"/>
        )
    }

    const productos = data as CafeteriaProduct[];

    return (
        <FlatList
            numColumns={1}
            style={{backgroundColor: colors.background}}
            data={productos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item: product}) => (
                <View
                    key={product.id}
                    style={{backgroundColor: colors.card, borderColor: colors.border}}
                    className="p-4 rounded-xl border  my-2 flex-1"
                >

                    <Image src={product.image} className="w-full h-40 mb-2 rounded-lg"/>
                    <View className="flex-row justify-between items-start mb-2">
                        <View className="flex-1">
                            <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}}
                                  className="text-lg mb-1">
                                {product.name}
                            </Text>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-sm">
                                {product.description}
                            </Text>
                        </View>
                        <Text style={{color: colors.warning, fontFamily: 'HankenGrotesk-Bold'}}
                              className="text-lg ml-2">
                            {product.price}
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
            )}
        />


    )
}
export default ListaProductosCategoriaScreen;