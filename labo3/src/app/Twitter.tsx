import { useFetch } from "@/hooks/FetchHook";
import { View, StyleSheet } from "react-native";
import { TweetsList, TweetsProfileList } from "./types";
import { useState } from "react";
import { TwitterList } from "@/Components/Twitter";

// https://github.com/similonap/json/master/twitter/tweets.json
// https://github.com/similonap/json/master/twitter/profiles.json

export default function Twitter() {
  const {data : tweets, error : tweetsError, loading : tweetsLoading, refetch : refetchTweets} = useFetch<TweetsList>("https://raw.githubusercontent.com/similonap/json/refs/heads/master/twitter/tweets.json");
  const {data : profile, error : profileError, loading : profileLoading, refetch : refetchProfile} = useFetch<TweetsProfileList>("https://raw.githubusercontent.com/similonap/json/refs/heads/master/twitter/profiles.json");

  const [filter, setFilter] = useState<string>("");

  const tweetsFiltered = () => {
    const handle = filter.trim().toLocaleLowerCase();
    if (handle.length === 0) return tweets ?? [];
    return (tweets ?? []).filter(
      (tweet) => tweet.handle.toLocaleLowerCase().includes(handle.toLocaleLowerCase())
    );
  }

  return (
    <View style={styles.container}>
      <TwitterList refetchTweets={refetchTweets} setFilter={setFilter} tweetsFiltered={tweetsFiltered} tweetsLoading={tweetsLoading}/>
    </View>
  );
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