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

const bookServices = {
  getBooks,
};

export default bookServices;
