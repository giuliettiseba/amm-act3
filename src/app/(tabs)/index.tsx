import {View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import HomeItem from "@/components/HomeItem";

const IndexScreen = () => {
    const {themeColors} = useTheme();
    return (
        <View style={{backgroundColor: themeColors.background}} className="flex-1 gap-4 p-6">
            <HomeItem
                title="Biblioteca"
                description="Explora nuestro catálogo de libros"
                iconName="book"
                route="/libros"
            />
            <HomeItem
                title="Coworking"
                description="Reserva tu espacio de trabajo"
                iconName="users"
                route="/coworking"
            />
            <HomeItem
                title="Cafetería"
                description="Menú y pedidos online"
                iconName="coffee"
                route="/cafeteria"
            />
            <HomeItem
                title="Información"
                description="Horarios y contacto"
                iconName="info-circle"
                route="/informacion"
            />
        </View>
    );
};

export default IndexScreen;