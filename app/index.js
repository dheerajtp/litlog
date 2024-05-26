import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  if (!user.value.user) {
    return <Redirect href="(auth)/(tabs)/login" />;
  }
  return <Redirect href="(home)/(tabs)" />;
};

export default App;
