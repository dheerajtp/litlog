import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  onBoardingContainer: {
    flex: 1,
  },
  onBoardingPadding: {
    paddingHorizontal: 15,
  },
  onBoardingLottie: {
    width: responsiveWidth(80),
    height: responsiveWidth(60),
  },
  button: {
    display: "inline-block",
    outline: 0,
    border: 0,
    cursor: "pointer",
    borderRadius: 8,
    padding: 14,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 1,
    transition: "transform 200ms, background 200ms",
    backgroundColor: "transparent",
    color: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  marginVertical: {
    marginVertical: 8,
  },
  errorText: {
    marginBottom: 4,
    color: "red",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  loadingSize: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  graphBG: {
    backgroundColor: "#FFFFFF",
  },
  activityGraphHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default styles;
