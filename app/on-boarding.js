import { View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import styles from "../assets/styles";

const OnBoarding = () => {
  const handleDone = () => {
    // asyncStorage.storeData("onBoarded", "1");
    // navigation.navigate("index");
    console.info("handle DOne");
  };
  return (
    <View style={styles.onBoardingContainer}>
      <Onboarding
        containerStyles={styles.onBoardingPadding}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/library.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "Lit Log: Your Personal Literature Log",
            subtitle:
              "Welcome to Lit Log, your digital companion for keeping track of your reading journey. Begin by organizing your reading sessions effortlessly. With our intuitive interface, record essential details such as book title, author, publisher, and the total number of pages read for each session.Let's embark on this literary adventure together!",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/search.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "Word Wizard: Understand Every Term",
            subtitle:
              "Meet our Word Wizard! Simply type in any word to uncover its meaning. Once you've found it, link the meaning to the book you're reading. It's that easy! Now, every time you encounter that word, you'll know exactly what it means. Let's make your reading experience smoother and more enlightening!",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/statistics.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "Insight Hub: Explore Your Reading Habits",
            subtitle:
              "Welcome to Insight Hub, where your reading habits come to life! Dive into detailed statistics of your reading journey.Track your progress over time, see which books you've read on specific dates, and gain insights into your reading patterns. Discover the power of data as you understand your reading habits better than ever before!",
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;
