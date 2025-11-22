import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import {Platform} from "react-native";

type Theme = "light" | "dark";

type ThemeState = {
    theme: Theme;
    _hasHydrated: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    setHasHydrated: (value: boolean) => void;
};

const isWeb = Platform.OS === "web";

export const useThemeStore = create(
    persist<ThemeState>(
        (set) => ({
            theme: "dark",
            _hasHydrated: false,
            setTheme: (theme: Theme) => {
                set((state) => ({
                    ...state,
                    theme,
                }));
            },
            toggleTheme: () => {
                set((state) => ({
                    ...state,
                    theme: state.theme === "dark" ? "light" : "dark",
                }));
            },
            setHasHydrated: (value: boolean) => {
                set((state) => ({
                    ...state,
                    _hasHydrated: value,
                }));
            },
        }),
        {
            name: "theme-store",
            storage: isWeb
                ? createJSONStorage(() => localStorage)
                : createJSONStorage(() => ({
                    setItem: (key: string, value: string) =>
                        SecureStore.setItemAsync(key, value),
                    getItem: (key: string) => SecureStore.getItemAsync(key),
                    removeItem: (key: string) => SecureStore.deleteItemAsync(key),
                })),
            onRehydrateStorage: () => {
                return (state) => {
                    state?.setHasHydrated(true);
                };
            },
        },
    ),
);

