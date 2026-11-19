import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Switch } from "react-native";

export default function DarkLight() {
  const [first, setFirst] = useState<string>("white");
  const [second, setSecond] = useState<string>("black");
  const [enable, setEnable] = useState<boolean>(false);

  return (
    <View style={[styles.container, {backgroundColor: !enable ? first : second}]}>
      <Text>Dark and light mode app</Text>

        <TextInput value={first} onChangeText={text => setFirst(text)}></TextInput>
        <TextInput value={second} onChangeText={text => setSecond(text)}></TextInput>

        <Switch
          value={enable}
          onValueChange={() => setEnable(prev => !prev)}
        />
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