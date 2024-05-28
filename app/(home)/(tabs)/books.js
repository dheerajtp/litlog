import { Text, View } from "react-native";
import FloatingPlusIcon from "../../../components/Books/FloatingPlusIcon";
import styles from "../../../assets/styles";

const Books = () => {
  return (
    <View style={styles.booksContainer}>
      <Text>Books</Text>
      <FloatingPlusIcon />
    </View>
  );
};

export default Books;
