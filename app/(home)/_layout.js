import { Redirect, Slot } from "expo-router";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const user = useSelector((state) => state.user);
  if (!user.value.user) {
    return <Redirect href="/login" />;
  }
  return <Slot />;
};

export default HomeLayout;
