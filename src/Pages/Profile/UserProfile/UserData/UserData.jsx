import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useUsers from "../../../../hook/useUsers";
import usePayment from "../../../../hook/usePayment";

const UserData = () => {
  const [payments] = usePayment();
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userEmail = users.find((userE) => userE?.email === user?.email);
  console.log(userEmail);
  //    here find
  const userPaymentHistory = payments.filter(
    (userE) => userE?.payByEmail === user?.email
  );
  console.log(userPaymentHistory);
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-2xl font-semibold uppercase text-center m-5">
        {userEmail?.username}{" "}
      </h1>

      <table className="w-[100%]">
        <tr>
          <th>Service Type</th>
          <th>Hotel Name</th>
          <th> card Number</th>
          <th>Card Name</th>
          <th>Amount</th>
        </tr>
        {userPaymentHistory.map((paymentHistory) => (
          <tr className="text-center ">
            <td className="p-3">Hotel</td>
            <td className="p-3">{paymentHistory?.hotelsName}</td>
            <td className="p-3">{paymentHistory?.cardNumber}</td>
            <td className="p-3">{paymentHistory?.cardName}</td>
            <td className="p-3">{paymentHistory?.hotelRoomPrice} $</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserData;
