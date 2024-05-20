import styles from "../../assets/styles";
import { ActivityIndicator, View } from "react-native";
const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        color="#000000"
        style={styles.loadingSize}
      />
    </View>
  );
};

export default Loading;
