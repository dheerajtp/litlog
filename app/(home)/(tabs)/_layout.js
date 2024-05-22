import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const HomeTabs = () => {
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
