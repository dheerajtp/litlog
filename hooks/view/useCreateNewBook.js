import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import bookSchema from "../../utils/validators/book";
import { supabase } from "../../utils/helpers/supabase";
import { useSelector } from "react-redux";

const useCreateNewBook = () => {
  const user = useSelector((state) => state.user.value);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const addBookDetails = async (formData) => {
    setLoading(true);
    try {
      let { data: alreadyExistOrNot, error: alreadyExistOrNotError } =
        await supabase
          .from("books")
          .select("*")
          .eq("name", formData.name)
          .eq("user_id", user.user.id);

      if (alreadyExistOrNot && alreadyExistOrNot.length > 0) {
        return Alert.alert("Book already created");
      }

      if (alreadyExistOrNotError) {
        throw error;
      }

      const { error } = await supabase
        .from("books")
        .insert({ ...formData, user_id: user.user.id });

      if (error) {
        throw error;
      }
      Alert.alert("Book added successfully.");
      reset();
    } catch (error) {
      console.log(error);
      Alert.alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    addBookDetails,
    loading,
  };
};

export default useCreateNewBook;
