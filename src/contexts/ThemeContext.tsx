import React, {createContext, useContext, ReactNode} from "react";
import {useThemeStore} from "@/utils/themeStore";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    themeColors: {
        background: string;
        backgroundSecondary: string;
        backgroundMuted: string;
        foreground: string;
        foregroundSecondary: string;
        foregroundMuted: string;
        card: string;
        cardForeground: string;
        border: string;
        input: string;
        ring: string;
        primary: string;
        primaryForeground: string;
        secondary: string;
        secondaryForeground: string;
        success: string;
        warning: string;
        error: string;
        info: string;
    };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightColors = {
    background: "#FFFFFF",
    backgroundSecondary: "#F8FAFC",
    backgroundMuted: "#F1F5F9",
    foreground: "#1E293B",
    foregroundSecondary: "#334155",
    foregroundMuted: "#64748B",
    card: "#FFFFFF",
    cardForeground: "#1E293B",
    border: "#E2E8F0",
    input: "#F1F5F9",
    ring: "#2b60b7",
    primary: "#3B82F6",
    primaryForeground: "#FFFFFF",
    secondary: "#F1F5F9",
    secondaryForeground: "#1E293B",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
};

const darkColors = {
    background: "#0F172A",
    backgroundSecondary: "#1E293B",
    backgroundMuted: "#334155",
    foreground: "#F1F5F9",
    foregroundSecondary: "#E2E8F0",
    foregroundMuted: "#94A3B8",
    card: "#1E293B",
    cardForeground: "#F1F5F9",
    border: "#334155",
    input: "#334155",
    ring: "#60A5FA",
    primary: "#60A5FA",
    primaryForeground: "#1E293B",
    secondary: "#334155",
    secondaryForeground: "#F1F5F9",
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#60A5FA",
};

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const {theme, setTheme, toggleTheme} = useThemeStore();

    const themeColors = theme === "dark" ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme, themeColors}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
