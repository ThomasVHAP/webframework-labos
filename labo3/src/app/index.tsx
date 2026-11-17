import { useFetch } from "@/hooks/FetchHook";
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, ScrollViewInstance, Button, FlatList } from "react-native";
import { CommandList } from "./types";
import CommandView from "@/Components/CommandView";
import { useRef } from "react";
import { Link } from "expo-router";

export default function Index() {

  const {data, error, loading, refetch} = useFetch<CommandList>("https://raw.githubusercontent.com/similonap/json/refs/heads/master/linux.json");

  if (!data) {
    return <View></View>
  }

  // const scrollViewRef = useRef<ScrollViewInstance>(null);

  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <View style={styles.menu}>
        <Link href="/RainbowsBasic">Rainbow Basic</Link>
        <Link href="/Twitter">Twitter</Link>
        <Link href="/DarkLight">Dark & Light mode</Link>
        <Link href="/RainbowsState">Rainbow met state</Link>
      </View>


      {/* <ActivityIndicator animating={loading}/> */}

      {/* <FlatList
        refreshing={loading}
        onRefresh={refetch}
        data={data}
        renderItem={({item}) => <CommandView data={item}/>}
        keyExtractor={(item) => item.rank.toString()}
      /> */}


      {/* <ScrollView ref={scrollViewRef}> */}
        {/* {
          data.map((v) => (
            <CommandView key={v}/>
          ))
        } */}
        
        {/* <Button title="Back To Top" onPress={() => scrollViewRef.current?.scrollTo({y:0, animated: false})}></Button> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 66,
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    gap: 16,
    marginTop: 16,
  }
});
