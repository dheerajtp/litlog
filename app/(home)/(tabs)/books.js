import { Text, View, FlatList } from "react-native";
import FloatingPlusIcon from "../../../components/Books/FloatingPlusIcon";
import styles from "../../../assets/styles";
import useCreateNewBook from "../../../hooks/view/useCreateNewBook";
import Loading from "../../../components/common/Loading";
import Error from "../../../components/common/Error";
import SingleBook from "../../../components/Books/SingleBook";

const Books = () => {
  const { readAllBookDetails } = useCreateNewBook();
  const result = readAllBookDetails();
  if (result["_j"]["isLoading"]) {
    return <Loading />;
  } else if (result["_j"]["isError"]) {
    return <Error />;
  }
  return (
    <View style={styles.booksContainer}>
      <FlatList
        data={result["_j"]["data"]}
        renderItem={({ item }) => {
          return <SingleBook item={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        numColumns={2}
      />
      <FloatingPlusIcon />
    </View>
  );
};

export default Books;
