import styles from "../../assets/styles";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

const Empty = () => {
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require("../../assets/animations/empty.json")}
        autoPlay
        loop
        style={styles.onBoardingLottie}
      />
    </View>
  );
};

export default Empty;
