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
  floatingContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  floatingIcon: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  booksContainer: {
    flex: 1,
    paddingBottom: 60,
    paddingHorizontal: 16,
  },
  flatListContentContainer: {
    paddingBottom: 60,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    margin: 8,
    height: responsiveWidth(40),
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 18,
    fontSize: 24,
    color: "black",
  },
  booleanFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  booleanFieldLabel: {
    marginLeft: 10,
  },
  buttonSpacing: {
    marginTop: 4,
    marginBottom: 4,
    alignSelf: "stretch",
  },
  createBookContainer: {
    margin: 20,
    padding: 12,
  },
  singleBookContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  bookContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 8,
  },
  singleBookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  singleBookAuthor: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  singleBookDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
  boxContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quoteContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    lineHeight: 24,
  },
  quoteName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pageNumber: {
    fontSize: 16,
    color: "#888",
    marginTop: 10,
    textAlign: "right",
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
  verticalMargin: {
    marginVertical: 8,
  },
});

export default styles;
