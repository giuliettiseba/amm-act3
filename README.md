# AMM-ACT3 - Librería Universitaria y Espacio Multifuncional

[![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/accounts/giuliettiseba/projects/amm-act3)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 📋 Descripción del Proyecto

Aplicación móvil multiplataforma desarrollada con **React Native** y **Expo** que gestiona una librería universitaria con espacio multifuncional. La aplicación combina tres áreas principales:
- 📚 **Venta de libros**
- 💼 **Zona de co-working**
- ☕ **Cafetería**

Esta aplicación es la versión móvil nativa del proyecto web desarrollado previamente, reutilizando código y lógica de negocio, demostrando una de las principales ventajas de React Native: el desarrollo multiplataforma con código compartido.

## 🌐 Enlaces Importantes

- **Aplicación desplegada**: [https://expo.dev/accounts/giuliettiseba/projects/amm-act3](https://expo.dev/accounts/giuliettiseba/projects/amm-act3)
- **Repositorio GitHub**: [https://github.com/giuliettiseba/amm-act3](https://github.com/giuliettiseba/amm-act3)
- **API Simulada**: `https://mock.apidog.com/m1/1069422-1057565-default`

## 🚀 Acceso a la Aplicación

### Opción 1: Expo Go (Recomendado para pruebas rápidas)

1. **Descarga Expo Go en tu dispositivo móvil:**
   - [iOS - App Store](https://apps.apple.com/app/apple-store/id982107779)
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Abre la aplicación:**
   - Visita: [https://expo.dev/accounts/giuliettiseba/projects/amm-act3](https://expo.dev/accounts/giuliettiseba/projects/amm-act3)
   - Escanea el código QR con Expo Go (Android) o la cámara del iPhone (iOS)

3. **Credenciales de acceso (si aplica):**
   - La aplicación permite acceso sin autenticación para la mayoría de las funciones
   - Algunas rutas protegidas requieren login

### Opción 2: Ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/giuliettiseba/amm-act3.git
cd amm-act3

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start

# O directamente en Android/iOS
npm run android  # Para Android
npm run ios      # Para iOS (solo en macOS)
```

## 🛠️ Tecnologías Utilizadas

### Core
- **React Native** `^0.81.5` - Framework para aplicaciones móviles nativas
- **Expo** `~54.0.25` - Plataforma y herramientas para React Native
- **TypeScript** - Tipado estático para JavaScript
- **Expo Router** `^6.0.15` - Sistema de navegación basado en archivos

### Gestión de Estado y Datos
- **Zustand** `^5.0.5` - Gestión de estado global ligera
- **React Query** `^5.90.10` - Gestión de estado asíncrono y caché
- **Axios** `^1.13.2` - Cliente HTTP para peticiones a la API
- **AsyncStorage** `^2.2.0` - Persistencia de datos local

### UI/UX
- **NativeWind** `^4.2.1` - TailwindCSS para React Native
- **Expo Linear Gradient** `^15.0.7` - Gradientes nativos
- **Expo Haptics** `^15.0.7` - Retroalimentación háptica
- **React Native Reanimated** `^4.1.5` - Animaciones fluidas
- **React Native Gesture Handler** `^2.29.1` - Gestos nativos

### Navegación
- **Expo Router** - Navegación basada en sistema de archivos
- **React Native Screens** - Optimización de navegación

### Fuentes y Assets
- **Expo Font** `^14.0.9` - Carga de fuentes personalizadas
- **Hanken Grotesk** - Familia de fuentes principal (18 variantes)

## 📁 Estructura del Proyecto

```
amm-act3/
├── src/
│   ├── app/                          # Rutas y pantallas (Expo Router)
│   │   ├── _layout.tsx              # Layout raíz con proveedores
│   │   ├── sign-in.tsx              # Pantalla de inicio de sesión
│   │   ├── (tabs)/                  # Navegación por pestañas
│   │   │   ├── _layout.tsx          # Layout de tabs
│   │   │   ├── index.tsx            # Landing/Home
│   │   │   ├── profile.tsx          # Perfil de usuario
│   │   │   └── settings.tsx         # Configuración
│   │   ├── cafeteria/               # Módulo cafetería
│   │   │   ├── index.tsx            # Lista de categorías
│   │   │   └── categoria/[id].tsx   # Productos por categoría
│   │   ├── coworking/               # Módulo co-working
│   │   │   └── index.tsx            # Salas disponibles
│   │   ├── informacion/             # Información general
│   │   │   └── index.tsx
│   │   └── libros/                  # Módulo librería
│   │       ├── index.tsx            # Catálogo de libros
│   │       └── [id].tsx             # Detalle del libro
│   │
│   ├── components/                   # Componentes reutilizables
│   │   ├── AnimatedBackground.tsx   # Fondo con gradiente animado
│   │   ├── BookCard.tsx             # Tarjeta de libro
│   │   ├── ErrorMessage.tsx         # Mensaje de error
│   │   ├── GenericCard.tsx          # Tarjeta genérica reutilizable
│   │   ├── HomeItem.tsx             # Item del menú principal
│   │   ├── MorphingGlassButton.tsx  # Botón con efecto glassmorphism
│   │   ├── MorphingGlassTextInput.tsx # Input con efecto glassmorphism
│   │   ├── DeviceInfoDemo.tsx       # Demostración de info del dispositivo
│   │   └── HapticsDemo.tsx          # Demostración de hápticos
│   │
│   ├── contexts/                     # Contextos de React
│   │   └── ThemeContext.tsx         # Contexto de tema (dark/light)
│   │
│   ├── hooks/                        # Custom Hooks
│   │   ├── useAlertWithHaptics.tsx  # Alertas con retroalimentación háptica
│   │   └── useApiClient.tsx         # Cliente API con React Query
│   │
│   ├── routes/                       # Configuración de navegación
│   │   └── RootNavigator.tsx        # Navegador raíz
│   │
│   ├── types/                        # Definiciones TypeScript
│   │   ├── Book.ts                  # Tipo de libro
│   │   ├── CafeteriaCategories.ts   # Categorías de cafetería
│   │   ├── CafeteriaProduct.ts      # Producto de cafetería
│   │   └── CoworkingRoom.ts         # Sala de co-working
│   │
│   └── utils/                        # Utilidades
│       ├── authStore.ts             # Store de autenticación (Zustand)
│       ├── themeStore.ts            # Store de tema (Zustand)
│       ├── constants.ts             # Constantes de la aplicación
│       ├── nexus_hapatics.ts        # Utilidades de hápticos
│       └── utils.ts                 # Funciones auxiliares
│
├── assets/                           # Recursos estáticos
│   ├── fonts/                       # Fuentes personalizadas (Hanken Grotesk)
│   ├── icon.png                     # Icono de la app
│   ├── splash-icon.png              # Splash screen
│   ├── adaptive-icon.png            # Icono adaptativo (Android)
│   └── favicon.png                  # Favicon (web)
│
├── app.json                          # Configuración de Expo
├── babel.config.js                   # Configuración de Babel
├── metro.config.js                   # Configuración de Metro bundler
├── tailwind.config.js                # Configuración de TailwindCSS
├── tsconfig.json                     # Configuración de TypeScript
└── package.json                      # Dependencias del proyecto
```

## 🎨 Características Principales

### ✅ Cumplimiento de Requisitos de la Actividad

#### 1. **Componentes de React Native**
- ✅ Uso coherente de `View`, `Text`, `Pressable`
- ✅ `SafeAreaView` implementado con `react-native-safe-area-context` (no deprecated)
- ✅ Implementación de `FlatList` para listas optimizadas
- ✅ `ScrollView` para contenido desplazable
- ✅ Componentes nativos de Expo (Haptics, Font, Device, etc.)
- ✅ `GestureHandlerRootView` para gestos nativos

#### 2. **Retroalimentación Háptica**
- ✅ Implementada en múltiples puntos:
  - Botones de navegación
  - Alertas y notificaciones
  - Interacciones con tarjetas
  - Custom hook `useAlertWithHaptics`
  - Utilidades en `nexus_hapatics.ts`

#### 3. **Ejecución en Dispositivos**
- ✅ Compatible con dispositivos virtuales (iOS/Android)
- ✅ Desplegada en Expo para dispositivos físicos
- ✅ Funciona en emuladores mediante `expo start`

#### 4. **Estilizado con NativeWind**
- ✅ NativeWind como sistema principal de estilos
- ✅ TailwindCSS configurado (`tailwind.config.js`)
- ✅ StyleSheet usado solo cuando es técnicamente necesario
- ✅ **Dos fuentes personalizadas** (Hanken Grotesk con 6 pesos)

#### 5. **Navegación**
- ✅ **Stack Navigation**: Navegación entre pantallas de detalle
- ✅ **Tabs Navigation**: Menú principal con pestañas
- ✅ Implementado con Expo Router (file-based routing)

#### 6. **Vistas Implementadas**
- ✅ **Vista inicial/Landing**: `(tabs)/index.tsx`
- ✅ **Cinco vistas adicionales**:
  1. Cafetería (categorías y productos)
  2. Co-working (salas disponibles)
  3. Libros (catálogo y detalle)
  4. Perfil de usuario
  5. Configuración/Settings

#### 7. **Login y Rutas Protegidas** (Bonus)
- ✅ Pantalla de login: `sign-in.tsx`
- ✅ Sistema de autenticación con Zustand
- ✅ Persistencia con SecureStore
- ✅ Protección de rutas implementada

#### 8. **API Simulada**
- ✅ Integración completa con API Mock de Apidog
- ✅ Endpoints configurados en `constants.ts`:
  - `/products/categories` - Categorías de cafetería
  - `/products` - Productos de cafetería
  - `/rooms` - Salas de co-working
  - `/books` - Catálogo de libros
- ✅ Cliente API con React Query (`useApiClient` hook)

## 🎯 Funcionalidades Destacadas

### 🌙 Tema Claro/Oscuro
- Cambio dinámico de tema
- Persistencia de preferencia
- Adaptación automática de colores
- Store global con Zustand

### 📱 Experiencia de Usuario Optimizada
- Animaciones fluidas con Reanimated
- Efectos glassmorphism en componentes
- Gradientes animados en fondos
- Feedback háptico en interacciones clave
- Loading states y error handling

### 🔄 Gestión de Datos
- Cache automático con React Query
- Optimización de peticiones HTTP
- Estados de carga y error
- Revalidación automática

### 🎨 Diseño Responsive
- Adaptación a diferentes tamaños de pantalla
- Safe areas respetadas
- Tipografía escalable
- Grid y flex layouts con NativeWind

## 📲 API Endpoints

La aplicación consume los siguientes endpoints de la API simulada:

```typescript
// Base URL
const API_BASE_URL = 'https://mock.apidog.com/m1/1069422-1057565-default';

// Endpoints
GET /products/categories        // Categorías de cafetería
GET /products                   // Productos de cafetería
GET /products?category={id}     // Productos por categoría
GET /rooms                      // Salas de co-working
GET /books                      // Catálogo de libros
GET /books/{id}                 // Detalle de un libro
```

## 🏗️ Arquitectura y Patrones

### Patrón de Componentes
- **Componentes funcionales** con Hooks
- **Composición** sobre herencia
- **Props drilling** minimizado con contextos y stores
- **Separación de responsabilidades**: UI, lógica, datos

### Gestión de Estado
- **Local**: useState, useEffect
- **Global**: Zustand (auth, theme)
- **Server**: React Query (cache, sincronización)
- **Persistencia**: AsyncStorage, SecureStore

### Navegación
- **File-based routing** con Expo Router
- **Tipado automático** de rutas
- **Layouts compartidos** para grupos de rutas
- **Deep linking** configurado

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo
npm run android        # Abre en emulador Android
npm run ios            # Abre en simulador iOS
npm run web            # Abre en navegador web

# Calidad de código
npm run lint           # Ejecuta ESLint
```

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js >= 18
- npm o yarn
- Expo CLI (se instala automáticamente)
- Para iOS: macOS con Xcode
- Para Android: Android Studio con emulador configurado

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/giuliettiseba/amm-act3.git
cd amm-act3

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm start
```

### Configuración de Variables de Entorno

La URL de la API está configurada en `src/utils/constants.ts`:

```typescript
export const API_BASE_URL = 'https://mock.apidog.com/m1/1069422-1057565-default';
```

## 🧪 Testing y Desarrollo

### Probar en Dispositivo Físico
1. Instala Expo Go en tu dispositivo
2. Asegúrate de estar en la misma red que tu computadora
3. Escanea el QR code que aparece al ejecutar `npm start`

### Probar en Emulador/Simulador

**Android:**
```bash
npm run android
```

**iOS (solo macOS):**
```bash
npm run ios
```

## 📚 Guía de Navegación

### Estructura de Rutas

```
/                           → Landing (tabs)
├── /(tabs)/
│   ├── index              → Pantalla principal
│   ├── profile            → Perfil del usuario
│   └── settings           → Configuración
├── /sign-in               → Inicio de sesión
├── /cafeteria
│   ├── index              → Categorías
│   └── /categoria/[id]    → Productos por categoría
├── /coworking
│   └── index              → Salas disponibles
├── /informacion
│   └── index              → Información general
└── /libros
    ├── index              → Catálogo de libros
    └── /[id]              → Detalle del libro
```

## 🎨 Personalización de Temas

El tema se gestiona mediante el `ThemeContext` y `themeStore`:

```typescript
// Cambiar tema programáticamente
const { setTheme } = useThemeStore();
setTheme('dark'); // o 'light'

// Usar en componentes
const { theme } = useThemeStore();
const isDark = theme === 'dark';
```

## 🔐 Autenticación

El sistema de autenticación utiliza:
- **Zustand** para el estado global
- **SecureStore** para almacenamiento seguro de tokens
- **Persistencia** automática entre sesiones

```typescript
// Login
const { setIsAuthenticated, setUser } = useAuthStore();
setIsAuthenticated(true);
setUser(userData);

// Logout
const { logout } = useAuthStore();
logout();
```

## 📝 Buenas Prácticas Implementadas

- ✅ **TypeScript** para type safety
- ✅ **ESLint** y **Prettier** para consistencia de código
- ✅ **Componentes reutilizables** y modulares
- ✅ **Custom Hooks** para lógica compartida
- ✅ **Error boundaries** y manejo de errores
- ✅ **Loading states** en todas las peticiones
- ✅ **Optimización de imágenes** y assets
- ✅ **Accesibilidad** básica implementada
- ✅ **Comentarios** en código complejo
- ✅ **Nomenclatura** consistente

## 🐛 Solución de Problemas

### La aplicación no inicia
```bash
# Limpiar caché
npx expo start -c

# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Error de fuentes
```bash
# Las fuentes se cargan automáticamente
# Si hay problemas, verifica que estén en assets/fonts/
```

### Error de conexión a API
- Verifica que tienes conexión a Internet
- Comprueba que la URL de la API en `constants.ts` es correcta
- La API simulada puede tener límites de uso

## 📄 Licencia

Este proyecto ha sido desarrollado como parte de la asignatura **Aplicaciones Móviles Multiplataforma** del Máster en Desarrollo de Aplicaciones Móviles.

## 👨‍💻 Autor

**Sebastián Giulietti**
- GitHub: [@giuliettiseba](https://github.com/giuliettiseba)
- Expo: [giuliettiseba](https://expo.dev/accounts/giuliettiseba)

## 🙏 Agradecimientos

- Equipo de Expo por las herramientas y documentación
- Comunidad de React Native
- APIdog por el servicio de API simulada

---

## 📊 Rúbrica de Evaluación - Cumplimiento

| Criterio | Descripción | Implementación | Peso |
|----------|-------------|----------------|------|
| **Criterio 1** | Landing page implementada | ✅ `(tabs)/index.tsx` | 5% |
| **Criterio 2** | Cinco vistas adicionales | ✅ Cafetería, Co-working, Libros, Perfil, Settings | 25% |
| **Criterio 3** | Dos tipos de navegación | ✅ Stack + Tabs (Expo Router) | 20% |
| **Criterio 4** | NativeWind + 2 fuentes | ✅ NativeWind + Hanken Grotesk (6 pesos) | 20% |
| **Criterio 5** | Retroalimentación háptica | ✅ Múltiples puntos + custom hooks | 10% |
| **Criterio 6** | Uso de API simulada | ✅ Integración completa con React Query | 10% |
| **Criterio 7** | Vídeo memoria | 📹 Pendiente de entrega | 10% |

---

**Versión:** 1.0.0  
**Última actualización:** Diciembre 2025  
**Estado:** ✅ Producción

