import { Text, View, StyleSheet, StyleProp, ViewStyle, TextInput, Pressable } from "react-native";
import { HexColor, rainbow } from "rainbow-colors-array-ts"
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

interface RainBowProp {
    containerStyle: StyleProp<ViewStyle>;
    lineStyle: StyleProp<ViewStyle>;
    colors: string[];
}

interface LetterProp {
    letter: string;
    color: string;
}

interface FooterProp {
  text: string;
  pastel: boolean;
}

const Rainbow = ({containerStyle, lineStyle, colors} : RainBowProp) => {
    return (
        <View style={containerStyle}>
            {
                colors.map(c => (
                    <View key={c} style={[{backgroundColor: c}, lineStyle]}/>
                ))
            }
        </View>
    )
}

const Letter = ({letter, color} : LetterProp) => {
    return (
        <Text style={{color: color, fontSize: 50}}>{letter}</Text>
    )
}

const Footer = ({text, pastel} : FooterProp) => {
    const colors = rainbow(text.length, "hex", pastel);
    return (
        <View style={{height: 100, flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
            {
                text.split("").map((letter, i) => <Letter key={i} color={String(colors[i].hex)} letter={letter}/>)
            }
        </View>
    )
}

export default function RainbowBasic() {
  const [textInput, setTextInput] = useState<string>("rainbows")
  const [sub, setSub] = useState<string>("");
  const [press, setPress] = useState<boolean>(false);

  const [rainbowOrder, setRainbowOrder] = useState<number[]>([0,1,2,3,4,5])
  const colors = rainbow(7, "hex", press).map(color => color.hex);
  const rainbowColors = rainbowOrder.map(i => colors[i]);

  const random = () => {
    setRainbowOrder([...rainbowOrder].sort(() => Math.random() - 0.5));
  }

  const handleSubmit = () => {
    let handle : string = textInput.slice(0, 10);
    setSub(handle);
    setTextInput("")
  }

  return (
    <SafeAreaView style={styles.container}>
        <Rainbow containerStyle={{}} lineStyle={{height: 10}} colors={rainbowColors}/>
        <TextInput value={textInput} onChangeText={(t) => setTextInput(t)} onSubmitEditing={handleSubmit}></TextInput>
        <Pressable style={styles.button}
          onPress={() => setPress(prev => !prev)}  
        ><Text>Change Color</Text></Pressable>
        <Pressable style={styles.button}
          onPress={random}
        ><Text>Randomize Color</Text></Pressable>
        <View style={{flex: 1, flexDirection: "row"}}>
            <Rainbow containerStyle={{flex: 1, flexDirection: "row",
                justifyContent: "space-around"}} lineStyle={{width: 10}} colors={rainbowColors}></Rainbow>
            <Rainbow containerStyle={{flex: 1, flexDirection: "column",
                justifyContent: "space-around", alignItems: "center"}} lineStyle={{height: 50, width: 50}} colors={rainbowColors}></Rainbow>
        </View>
        <Footer text={sub} pastel={press}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch"
  },
  button: {
    padding: 20,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  }

});