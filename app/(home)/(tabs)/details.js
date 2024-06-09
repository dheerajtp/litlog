import { Text, View, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useViewSingleBook from "../../../hooks/view/useViewSingleBooks";
import Loading from "../../../components/common/Loading";
import Error from "../../../components/common/Error";
import Empty from "../../../components/common/Empty";
import styles from "../../../assets/styles";
import FloatingPlusIcon from "../../../components/Books/FloatingPlusIcon";
import QuoteDisplay from "../../../components/Books/QuoteDisplay";

const Details = () => {
  const params = useLocalSearchParams();
  const { getDetailsBasedOnType } = useViewSingleBook();
  const detailsResult = getDetailsBasedOnType(params.id, params.type);
  console.log(detailsResult.data);
  if (detailsResult.isLoading) {
    return <Loading />;
  } else if (detailsResult.isError) {
    return <Error />;
  } else if (detailsResult.data && detailsResult.data.length == 0) {
    return (
      <View style={styles.booksContainer}>
        <Empty />
        <FloatingPlusIcon
          route="(home)/(tabs)/add-content"
          type={params.type}
          id={params.id}
        />
      </View>
    );
  }
  return (
    <View style={styles.booksContainer}>
      <FlatList
        data={detailsResult.data}
        renderItem={({ item }) => (
          <QuoteDisplay quote={item.quote} page={item.page} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      <FloatingPlusIcon
        route="(home)/(tabs)/add-content"
        type={params.type}
        id={params.id}
      />
    </View>
  );
};

export default Details;
