import {FeedbackType, hapticFeedback} from "@/utils/nexus_hapatics";
import {Alert} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";

export const useAlertWithHaptics = () => {

    const {theme} = useTheme();

    const showAlert = (title: string, message: string, type:  'success' | 'error' | 'info') => {

        let hapticType: FeedbackType;

        switch (type) {
            case 'success':
                hapticType = 'success';
                break;
            case 'error':
                hapticType = 'error';
                break;
            case 'info':
                hapticType = 'medium';
                break;

        }

        hapticFeedback(hapticType).then(
            () => {
                Alert.alert(title, message, [{text: 'OK'}],{
                    userInterfaceStyle: theme
                });
            }
        )
    }


    return {showAlert}

}