import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import bookSchema from "../../utils/validators/book";

const useCreateNewBook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const addBookDetails = async (formData) => {
    console.log(formData);
  };

  return {
    control,
    handleSubmit,
    errors,
    addBookDetails,
  };
};

export default useCreateNewBook;
