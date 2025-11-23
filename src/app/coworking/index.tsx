import {ActivityIndicator, FlatList, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import {CoworkingRoom} from "@/types/CoworkingRoom";
import {COWORKING_ROOMS_ENDPOINT} from "@/utils/constants";
import useApiClient from "@/hooks/useApiClient";
import {ErrorMessage} from "@/components/ErrorMessage";
import GenericCard from "@/components/GenericCard";
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useRouter} from 'expo-router';


export default function CoworkingScreen() {
    const {themeColors} = useTheme();
    const router = useRouter();

    const handleGesture = ({ nativeEvent }: any) => {
        if (nativeEvent.translationX > 60) {
            router.back();
        }
    };

    const {isPending, error, data} = useApiClient<CoworkingRoom[]>(
        COWORKING_ROOMS_ENDPOINT, ["coworking-rooms"]);

    return (
        <PanGestureHandler onGestureEvent={handleGesture}>
            <View style={{
                flex: 1,
                backgroundColor: themeColors.background,
                padding: 10,
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                {isPending && <ActivityIndicator size="large" className="align-middle"/>}

                {error && <ErrorMessage message={"Error al cargar las salas. " + error}/>}

                {data && !error && !isPending &&
                    <FlatList data={data}
                              renderItem={({item: space}) => (
                                  <GenericCard
                                      imagen={space.image}
                                      titulo={space.name}
                                      descripcion={`Capacidad: ${space.capacity} ${space.capacity === "1" ? 'persona' : 'personas'}`}
                                      subtitulo={space.precio.toString()}
                                      onClick={() => {/* Implement reservation logic here */
                                      }}
                                      labelBoton="Reservar"
                                      callbackBoton={() => { /* Implement reservation logic here */
                                      }}
                                      colorBoton="Primary"
                                  />
                              )}
                    />
                }
            </View>
        </PanGestureHandler>
    )
}
