import { Button, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useViewSingleBook from "../../../hooks/view/useViewSingleBooks";
import Loading from "../../../components/common/Loading";
import styles from "../../../assets/styles";
import FormField from "../../../components/common/FormField";

const AddContent = () => {
  const params = useLocalSearchParams();
  const { addContent, loading, control, errors, handleSubmit } =
    useViewSingleBook();

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ flex: 1, margin: 16 }}>
      <View
        contentContainerStyle={[
          styles.createBookContainer,
          styles.verticalMargin,
        ]}
      >
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Quote</Text>
          </View>
          <FormField
            name="quote"
            control={control}
            errors={errors}
            placeholder="Quote"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Page Number</Text>
          </View>
          <FormField
            name="page"
            control={control}
            errors={errors}
            placeholder="Page Number"
          />
        </View>
      </View>
      <View style={[styles.buttonSpacing, styles.mt20]}>
        <Button
          disabled={loading}
          onPress={handleSubmit((data) =>
            addContent({ ...data, book_id: params.id }, params.type)
          )}
          title="Add"
        />
      </View>
    </View>
  );
};

export default AddContent;
