import {View} from "react-native";
import {AppText} from "@/components/AppText";

export default function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <AppText center>
                Settings Screen
            </AppText>
        </View>
    )
}