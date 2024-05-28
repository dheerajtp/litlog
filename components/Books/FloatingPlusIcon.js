import { TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import styles from "../../assets/styles";
import { useRouter } from "expo-router";

const FloatingPlusIcon = () => {
  const router = useRouter();
  return (
    <View style={styles.floatingContainer}>
      <TouchableOpacity
        style={styles.floatingIcon}
        onPress={() => {
          router.push("(home)/(tabs)/new-book");
        }}
      >
        <FontAwesome6 name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlusIcon;
