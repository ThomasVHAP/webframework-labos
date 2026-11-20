import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { View, Text } from "react-native"

const Index = () => {

    useFocusEffect(
        useCallback(() => {
            console.log("boop")
        }, [])   
    )


    return (
        <View style={{flex: 1, backgroundColor: "red"}}>
            <Text>Tab 1</Text>
        </View>
    )
}

export default Index;