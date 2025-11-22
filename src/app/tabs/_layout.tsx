import {Stack, Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
            }}/>
            <Tabs.Screen name="settings" options={{
                title: "Settings",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="gear" color={color}/>

            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color}/>
            }}/>
            <Tabs.Screen name="libros" options={{
                title: "Libros",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="book" color={color}/>
            }}>
            </Tabs.Screen>

        </Tabs>


    )
}