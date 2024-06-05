import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const bookDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default bookDetail;
