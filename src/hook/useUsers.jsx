import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    isPending,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost/stayMaster/stay.php/api/users");
      return res.json();
    },
  });
  return [users, refetch, isPending];
};
export default useUsers;
