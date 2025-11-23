import {Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";

import {SvgUri} from "react-native-svg";
import {useEffect, useState} from "react";


interface GenericCardProps {
    imagen?: string;
    titulo?: string;
    subtitulo?: string;
    descripcion?: string;
    onClick?: () => void;
    labelBoton?: string;
    callbackBoton?: () => void;
    colorBoton?: "Primary" | "Secondary" | "Success" | "Error" | "Warning" | "Info";
    isDisabled?: boolean;
    isLoading?: boolean;
}

const BookCard = ({
                      imagen,
                      titulo,
                      subtitulo,
                      descripcion,
                      onClick,
                      labelBoton,
                      callbackBoton,
                      colorBoton,
                      isDisabled,
                      isLoading
                  }: GenericCardProps) => {

    const {themeColors} = useTheme();

    const [buttonColor, setButtonColor] = useState(
        {Label: themeColors.primaryForeground, Background: themeColors.primary}
    );

    useEffect(() => {

        switch (colorBoton) {
            case "Primary":
                setButtonColor({Label: themeColors.primaryForeground, Background: themeColors.primary});
                break;
            case "Secondary":
                setButtonColor({Label: themeColors.secondaryForeground, Background: themeColors.secondary});
                break;
            case "Success":
                setButtonColor({Label: themeColors.foreground, Background: themeColors.success});
                break;
            case "Error":
                setButtonColor({Label: themeColors.foreground, Background: themeColors.error});
                break;
            case "Warning":
                setButtonColor({Label: themeColors.foreground, Background: themeColors.warning});
                break;
            case "Info":
                setButtonColor({Label: themeColors.foreground, Background: themeColors.info});
                break;
            default:
                setButtonColor({Label: themeColors.primaryForeground, Background: themeColors.primary});
        }
    }, [colorBoton, themeColors]);


    return (


        <View className="flex-1 p-4 m-2 rounded-lg items-center justify-between"
        style={{
            backgroundColor: themeColors.backgroundSecondary
        }}
        >
            <Pressable
                onPress={onClick}
            >
                <View style={{}}>
                    {imagen?.endsWith("svg") ?
                        (
                            <SvgUri
                                uri={imagen}
                                height="200" width="200"
                                fill={themeColors.primary}

                            />
                        ) : (
                            <Image src={imagen}
                                   style={{
                                       height: 200,
                                       minWidth:"100%",
                                       resizeMode: 'stretch',
                                   }}
                            />
                        )}

                </View>
                <View >

                    <Text style={{color: themeColors.foreground}} className="font-bold text-center mt-2"
                          numberOfLines={1}>{titulo}</Text>
                    <Text style={{color: themeColors.foregroundMuted}} className="text-sm text-center "
                          numberOfLines={1}>{subtitulo}</Text>
                    <Text style={{color: themeColors.foregroundMuted}} className="text-xs text-center mb-4"
                          numberOfLines={2}>{descripcion}</Text>
                </View>

            </Pressable>
            {labelBoton &&
                <TouchableOpacity
                    style={{backgroundColor: buttonColor.Background}}
                    className="h-fit"
                    onPress={callbackBoton}
                    disabled={isDisabled || isLoading}
                >
                    <Text style={{color: buttonColor.Label, fontFamily: 'HankenGrotesk-SemiBold'}}
                          className="text-sm">
                        {labelBoton}
                    </Text>

                </TouchableOpacity>}
            {/*</Pressable>*/}
        </View>
    )
}

export default BookCard;