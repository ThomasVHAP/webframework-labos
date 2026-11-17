import { CommandItem } from "@/app/types";
import { View, Text } from "react-native";

interface CommandViewProps {
  data: CommandItem;
}

const CommandView = ({ data }: CommandViewProps) => {
  return (
    <View>
      <Text>{data.command}</Text>
      <Text>{data.description}</Text>
      <Text>{data.rank}</Text>
      <Text>{data.syntax}</Text>
    </View>
  );
};

export default CommandView;