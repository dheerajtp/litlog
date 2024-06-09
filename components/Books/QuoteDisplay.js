import { Text, View } from "react-native";
import styles from "../../assets/styles";

const QuoteDisplay = ({ quote, page }) => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>
        <Text style={styles.quoteName}>"</Text>
        {quote}
        <Text style={styles.quoteName}>"</Text>
      </Text>
      <Text style={styles.pageNumber}>- Page {page}</Text>
    </View>
  );
};

export default QuoteDisplay;
