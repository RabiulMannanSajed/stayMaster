import { useQuery } from "@tanstack/react-query";
import React from "react";

const usePayment = () => {
  const {
    isPending,
    data: payments = [],
    refetch,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost/stayMaster/stay.php/api/payments"
      );
      return res.json();
    },
  });
  return [payments, refetch, isPending];
};

export default usePayment;
