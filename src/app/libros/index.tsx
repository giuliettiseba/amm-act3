import {ActivityIndicator, Alert, FlatList, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import BookCard from "@/components/BookCard";
import * as Haptics from 'expo-haptics';

const LibrosCatalogo = () => {

    const {themeColors} = useTheme();


    const {isPending, error, data} = useQuery({
        queryKey: ['libro'],
        queryFn: () =>
            fetch('https://mock.apidog.com/m1/1069422-1057565-default/books').then((res) =>
                res.json(),
            ),
    })

    if (error) {
        Alert.alert('Error', 'No se pudieron cargar los libros. Por favor, inténtalo de nuevo más tarde.');
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

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