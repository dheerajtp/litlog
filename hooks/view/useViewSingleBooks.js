import { useQuery, useQueryClient } from "@tanstack/react-query";
import bookServices from "../../services/bookServices";

const useViewSingleBook = () => {
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
  return { getBookDetails, getDetailsBasedOnType };
};

export default useViewSingleBook;
