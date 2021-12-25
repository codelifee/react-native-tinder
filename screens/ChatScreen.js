import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';
import tw from "tailwind-rn"

const ChatScreen = () => {
    return (
        <View style={tw("flex-1 justify-center items-center")}>
            <Text>Chat</Text>
        </View>
    );
}

export default ChatScreen;
