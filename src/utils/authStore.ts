import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import {Platform} from "react-native";

type UserState = {
    isLoggedIn: boolean;
    _hasHydrated: boolean;
    logIn: () => void;
    logOut: () => void;
    user: { name: string; lastName: string; avatar: string; email: string } | null;
    setHasHydrated: (value: boolean) => void;
};

const isWeb = Platform.OS === "web";

export const useAuthStore = create(
    persist<UserState>(
        (set) => ({
            isLoggedIn: false,
            _hasHydrated: false,
            user: null,
            logIn: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: true,
                        user: {
                            name: "John Doe",
                            lastName: "Smith",
                            avatar: "https://i.pravatar.cc/150?img=1",
                            email: "john@gmail.com",
                        },
                    };
                });
            },
            logOut: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: false,
                        user: null,
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