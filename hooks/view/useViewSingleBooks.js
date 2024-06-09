import { useQuery, useQueryClient } from "@tanstack/react-query";
import bookServices from "../../services/bookServices";
import { useState } from "react";
import { supabase } from "../../utils/helpers/supabase";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import quoteSchema from "../../utils/validators/quote";
import { yupResolver } from "@hookform/resolvers/yup";

const useViewSingleBook = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(quoteSchema),
  });

  const getBookDetails = (id) => {
    let result = useQuery({
      queryKey: ["get-user-books", id],
      queryFn: () => bookServices.getSingleBookDetails(id),
    });
    return result;
  };

  const getDetailsBasedOnType = (id, type) => {
    if (type == "quotes") {
      return useQuery({
        queryKey: ["get-quotes", id, type],
        queryFn: () => bookServices.getQuoteDetails(id),
      });
    }
  };

  const addContent = async (data, type) => {
    console.info({ data, type });
    setLoading(true);
    try {
      if (type === "quotes") {
        const { error } = await supabase.from("quotes").insert(data);
        if (error) {
          throw error;
        }
      }

      Alert.alert("Content added successfully.");
      queryClient.invalidateQueries(["get-quotes"]);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return {
    getBookDetails,
    getDetailsBasedOnType,
    addContent,
    loading,
    control,
    handleSubmit,
    errors,
  };
};

export default useViewSingleBook;
