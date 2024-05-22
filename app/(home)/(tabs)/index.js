import { Button } from "react-native";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/user";
import { router } from "expo-router";
import { supabase } from "../../../utils/helpers/supabase";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="Sign up"
        onPress={async () => {
          await supabase.auth.signOut();
          dispatch(removeUser());
          router.replace("(auth)/(tabs)/login");
        }}
      />
    </View>
  );
};

export default HomeScreen;
