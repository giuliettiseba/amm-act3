import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {useAsyncStorage} from "@/hooks/useAsyncStorage";

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {

    const {storeData: storeToken, value: token, removeData: removeToken} = useAsyncStorage<string>('token');
    const {storeData: storeUser, value: user, removeData: removeUser} = useAsyncStorage<User>('user');

    const login = async (email: string, password: string) => {
        // Simulate API call - replace with actual authentication logic
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    // Mock user data
                    storeUser({
                        id: '1',
                        name: 'John Doe',
                        email: email,
                        avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    });
                    resolve();
                    storeToken('mock-jwt-token');
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const logout = async () => {
        await removeUser();
        await removeToken()
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: token !== null,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

