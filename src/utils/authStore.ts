import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

type UserState = {
    isLoggedIn: boolean;
    _hasHydrated: boolean;
    logIn: () => void;
    logOut: () => void;
    setHasHydrated: (value: boolean) => void;
};

const isWeb = Platform.OS === "web";

export const useAuthStore = create(
    persist<UserState>(
        (set) => ({
            isLoggedIn: false,
            _hasHydrated: false,
            logIn: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: true,
                    };
                });
            },
            logOut: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: false,
                    };
                });
            },
            setHasHydrated: (value: boolean) => {
                set((state) => {
                    return {
                        ...state,
                        _hasHydrated: value,
                    };
                });
            },
        }),
        {
            name: "auth-store",
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