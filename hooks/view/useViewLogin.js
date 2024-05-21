import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../utils/validators/login";
import { supabase } from "../../utils/helpers/supabase";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { addUser } from "../../store/slices/user";
import { useDispatch } from "react-redux";
import { useGetUserSessionDetails } from "../api/user/useUser";

const useViewLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isLoading, data, isError } = useGetUserSessionDetails();

  const signInWithEmail = async (data) => {
    setLoading(true);
    const response = await supabase.auth.signInWithPassword(data);
    setLoading(false);
    if (response.error) {
      return Alert.alert(response.error.message);
    }
    dispatch(
      addUser({
        accessToken: response.data.session.access_token ?? "",
        id: response.data.session.user.id ?? "",
        email: response.data.session.user.email ?? "",
      })
    );
    navigation.navigate("home");
  };

  const signUpWithEmail = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      data: {
        confirmation_sent_at: Date.now(),
      },
    });
    setLoading(false);
    if (error) {
      return Alert.alert(error.message);
    } else if (!error && !session) {
      return Alert.alert("Please check your inbox for email verification!");
    } else {
      Alert.alert("Account created. You can signin now");
    }
  };

  return {
    signInWithEmail,
    signUpWithEmail,
    loading,
    control,
    handleSubmit,
    errors,
    isLoading,
    data,
    isError,
  };
};

export default useViewLogin;
