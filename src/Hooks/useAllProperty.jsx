import { useQuery } from "@tanstack/react-query";
import publicAxios from "./PublicAxios";

const useAllProperty = () => {
  const { data: allProperty = [], refetch } = useQuery({
    queryKey: ["allProperty"],
    queryFn: async () => {
      const res = await publicAxios.get("/api/property");
      return res.data;
    },
  });

  return [allProperty, refetch];
};

export default useAllProperty;
