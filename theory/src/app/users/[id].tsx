import { User, users } from "@/data/users";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native"

const UserDetailPage = () => {
    const { id } = useLocalSearchParams<{id : string}>();

    const user: User | undefined = users.find(user => user.id === Number(id))

    if (!user) {
        return (<Text>User Not found!</Text>)
    }

    return (
        <View>
            <Stack.Screen options={{title: user.name}}/>
            <Text>{user.name} {id}</Text>
        </View>
    )
}

export default UserDetailPage;