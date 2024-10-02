import { useQuery } from "@tanstack/react-query";

const useHotels = () => {
  const {
    isPending,
    data: hotels = [],
    refetch,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost/stayMaster/stay.php/api/hotels"
      );
      return res.json();
    },
  });
  return [hotels, refetch, isPending];
};

export default useHotels;
