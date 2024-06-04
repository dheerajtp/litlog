import { View, Text } from "react-native";
import styles from "../../assets/styles";

const SingleBook = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.articleBody}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );
};

export default SingleBook;
