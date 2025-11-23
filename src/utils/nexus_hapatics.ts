// Nexus Haptics - Estrategias de Retroalimentación Háptica
// Objetivo: Crear patrones de vibración háptica que refuercen las emociones y respuestas del usuario en una aplicación móvil.

//// Mal (Error/Alerta):
// Psicología: Disonancia, urgencia, interrupción. Necesitamos frecuencias rápidas y cortas (staccato) que simulen un "golpe" o una advertencia.
//     Patrón: Ráfagas rápidas y agresivas.
//
// Normal (Neutro/Feedback):
// Psicología: Confirmación sutil. Baja carga cognitiva. Solo dice "te escuché".
//     Patrón: Un solo pulso muy breve.
//
// Bien (Acierto/Refuerzo Positivo):
// Psicología: Resolución, satisfacción. Un patrón de dos tiempos (como un asentimiento de cabeza).
// Patrón: "Ta-da". Corto-Largo o Corto-Corto con separación media.
//
// Excelente (Logro/Euforia):
// Psicología: Celebración, energía alta. Mayor duración y complejidad.
//     Patrón: Crescendo o repetición rítmica rápida.
//
// Feliz (Emoción/Juego):
// Psicología: Ritmo orgánico, similar a un latido o una risa.
//     Patrón: Sincopado o ritmo cardíaco (Ba-dum... Ba-dum).
//


import {Animated, Easing, Platform, Vibration} from 'react-native';
import * as Haptics from 'expo-haptics';


type FeedbackType = 'success' | 'error' | 'warning' | 'light' | 'medium' | 'heavy' | 'soft' | 'rigid' | "selection";
type ReactionType = 'mal' | 'normal' | 'bien' | 'excelente' | 'feliz';

export const hapticFeedback = async (type: FeedbackType) => {
    switch (type) {
        case 'success':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            break;
        case 'error':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            break;
        case 'warning':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            break;
        case 'soft':
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            break;
        case 'rigid':
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
            break;
        case 'light':
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            break;
        case 'medium':
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            break;
        case 'heavy':
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            break;
        case 'selection':
            await Haptics.selectionAsync();
            break;
        default:
            break;
    }
};


export const hapticReaction = (type: ReactionType) => {
    // Lógica para Android: [espera, vibración, espera, vibración...]
    // Lógica para iOS: [espera antes de 1ra, espera antes de 2da, espera antes de 3ra...] (Vibración fija ~400ms)

    const patterns = {
            mal: {
                // Android: 3 golpes cortos y secos (Buzz-Buzz-Buzz)
                android: [0, 100, 50, 100, 50, 100],
                // iOS: 3 vibraciones con mínima separación (lo más rápido posible)
                ios: [1, 1]
            },
            normal: {
                // Android: Un "tick" muy sutil (70ms)
                android: [0, 70],
                // iOS: Vibración estándar única (null o array vacío suele disparar la default)
                ios: [1, 2, 2]
            },
            bien: {
                // Android: "Ta-da!" (Corto - Pausa - Medio)
                android: [0, 100, 100, 200],
                // iOS: Dos vibraciones separadas por un intervalo claro
                ios: [2, 1]
            },
            excelente: {
                // Android: Fanfarria creciente (Corto-Corto-Largo)
                android: [0, 80, 50, 80, 50, 400],
                // iOS: Tres vibraciones rápidas seguidas (Trino)
                ios: [1,1,1,1,1]
            },
            feliz: {
                // Android: Latido de corazón (Ba-dum... Ba-dum)
                android: [0, 80, 150, 80, 400, 80, 150, 80],
                // iOS: Patrón rítmico espaciado
                ios: [1,2,.9,.8,.8, 1]
            }
        }
    ;

    const selectedPattern = Platform.OS === 'ios'
        ? patterns[type].ios
        : patterns[type].android;

    // Cancelamos cualquier vibración previa para evitar superposiciones "sucias"
    Vibration.cancel();

    const ONE_SECOND_IN_MS = 1000;
    // multiply each entry of the array by ONE_SECOND_IN_MS
    const scaledPattern = selectedPattern.map(entry => entry * ONE_SECOND_IN_MS);
    // Ejecutamos el patrón
    Vibration.vibrate(scaledPattern, false);
};

export const animatedReaction = (type: ReactionType, loadingAnim: Animated.Value) => {

    switch (type) {
        case 'bien':

            // Animación de sacudida rápida
            Animated.sequence([
                Animated.timing(loadingAnim, {
                    toValue: 1.1,
                    duration: 50,
                    useNativeDriver: false,
                }),
                Animated.timing(loadingAnim, {
                    toValue: 0.9,
                    duration: 50,
                    useNativeDriver: false,
                }),
                Animated.timing(loadingAnim, {
                    toValue: 1.0,
                    duration: 50,
                    useNativeDriver: false,
                }),
            ]).start();
            break;
        case'mal':
            const scale = 0.3;
            Animated.loop(
                Animated.sequence([
                    // Shift left
                    Animated.timing(loadingAnim, {
                        toValue: -10 * scale,
                        duration: 100,
                        // inicia lento y se acelera hacia el medio, luego desacelera al final
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                        useNativeDriver: true,
                    }),
                    // Shift right
                    Animated.timing(loadingAnim, {
                        toValue: 10 * scale,
                        duration: 100,
                        // inicia acelera y desacelera simétricamente
                        easing: Easing.bezier(1, 0.25, 0.25, 0.75),
                        useNativeDriver: true,
                    }),
                    // Return to center
                    Animated.timing(loadingAnim, {
                        toValue: 0, // Back to center
                        duration: 100,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                        useNativeDriver: true,
                    }),
                ]),
                {
                    iterations: 3, // Repeat the sequence 3 times for a convincing shake
                }
            ).start();

            break;
        default:
            break;
    }
}
