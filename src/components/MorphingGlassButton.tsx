import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Animated, Easing, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from "@/contexts/ThemeContext";
import {animatedReaction, hapticReaction} from "@/utils/nexus_hapatics";


const BUTTON_HEIGHT = 55;

interface MorphingGlassButtonProps {
    readyToLogin: boolean;
    isLoading: boolean;
    onPress: () => void;
    errorMessage?: string | null;
    tw?: string; // Para estilos NativeWind
}

const MorphingGlassButton: React.FC<MorphingGlassButtonProps> = ({
                                                                     readyToLogin,
                                                                     isLoading,
                                                                     errorMessage,
                                                                     onPress: onPressProp,
                                                                 }) => {
    const {themeColors} = useTheme();
    const [containerWidth, setContainerWidth] = React.useState<number | null>(null);

    // Definimos el estado disabled
    const isDisabled = !readyToLogin || isLoading;

    // Definimos los 3 estados de color
    const COLORS = {
        // Estado 1: No listo (Warning/Naranja)
        warningStart: themeColors.warning,
        warningEnd: themeColors.error,

        // Estado 2: Listo (Success/Verde)
        successStart: themeColors.success,
        successEnd: themeColors.secondaryForeground,

        // Estado 3: Cargando (Loading/Azul Océano)
        loadingStart: themeColors.primary,
        loadingEnd: themeColors.ring,

        glassBorder: themeColors.foregroundMuted,
        text: themeColors.primaryForeground
    };


    // Animación 1: Warning -> Success (Color)
    // const readyAnim = useRef(new Animated.Value(0)).current;
    const readyAnim = useState(new Animated.Value(readyToLogin ? 1 : 0))[0];

    // Animación 2: Normal -> Loading (Ancho y Color)
    // const loadingAnim = useRef(new Animated.Value(0)).current;
    const loadingAnim = useState(new Animated.Value(isLoading ? 1 : 0))[0];


    // Animación 3: Disabled overlay opacity
    // const disabledAnim = useRef(new Animated.Value(isDisabled ? 1 : 0)).current;
    const disabledAnim = useState(new Animated.Value(isLoading ? 1 : 0))[0];

    // Animación 4: pequeño feedback de escala/"shake" cuando se hace click en disabled
    // const pressAnim = useRef(new Animated.Value(1)).current;
    const pressAnim = useState(new Animated.Value(1))[0];

    // const [shakeAnim, setShakeAnim] = React.useState(new Animated.Value(0));
    const shakeAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        // Animar cambio de color (Warning <-> Success)
        Animated.timing(readyAnim, {
            toValue: readyToLogin ? 1 : 0,
            duration: 500,
            useNativeDriver: false, // false para opacidad en algunos casos complejos, pero aquí es seguro
        }).start();
    }, [readyToLogin]);

    useEffect(() => {
        // Animar Morphing (Rectángulo <-> Círculo)
        Animated.timing(loadingAnim, {
            toValue: isLoading ? 1 : 0,
            duration: 400, // Rápido pero suave
            easing: Easing.bezier(0.4, 0.0, 0.2, 1), // Curva de aceleración material design
            useNativeDriver: false, // NECESARIO false para animar 'width'
        }).start();
    }, [isLoading]);

    useEffect(() => {
        // Animar overlay de disabled al cambiar isDisabled
        Animated.timing(disabledAnim, {
            toValue: isDisabled ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isDisabled]);

    // Color de overlay tipo 'smoked glass' dependiente del theme
    // Para theme oscuro usamos negro semitransparente, para claro usamos blanco semitransparente
    const disabledOverlayColor = themeColors.background && (themeColors.background === '#0F172A' || themeColors.background.toLowerCase().includes('0f172a'))
        ? 'rgba(0,0,0,0.35)'
        : 'rgba(255,255,255,0.35)';

    // Interpolaciones

    // 1. Ancho del botón: De Ancho Total -> Altura (Círculo)
    // Instead of animating width (which may hit native driver limitations), animate scaleX.
    // scaleX will shrink the button horizontally to simulate morphing into a circle.
    const fullWidth = containerWidth ?? 200;
    const morphScale = loadingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, (BUTTON_HEIGHT) / Math.max(1, fullWidth)]
    });

    // 2. Radio del borde: De 15 -> Altura/2 (Totalmente redondo)
    const buttonRadius = loadingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [15, BUTTON_HEIGHT / 2]
    });

    // 3. Opacidad del Texto (Desaparece al cargar)
    const textOpacity = loadingAnim.interpolate({
        inputRange: [0, 0.5], // Desaparece rápido
        outputRange: [1, 0]
    });

    // 4. Opacidad del Spinner (Aparece al final)
    const spinnerOpacity = loadingAnim.interpolate({
        inputRange: [0.5, 1],
        outputRange: [0, 1]
    });

    // 5. Opacidad de la capa de Carga (Azul)
    const loadingLayerOpacity = loadingAnim.interpolate({
        inputRange: [0, 0.2], // Aparece apenas empieza la animación
        outputRange: [0, 1]
    });

    // Opacidad de la capa Success (Verde)
    const successLayerOpacity = readyAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    function handleClick() {


        if (isDisabled) {
            // feedback de error cuando está deshabilitado
            hapticReaction('mal');
            animatedReaction('mal', shakeAnim);
            return;
        }

        // feedback positivo y ejecutar onPress cuando no está deshabilitado
        hapticReaction('bien');
        // animatedReaction('bien', shakeAnim);
        onPressProp();
    }

    return (
        <View
            style={styles.centerContainer}
            onLayout={e => {
                const width = e.nativeEvent.layout.width;
                if (width !== containerWidth) setContainerWidth(width);
            }}
        >
            <Animated.View
                style={{transform: [{translateX: shakeAnim}]}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleClick} // Evitar clics mientras carga
                >
                    <Animated.View style={[
                        styles.glassContainer,
                        {
                            width: fullWidth,
                            borderRadius: buttonRadius,
                            transform: [{scaleX: morphScale}, {scale: pressAnim}]
                        }
                    ]}>

                        {/* --- CAPAS DE COLOR (GRADIENTES) --- */}

                        {/* CAPA 1: Warning (Base, Naranja) */}
                        <LinearGradient
                            colors={[COLORS.warningStart, COLORS.warningEnd]}
                            start={{x: -1, y: 0}} end={{x: 1, y: 2}}
                            style={StyleSheet.absoluteFill}
                        />

                        {/* CAPA 2: Success (Verde) - Controlada por readyToLogin */}
                        <Animated.View style={[StyleSheet.absoluteFill, {opacity: successLayerOpacity}]}>
                            <LinearGradient
                                colors={[COLORS.successStart, COLORS.successEnd]}
                                start={{x: 0, y: 0}} end={{x: 1, y: 3}}
                                style={StyleSheet.absoluteFill}
                            />
                        </Animated.View>

                        {/* CAPA 3: Loading (Azul) - Controlada por isLoading (Cubre todo) */}
                        <Animated.View style={[StyleSheet.absoluteFill, {opacity: loadingLayerOpacity}]}>
                            <LinearGradient
                                colors={[COLORS.loadingStart, COLORS.loadingEnd]}
                                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                                style={StyleSheet.absoluteFill}
                            />
                        </Animated.View>

                        {/* Disabled overlay (smoked glass) - animada */}
                        <Animated.View
                            pointerEvents="none"
                            style={[
                                StyleSheet.absoluteFill,
                                {backgroundColor: disabledOverlayColor, opacity: disabledAnim}
                            ]}
                        />

                        {/* Brillo Especular (Glass Effect) */}
                        <LinearGradient
                            colors={['rgba(255,255,255,0.4)', 'transparent']}
                            start={{x: 0, y: 0}} end={{x: 0, y: 0.5}}
                            style={styles.specularShine}
                        />

                        {/* --- CONTENIDO --- */}

                        <View style={styles.contentContainer}>
                            {/* Texto del Botón */}
                            <Animated.Text style={[styles.text, {opacity: textOpacity}]}>
                                { errorMessage? errorMessage : "Iniciar Sesión" }
                            </Animated.Text>

                            {/* Spinner de Carga (Absoluto para estar centrado siempre) */}
                            <Animated.View style={[styles.spinnerContainer, {opacity: spinnerOpacity}]}>
                                <ActivityIndicator size="small" color="#FFFFFF"/>
                            </Animated.View>
                        </View>

                    </Animated.View>
                </TouchableOpacity>

            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    centerContainer: {
        alignItems: 'center', // Centra el botón en la pantalla cuando se encoge
        marginVertical: 20,
    },
    glassContainer: {
        height: BUTTON_HEIGHT,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        // Bordes Glassmorphism
        borderWidth: 1,
        borderColor: 'rgba(232,160,99,0.78)',
        borderTopColor: 'rgba(255,255,255,0.5)',
        borderBottomColor: 'rgba(255,255,255,0.1)',
        // Sombras
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    specularShine: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '40%',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        borderColor: 'rgb(71,255,0)',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        position: 'absolute', // Para que no empuje al spinner
    },
    spinnerContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MorphingGlassButton;
