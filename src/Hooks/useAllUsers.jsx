import { useQuery } from "@tanstack/react-query";
import publicAxios from "./PublicAxios";

const useAllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await publicAxios.get("/api/allUser");
      return res.data;
    },
  });

  return [allUsers, refetch];
};

export default useAllUsers;
