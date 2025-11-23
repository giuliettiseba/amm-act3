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

        <View className="flex-1 p-2">
            <Pressable
                onPress={onClick}
            >
                <View style={{backgroundColor: themeColors.card}} className="p-2 rounded-lg">
                    {
                        imagen?.endsWith("svg") ?
                            (
                                <SvgUri
                                    uri={imagen}
                                    width="100%"
                                    height={200}
                                    fill={themeColors.primary}
                                    className="rounded"
                                    style={{backgroundColor: themeColors.border}}
                                />
                            ) : (
                                <Image src={imagen} className="w-full h-48 mb-2 rounded-lg"/>
                            )}


                    <Text style={{color: themeColors.foreground}} className="font-bold text-base"
                          numberOfLines={1}>{titulo}</Text>
                    <Text style={{color: themeColors.foregroundMuted}} className="text-sm"
                          numberOfLines={1}>{subtitulo}</Text>
                    <Text style={{color: themeColors.foregroundMuted}} className="text-xs"
                          numberOfLines={2}>{descripcion}</Text>


                    {labelBoton &&
                        <TouchableOpacity
                            style={{backgroundColor: buttonColor.Background}}
                            className="py-2 px-4 rounded-lg self-end"
                            onPress={callbackBoton}
                            disabled={isDisabled || isLoading}
                        >
                            <Text style={{color: buttonColor.Label, fontFamily: 'HankenGrotesk-SemiBold'}}
                                  className="text-sm">
                                {labelBoton}
                            </Text>

                        </TouchableOpacity>}
                </View>
            </Pressable>
        </View>
    )
}

export default BookCard;