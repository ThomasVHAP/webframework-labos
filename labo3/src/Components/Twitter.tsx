import { TweetsList } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

export interface TwitterListProps {
  setFilter: Dispatch<SetStateAction<string>>;
  tweetsLoading: boolean;
  refetchTweets: () => void;
  tweetsFiltered: () => TweetsList;
}

export const TwitterList = ({refetchTweets, setFilter, tweetsFiltered, tweetsLoading} : TwitterListProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Filter" onChangeText={setFilter}
        style={styles.textInputContainer}></TextInput>

      <FlatList
        refreshing={tweetsLoading}
        onRefresh={refetchTweets}
        data={tweetsFiltered()}
        renderItem={({item}) => (
          <View style={styles.tweetCard}>
            <Text>{item.handle}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige"
  },
  textInputContainer: {
    borderWidth: 1,
    margin: 3,
    padding: 5,
    borderRadius: 7,
    width: 300,

    backgroundColor: "white",
  },
  tweetCard: {
    margin: 5,
    padding: 15,

    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "black",

    elevation: 5
  }
});