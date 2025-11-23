import { Text, View } from "react-native";
import * as Device from 'expo-device';
import {useTheme} from "@/contexts/ThemeContext";

export function DeviceInfoDemo() {
    const {themeColors} = useTheme();

    const deviceInfoList = [
        {type: 'Device Name', value: Device.deviceName || 'Unknown'},
        {type: 'Device Year Class', value: Device.deviceYearClass || 'Unknown'},
        {type: 'Device Model Name', value: Device.modelName || 'Unknown'},
        {type: 'Device Manufacturer', value: Device.manufacturer || 'Unknown'},
        {type: 'Is Device', value: Device.isDevice},
        {type: 'Operating System', value: Device.osName || 'Unknown'},
        {type: 'Operating System Version', value: Device.osVersion || 'Unknown'},
        {type: 'Platform API Level', value: Device.platformApiLevel || 'Unknown'},
        {type: 'Total Memory (bytes)', value: Device.totalMemory || 'Unknown'},
    ];


    return (

        <View style={{backgroundColor: themeColors.card, borderColor: themeColors.border}}
              className="p-4 rounded-lg border my-2" >

            <View style={{flex: 1}}>
                {deviceInfoList.map(item => (
                    <View key={item.type} className="p-2 border-b">
                        <Text className="font-bold" style={{color:themeColors.foreground}}>{item.type}</Text>
                        <Text className="font-light" style={{color:themeColors.foreground}}>{String(item.value)}</Text>
                    </View>
                ))}
            </View>

        </View>
    )
}