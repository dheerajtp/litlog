import { supabase } from "../utils/helpers/supabase";

const getBooks = async (user_id) => {
  try {
    let { data, error } = await supabase
      .from("books")
      .select("*")
      .eq("user_id", user_id);
    if (error) {
      console.log(error, "error after getting result");
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error, "error in catch");
    return error;
  }
};

const getSingleBookDetails = async (id) => {
  try {
    let { data, error } = await supabase.from("books").select("*").eq("id", id);
    if (error) {
      console.log(error, "error after getting result");
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getQuoteDetails = async (id) => {
  try {
    let { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("book_id", id);
    if (error) {
      console.log(error, "error after getting result");
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const bookServices = {
  getBooks,
  getSingleBookDetails,
  getQuoteDetails,
};

export default bookServices;
