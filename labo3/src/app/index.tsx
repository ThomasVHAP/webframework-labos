import { useFetch } from "@/hooks/FetchHook";
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, ScrollViewInstance, Button, FlatList } from "react-native";
import { CommandItem } from "./types";
import CommandView from "@/Components/CommandView";
import { useRef } from "react";

export default function Index() {

  const {data, error, loading, refetch} = useFetch<CommandItem>("https://raw.githubusercontent.com/similonap/json/refs/heads/master/linux.json");

  if (!data) {
    return <View></View>
  }

  // const scrollViewRef = useRef<ScrollViewInstance>(null);

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      {/* <ActivityIndicator animating={loading}/> */}

      <FlatList
        refreshing={loading}
        onRefresh={refetch}
        data={data}
        renderItem={(v) => <CommandView command={v}/>}
        keyExtractor={(item, index) => item.rank.toString()}
      />


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
  },
});
