import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <Link href="/about">About</Link>
      <Link href="/users" asChild>
        <Pressable>
          <Text>Users Page</Text>
        </Pressable>
      </Link>
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
