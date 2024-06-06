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
  const handleQuotesPress = () => {
    // Navigate to quotes page
  };

  const handleReadActivityPress = () => {
    // Navigate to read activity page
  };
  return { getBookDetails, handleQuotesPress, handleReadActivityPress };
};

export default useViewSingleBook;
