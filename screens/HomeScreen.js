import { Text, View, Button } from 'react-native';
import tw from "tailwind-rn"

import {useNavigation} from "@react-navigation/core";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={tw("flex-1 justify-center items-center")}>
            <Text>Home</Text>
            <Button title="Go to Chat Screen" onPress={() => navigation.navigate('Chat')} />
        </View>
    );
}

export default HomeScreen;
