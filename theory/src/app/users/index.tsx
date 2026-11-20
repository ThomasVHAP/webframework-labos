import { FlatList, View, Text, Pressable} from "react-native"
import { type User, users } from "@/data/users";
import { Link } from "expo-router";

interface UserViewProps {
    user: User
}

const UserView = ({user} : UserViewProps) => {

    return (
        <Link href={{pathname: "/users/[id]", params: {id: user.id}}} asChild>
            <Pressable style={{height: 50, justifyContent: "center", flex: 1}}>
                <Text>{user.name}</Text>
            </Pressable>
        </Link>

    )
}

const usersPage = () => {
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <UserView user={item}></UserView>}
                keyExtractor={(item) => item.id.toString()}
            >

            </FlatList>
        </View>
    )
};

export default usersPage;