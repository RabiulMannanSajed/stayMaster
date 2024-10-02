import React from "react";
import Banner from "../Banner/Banner";
import Hotels from "../../Hotel/Hotels/Hotels";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Hotels></Hotels>
    </div>
  );
};

export default Home;
