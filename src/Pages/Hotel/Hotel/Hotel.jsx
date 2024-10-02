import React from "react";
import { NavLink } from "react-router-dom";

const Hotel = ({ hotel }) => {
  const { id, hotelName, rating, price, details, img, facilities } = hotel;
  return (
    <div className="border-2 p-5 rounded">
      <div className="">
        <img className=" rounded-xl w-full h-[20%]" src={img} alt="" />

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="font-bold text-xl text-[#006ce4]">{hotelName}</p>
            <p>{rating}</p>
          </div>
          <p>{details}</p>
          <div className="mt-4 flex justify-between">
            <p>{price}$</p>
            <NavLink to={`/hotelInfo/${id}`}>
              <button className="bg-[#006ce4] pt-2 pb-2 pl-4 pr-4 text-white font-semibold rounded">
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
