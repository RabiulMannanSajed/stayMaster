import { useQuery } from "@tanstack/react-query";
import React from "react";

const useDecors = () => {
  const {
    isPending,
    data: decors = [],
    refetch,
  } = useQuery({
    queryKey: ["decors"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost/stayMaster/stay.php/api/decors"
      );
      return res.json();
    },
  });
  return [decors, refetch, isPending];
};

export default useDecors;
