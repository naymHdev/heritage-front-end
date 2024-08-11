import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProperty = () => {
  const { data: isProperty = [] } = useQuery({
    queryKey: ["isProperty"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/naymHdev/Nest-Nestle-CC/main/src/Json/Property.json"
      );
      return res.data;
    },
  });

  return [isProperty];
};

export default useProperty;
