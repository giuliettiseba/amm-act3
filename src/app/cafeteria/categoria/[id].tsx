import {ActivityIndicator, FlatList, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useTheme} from "@/contexts/ThemeContext";
import {CafeteriaProduct} from "@/types/CafeteriaProduct";
import GenericCard from "@/components/GenericCard";
import {CAFETERIA_PRODUCTS_ENDPOINT} from "@/utils/constants";
import useApiClient from "@/hooks/useApiClient";
import {ErrorMessage} from "@/components/ErrorMessage";

const ListaProductosCategoriaScreen = () => {
    const {id} = useLocalSearchParams();
    const {themeColors} = useTheme();
    const {isPending, error, data} = useApiClient<CafeteriaProduct[]>(
        CAFETERIA_PRODUCTS_ENDPOINT, ['category', id as string], {key: 'category', value: id})

    return (
        <View style={{
            flex: 1,
            backgroundColor: themeColors.background,
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            {isPending && <ActivityIndicator size="large" className="align-middle"/>}

            {error && <ErrorMessage message={"Error al cargar los productos. " + error}/>}

            <FlatList
                numColumns={1}
                style={{backgroundColor: themeColors.background}}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item: product}) => (
                    <GenericCard
                        titulo={product.name}
                        descripcion={product.description}
                        imagen={product.image}
                        subtitulo={product.price.toString()}
                        onClick={() => {
                        }}
                        labelBoton="Ordenar"
                        callbackBoton={() => {
                        }}
                        colorBoton="Primary"
                        isDisabled={false}
                        isLoading={isPending}
                    />
                )}
            />
        </View>
    )
}
export default ListaProductosCategoriaScreen;