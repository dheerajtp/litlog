import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../utils/validators/login";
import { supabase } from "../../utils/helpers/supabase";
import { useState } from "react";
import { useRouter } from "expo-router";
import { addUser } from "../../store/slices/user";
import { useDispatch } from "react-redux";
import { useGetUserSessionDetails } from "../api/user/useUser";

const useViewLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isLoading, data, isError } = useGetUserSessionDetails();

  const signInWithEmail = async (formData) => {
    setLoading(true);
    try {
      const response = await supabase.auth.signInWithPassword(formData);
      if (response.error) {
        Alert.alert(response.error.message);
      } else {
        dispatch(
          addUser({
            accessToken: response.data.session.access_token ?? "",
            id: response.data.session.user.id ?? "",
            email: response.data.session.user.email ?? "",
          })
        );
        router.push("/(home)/(tabs)");
      }
    } catch (error) {
      console.error("Login error: ", error);
      Alert.alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (formData) => {
    setLoading(true);
    try {
      const { email, password } = formData;
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
      if (error) {
        Alert.alert(error.message);
      } else if (!session) {
        Alert.alert("Please check your inbox for email verification!");
      } else {
        Alert.alert("Account created. You can sign in now.");
      }
    } catch (error) {
      console.error("Sign up error: ", error);
      Alert.alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
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
