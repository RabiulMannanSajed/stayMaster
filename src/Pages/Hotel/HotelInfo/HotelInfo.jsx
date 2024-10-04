import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import useHotels from "../../../hook/useHotels";
import {
  FaDumbbell,
  FaParking,
  FaSwimmer,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { LiaBroomSolid } from "react-icons/lia";
import { IoLogoNoSmoking } from "react-icons/io";
import { GiCookingPot } from "react-icons/gi";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";

//  this is use the icon on the hotel facility
const facilityIcons = {
  "Free WiFi": <FaWifi />,
  "Swimming Pool": <FaSwimmer />,
  "Non-smoking rooms": <IoLogoNoSmoking />,
  "Room service": <LiaBroomSolid />,
  Gym: <FaDumbbell />,
  Restaurant: <FaUtensils />,
  Parking: <LuParkingCircle />,
  Buffet: <GiCookingPot />,
};

const HotelInfo = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers(); //* this is coming from database
  //* now find the current user
  //* find return the first match value fo the dataBase data
  const userEmail = users.find((userE) => userE?.email === user?.email);
  console.log("this is user info", userEmail);

  const { id } = useParams();
  const [hotels] = useHotels();
  console.log(hotels);
  const [hotelInfos, setHotelInfos] = useState([]);
  useEffect(() => {
    const hotel = hotels?.find((data) => data?.id == id);
    setHotelInfos(hotel);
  }, [hotels, id]);
  console.log(hotelInfos);
  return (
    <div className="max-w-[70%] m-auto">
      <p className="text-2xl font-bold">{hotelInfos?.hotelName}</p>
      <h2> here can be the location </h2>
      {Array.isArray(hotelInfos?.imgsOfRooms) && (
        <div className="mt-5  mb-5">
          <div className="grid grid-cols-3 ">
            {hotelInfos.imgsOfRooms.map((roomImg, index) => (
              <div key={index} className="mr-3">
                <img className="w-[300px] " src={roomImg} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
      <p className="text-xl">{hotelInfos?.details}</p>
      <p className="text-xl font-semibold mt-5 mb-5 text-[#2868bc]">
        Most popular facilities :
      </p>
      {Array.isArray(hotelInfos?.imgsOfRooms) && (
        <div className="flex ">
          {hotelInfos?.facilities.map((info, index) => (
            <div key={index} className="flex items-center mr-5 text-xl">
              <span className="mr-2 text-[#2868bc]">{facilityIcons[info]}</span>
              <p>{info}</p>
            </div>
          ))}
        </div>
      )}
      {/* //TODO : id user here then go to the payment or login */}
      {/* //TODO : this is ternary opa */}
      {/*  condition ? true : */}
      {user ? (
        <>
          <NavLink to={`/paymentSystem/${hotelInfos?.id}`}>
            <button className="ml-[86%] bg-[#2868bc] rounded-xl font-bold  p-5 text-white">
              CheckIn
            </button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/login"}>
            <button className="ml-[86%] bg-[#2868bc] rounded-xl font-bold  p-5 text-white">
              CheckIn
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HotelInfo;
