import {Image, Text, TouchableOpacity, View} from "react-native";
import {useAuthStore} from "@/utils/authStore";
import React from "react";
import {useTheme} from "@/contexts/ThemeContext";

export default function ProfileScreen() {
    const {logOut, user} = useAuthStore();
    const {themeColors} = useTheme();

    return (
        <View style={{backgroundColor: themeColors.background}} className="flex-1 p-4">
            {user && (
                <View className="items-center gap-6">
                    {/* Avatar */}
                    <Image
                        source={{uri: user.avatar}}
                        className="w-32 h-32 rounded-full mt-8"
                    />

                    {/* User Info */}
                    <View className="w-full gap-4">
                        <View style={{backgroundColor: themeColors.card}} className="p-4 rounded-lg">
                            <Text style={{color: themeColors.foregroundMuted}} className="text-sm mb-1">Name</Text>
                            <Text style={{color: themeColors.foreground}} className="font-bold text-lg">{user.name}</Text>
                        </View>

                        <View style={{backgroundColor: themeColors.card}} className="p-4 rounded-lg">
                            <Text style={{color: themeColors.foregroundMuted}} className="text-sm mb-1">Last Name</Text>
                            <Text style={{color: themeColors.foreground}} className="font-bold text-lg">{user.lastName}</Text>
                        </View>

                        <View style={{backgroundColor: themeColors.card}} className="p-4 rounded-lg">
                            <Text style={{color: themeColors.foregroundMuted}} className="text-sm mb-1">Email</Text>
                            <Text style={{color: themeColors.foreground}} className="font-bold text-lg">{user.email}</Text>
                        </View>
                    </View>

                    {/* Sign Out Button */}
                    <TouchableOpacity
                        style={{backgroundColor: themeColors.error}}
                        className="w-full h-12 rounded-lg items-center justify-center mt-4"
                        onPress={logOut}
                    >
                        <Text className="text-white font-bold">Sign Out</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}