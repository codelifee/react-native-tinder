import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';
import tw from "tailwind-rn"
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const { user } = useAuth();

    console.log(user)

    return (
        <View style={tw("flex-1 justify-center items-center")}>
            <Text>Login</Text>
        </View>
    );
}

export default LoginScreen;
