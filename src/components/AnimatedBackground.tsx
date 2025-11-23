import React, { useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Ellipse } from 'react-native-svg';

interface AnimatedBackgroundProps {
  validEmail: boolean;
  validPassword: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ validEmail, validPassword }) => {
  const { width, height } = useWindowDimensions();

  // Determinar colores según el estado de validación
  const getColors = () => {
    if (validEmail && validPassword) {
      return ['#6ee7b7cc', '#3b82f6cc', '#f472b6cc']; // verde-azul-rosa
    } else if (!validEmail && !validPassword) {
      return ['#f87171cc', '#fbbf24cc', '#f472b6cc']; // rojo-amarillo-rosa
    } else if (!validEmail) {
      return ['#f87171cc', '#fbbf24cc', '#3b82f6cc']; // rojo-amarillo-azul
    } else {
      return ['#fbbf24cc', '#3b82f6cc', '#f472b6cc']; // amarillo-azul-rosa
    }
  };

  const [color1, color2, color3] = getColors();

  // Animación sutil: cambiar gradualmente los stops
  // (En una versión avanzada, usaría react-native-reanimated o Animated, pero aquí es estático y reactivo a props)

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={width} height={height}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="40%"
            rx="60%"
            ry="60%"
            fx="50%"
            fy="40%"
          >
            <Stop offset="0%" stopColor={color1} stopOpacity="0.7" />
            <Stop offset="60%" stopColor={color2} stopOpacity="0.5" />
            <Stop offset="100%" stopColor={color3} stopOpacity="0.3" />
          </RadialGradient>
        </Defs>
        <Ellipse
          cx={width / 2}
          cy={height / 2}
          rx={width * 0.7}
          ry={height * 0.7}
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
};

export default AnimatedBackground;

