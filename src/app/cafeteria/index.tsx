import {ActivityIndicator, FlatList, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {CafeteriaCategories} from "@/types/CafeteriaCategories";
import {useRouter} from "expo-router";
import GenericCard from "@/components/GenericCard";
import {ErrorMessage} from "@/components/ErrorMessage";
import useApiClient from "@/hooks/useApiClient";
import {CAFETERIA_CATEGORIES_ENDPOINT} from "@/utils/constants";

const CafeteriaScreen = () => {
    const {themeColors} = useTheme();
    const router = useRouter();
    const {isPending, error, data} = useApiClient<CafeteriaCategories[]>(
        CAFETERIA_CATEGORIES_ENDPOINT, ["cafeteria-categories"]);

    return (
        <View style={{
            flex: 1,
            backgroundColor: themeColors.background,
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            {isPending && <ActivityIndicator size="large" className="align-middle" />}

            {error && <ErrorMessage message={"Error al cargar las categorías. " + error}/>}

            {data && !error && !isPending && <FlatList
                data={data}
                numColumns={2}
                style={{backgroundColor: themeColors.background}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item: category}) => (
                    <GenericCard
                        imagen={category.imagen}
                        titulo={category.nombre}
                        descripcion={category.descripcion}
                        onClick={() => router.push(`/cafeteria/categoria/${category.nombre}`)}
                    />
                )}
            />}
        </View>
    )
}

export default CafeteriaScreen;

