import { useQuery } from "@tanstack/react-query";
import publicAxios from "./PublicAxios";
import UseAuth from "../Auth/UseAuth";

const useUser = () => {
  const { user, loading } = UseAuth();
  //   console.log("User email:", user?.email);

  const {
    data: getRole,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      try {
        const res = await publicAxios.get(`/api/signUp/${user?.email}`);
        return res.data;
      } catch (err) {
        console.error("Error fetching user role:", err);
        throw err;
      }
    },
  });

  return { getRole, error, isLoading, refetch };
};

export default useUser;
