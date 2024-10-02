import React from "react";
import useHotels from "../../../hook/useHotels";
import Hotel from "../Hotel/Hotel";

const Hotels = () => {
  const [hotels] = useHotels();
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="grid grid-cols-3 gap-6 mt-4">
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
