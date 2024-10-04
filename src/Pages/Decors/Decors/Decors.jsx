import React from "react";
import useDecors from "../../../hook/useDecors";

const Decors = () => {
  const [decors] = useDecors();
  console.log(decors);
  return (
    <div>
      <h2> Here is Our some company the provide the Decor services</h2>
      {decors.map((decor) => (
        <div key={decor}>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Decors;
