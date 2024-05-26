import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const AuthTabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="registration"
        options={{
          title: "Registration",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user-plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AuthTabLayout;
