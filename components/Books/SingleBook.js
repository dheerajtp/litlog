import { View, Text, Pressable } from "react-native";
import styles from "../../assets/styles";
import { useRouter } from "expo-router";

const SingleBook = ({ item }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.articleBody}
        onPress={() => {
          router.push(`(home)/(tabs)/${item.id}`);
        }}
      >
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default SingleBook;
