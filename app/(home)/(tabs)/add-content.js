import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const AddContent = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
};

export default AddContent;
