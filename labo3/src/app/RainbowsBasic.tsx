import { Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { HexColor, rainbow } from "rainbow-colors-array-ts"
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";

interface RainBowProp {
    containerStyle: StyleProp<ViewStyle>;
    lineStyle: StyleProp<ViewStyle>;
}

interface LetterProp {
    letter: string;
    color: string;
}

const Rainbow = ({containerStyle, lineStyle} : RainBowProp) => {
    const colors = rainbow(7, "hex", false);
    return (
        <View style={containerStyle}>
            {
                colors.map(c => (
                    <View key={c.hex} style={[{backgroundColor: c.hex}, lineStyle]}/>
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

const Footer = () => {
    const colors = rainbow(7, "hex", false);
    const rainBowText = "rainbow"
    return (
        <View style={{height: 100, flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
            {
                rainBowText.split("").map((letter, i) => <Letter key={letter} color={String(colors[i].hex)} letter={letter}/>)
            }
        </View>
    )
}

export default function RainbowBasic() {
  return (
    <SafeAreaView style={styles.container}>
        <Rainbow containerStyle={{}} lineStyle={{height: 10}}/>
        <View style={{flex: 1, flexDirection: "row"}}>
            <Rainbow containerStyle={{flex: 1, flexDirection: "row",
                justifyContent: "space-around"}} lineStyle={{width: 10}}></Rainbow>
            <Rainbow containerStyle={{flex: 1, flexDirection: "column",
                justifyContent: "space-around", alignItems: "center"}} lineStyle={{height: 50, width: 50}}></Rainbow>
        </View>
        <Footer />
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

});