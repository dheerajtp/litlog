import { Button } from "react-native";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/user";
import { router } from "expo-router";
import { supabase } from "../../../utils/helpers/supabase";
import ActivityGraph from "../../../components/Home/AcitivityGraph";
import styles from "../../../assets/styles";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.loadingContainer}>
      <ActivityGraph />
      {/* <Button
        title="Sign Out"
        onPress={async () => {
          let result = await supabase.auth.signOut();
          console.log(" === result inside sign out ");
          console.log(result);
          dispatch(removeUser());
          router.push("/(auth)/(tabs)/login");
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;
