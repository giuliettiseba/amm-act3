import {Text, TouchableOpacity, View} from "react-native";
import {useAuthStore} from "@/utils/authStore";
import React from "react";

export default function ProfileScreen() {
    const {logOut} = useAuthStore();

    return (
        <TouchableOpacity  onPress={logOut}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
    );
}