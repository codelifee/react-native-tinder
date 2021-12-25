import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';
import tw from "tailwind-rn"

const HomeScreen = () => {
    return (
        <View style={tw("flex-1 justify-center items-center")}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button title="Click me" />
        </View>
    );
}

export default HomeScreen;
