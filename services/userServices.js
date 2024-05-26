import { supabase } from "../utils/helpers/supabase";

const getSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
      return {
        status: false,
      };
    }
    return { status: true, session: data.session };
  } catch (error) {
    console.log(error);
    return { status: false };
  }
};

const userServices = {
  getSession,
};

export default userServices;
