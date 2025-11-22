import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from "react";


export function useAsyncStorage<T>(key: string) {

    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        getData().then(r => {
            // Data retrieved
        });

    }, []);

    const storeData = async (value: T) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            setValue(value);
        } catch (e) {
            // saving error
        }
    };

    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            const retrievedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
            setValue(retrievedValue as T);

        } catch (e) {
            // error reading value
        }

    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem(key);
            setValue(null);
        } catch (e) {
            // remove error
        }
    };

    return {storeData, removeData, value};


}