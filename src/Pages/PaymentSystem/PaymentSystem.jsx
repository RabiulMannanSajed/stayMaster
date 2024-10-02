import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useUsers from "../../hook/useUsers";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import "./PaymentSystem.css";
import { useParams } from "react-router-dom";
import useHotels from "../../hook/useHotels";
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";
import Swal from "sweetalert2";
const PaymentSystem = () => {
  const { id } = useParams();
  const [hotels] = useHotels();
  const hotelsRoomPrice = hotels.find((hotelsId) => hotelsId?.id === id);
  //! this will the user info  and the card info and the price of the hotel
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userEmail = users.find((userE) => userE?.email === user?.email);

  const [selectedCard, setSelectedCard] = useState("");
  const selectCard = (cardName) => {
    setSelectedCard(cardName);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const paymentInfo = {
      cardNumber: data.cardNumber,
      cvc: data.cvc,
      cardName: selectedCard,
      payByName: userEmail?.username,
      payByEmail: userEmail?.email,
      payById: userEmail?.id,
      hotelId: hotelsRoomPrice?.id,
      hotelsName: hotelsRoomPrice?.hotelName,
      hotelRoomPrice: hotelsRoomPrice?.price,
    };
    console.log(paymentInfo);
    fetch("http://localhost/stayMaster/stay.php/api/payments", {
      method: "POST",
      headers: {
        "COntent-Type": "application/json",
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          reset();
          Swal.fire("Payment Successfully");
        } else {
          console.log("this is data up", data.insertedId);
        }
      });
  };

  return (
    <div className="max-w-[50%] m-auto ">
      {/* Card Selection */}
      <div className="flex justify-between ">
        <div className=" text-blue-400" onClick={() => selectCard("Visa")}>
          <FaCcVisa className="text-9xl" />
        </div>
        <div
          className=" text-blue-400"
          onClick={() => selectCard("Mastercard")}
        >
          <FaCcMastercard className="text-9xl" />
        </div>
        <div className=" text-blue-400" onClick={() => selectCard("PayPal")}>
          <FaCcPaypal className="text-9xl" />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Div: User Info */}
        <div className="flex justify-between ">
          <div className="flex-1 mr-5">
            <div className="mb-5 flex text-xl font-bold items-center">
              <TbCircleNumber1 />
              <p className="">Billing Info </p>
            </div>
            <label>User Name</label>
            <br />
            <div className="paymentInput">
              <input
                className="input-bgRemove"
                type="text"
                value={userEmail?.username}
                readOnly
                {...register("userName")}
              />
            </div>

            <label>Card Name</label>
            <br />
            <div className="paymentInput">
              <input
                type="text"
                className="input-bgRemove"
                value={selectedCard || "Select a card"}
                readOnly
                {...register("cardName")}
              />
            </div>

            <label>Country</label>
            <br />
            <select {...register("country", { required: true })}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
            {errors.country && <span>Country is required</span>}
          </div>

          {/* Second Div: Card Info */}
          <div className="flex-1">
            <div className="mb-5 flex text-xl font-bold items-center">
              <TbCircleNumber2 />
              <p>Credit Card Info</p>
            </div>
            <div>
              <label>Card Number</label>
              <br />
              <div className="paymentInput">
                <input
                  type="number"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="input-bgRemove"
                  {...register("cardNumber", { required: true })}
                />
                {errors.cardNumber && <span>Card number is required</span>}
              </div>
            </div>

            <div>
              <label>CVC</label>
              <br />
              <div className="paymentInput">
                <input
                  type="text"
                  name="cvc"
                  className="input-bgRemove"
                  placeholder="CVC Number"
                  {...register("cvc", {
                    required: true,
                    minLength: 3,
                    maxLength: 4,
                  })}
                />
                {errors.cvc && <span>CVC number is required</span>}
              </div>
              <label>Room Price</label>
              <br />
              <div className="paymentInput">
                <input
                  className="input-bgRemove"
                  type="text"
                  value={hotelsRoomPrice?.price + " $"}
                  readOnly
                  {...register("price")}
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentSystem;
