import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllProperty = () => {
  const { data: allProperty = [] } = useQuery({
    queryKey: ["allProperty"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/naymHdev/Nest-Nestle-CC/main/src/Json/SearchProperty.json"
      );
      return res.data;
    },
  });

  return [allProperty];
};

export default useAllProperty;
