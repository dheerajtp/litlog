import { Text, View, ScrollView, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import useViewSingleBook from "../../../hooks/view/useViewSingleBooks";
import Loading from "../../../components/common/Loading";
import Error from "../../../components/common/Error";
import Empty from "../../../components/common/Empty";
import styles from "../../../assets/styles";

const bookDetail = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { getBookDetails, handleQuotesPress, handleReadActivityPress } =
    useViewSingleBook();
  const result = getBookDetails(id);
  console.info(JSON.stringify(result), "result", result.isLoading);
  if (result.isLoading) {
    return <Loading />;
  }
  if (result.isError) {
    return <Error />;
  }
  if (result.data.length == 0) {
    return <Empty />;
  }
  return (
    <ScrollView contentContainerStyle={styles.singleBookContainer}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <View style={styles.bookContainer}>
        {result.data.map((item, index) => {
          return (
            <View key={index} style={styles.singleBook}>
              <Text style={styles.singleBookTitle}>{item.name}</Text>
              <Text style={styles.singleBookAuthor}>by {item.author}</Text>
              <Text style={styles.singleBookDetails}>Genre: {item.genre}</Text>
              <Text style={styles.singleBookDetails}>
                Language: {item.language}
              </Text>
              <Text style={styles.singleBookDetails}>
                Number of Pages: {item.numberOfPages}
              </Text>
              <Text style={styles.singleBookDetails}>Price: ${item.price}</Text>
              <Text style={styles.singleBookDetails}>
                Publishers: {item.publishers}
              </Text>
              <Text style={styles.singleBookDetails}>
                Created At: {new Date(item.created_at).toLocaleDateString()}
              </Text>
              <Text style={styles.singleBookDetails}>
                Completed: {item.completed ? "Yes" : "No"}
              </Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.boxContainer} onPress={handleQuotesPress}>
        <Text style={styles.boxText}>Quotes</Text>
      </TouchableOpacity>

      {result.data && !result.data[0].completed && (
        <TouchableOpacity
          style={styles.boxContainer}
          onPress={handleReadActivityPress}
        >
          <Text style={styles.boxText}>Daily Read Activity</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default bookDetail;
