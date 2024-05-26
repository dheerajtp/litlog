import { useQuery } from "@tanstack/react-query";
import userServices from "../../../services/userServices";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../../store/slices/user";

export const useGetUserSessionDetails = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["user-session"],
    queryFn: userServices.getSession,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (data && data.status) {
    if (data.session) {
      dispatch(
        addUser({
          accessToken: data.session.access_token ?? "",
          id: data.session.user.id ?? "",
          email: data.session.user.email ?? "",
        })
      );
    } else {
      dispatch(removeUser());
    }
  } else {
    dispatch(removeUser());
  }
  return { isLoading, isError, data };
};
