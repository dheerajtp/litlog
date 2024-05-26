import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const HomeTabs = () => {
  const user = useSelector((state) => state.user.value);

  if (!user.user) {
    return <Redirect href="(auth)/(tabs)/login" />;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "BOOKS",
          tabBarIcon: ({ size, color }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: "DICTIONARY",
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeTabs;
