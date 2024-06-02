import { Button, ScrollView, Text, View } from "react-native";
import Loading from "../../../components/common/Loading";
import FormField from "../../../components/common/FormField";
import styles from "../../../assets/styles";
import useCreateNewBook from "../../../hooks/view/useCreateNewBook";

const NewBook = () => {
  const { control, errors, handleSubmit, addBookDetails, loading } =
    useCreateNewBook();

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.createBookContainer}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Book Name</Text>
          </View>
          <FormField
            name="name"
            control={control}
            errors={errors}
            placeholder="Book Name"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Author</Text>
          </View>
          <FormField
            name="author"
            control={control}
            errors={errors}
            placeholder="Author"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Publisher</Text>
          </View>
          <FormField
            name="publishers"
            control={control}
            errors={errors}
            placeholder="Publisher"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Price</Text>
          </View>
          <FormField
            name="price"
            control={control}
            errors={errors}
            placeholder="Price"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Genre</Text>
          </View>
          <FormField
            name="genre"
            control={control}
            errors={errors}
            placeholder="Genre"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Language</Text>
          </View>
          <FormField
            name="language"
            control={control}
            errors={errors}
            placeholder="Language"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Number Of Pages</Text>
          </View>
          <FormField
            name="numberOfPages"
            control={control}
            errors={errors}
            placeholder="Number Of Pages"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>Completed</Text>
          </View>
          <FormField
            name="completed"
            control={control}
            errors={errors}
            type="boolean"
            placeholder={"Select Completed Or Not"}
          />
        </View>
      </ScrollView>
      <View style={[styles.buttonSpacing, styles.mt20]}>
        <Button
          disabled={loading}
          title="Create Book"
          onPress={handleSubmit(addBookDetails)}
        />
      </View>
    </View>
  );
};

export default NewBook;
