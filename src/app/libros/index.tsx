import {ActivityIndicator, FlatList, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import BookCard from "@/components/BookCard";
import * as Haptics from 'expo-haptics';
import {API_BASE_URL} from "@/utils/constants";
import {useAlertWithHaptics} from "@/hooks/useAlertWithHaptics";

const LibrosCatalogo = () => {

    const {themeColors} = useTheme();
    const {showAlert} = useAlertWithHaptics()


    const {isPending, error, data} = useQuery({
        queryKey: ['libro'],
        queryFn: () =>
            fetch(`${API_BASE_URL}/books`).then((res) =>
                res.json(),
            ),
    })


    if (error) {
        return showAlert('Error', 'No se pudieron cargar los libros. Por favor, inténtalo de nuevo más tarde.', 'error');
    }

    if (isPending) {
        return (
            <ActivityIndicator size="large"/>
        )
    }

    const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (Math.round(scrollY) % 10 === 0) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            console.log('Scrolled to:', Math.round(scrollY));
        }
    }

    return (
        <View style={{backgroundColor: themeColors.background}} className="justify-center flex-1 p-4">

            <FlatList
                data={data}
                onScroll={handleScroll}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => (
                    <BookCard {...item} />
                )}>
            </FlatList>
        </View>
    )
}

export default LibrosCatalogo;