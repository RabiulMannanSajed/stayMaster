import { createBrowserRouter } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Main from "../../layout/Main";
import Home from "../Home/Home/Home";
import HotelInfo from "../Hotel/HotelInfo/HotelInfo";
import AdminSignUp from "../Share/AdminSignUp/AdminSignUp";
import Login from "../Share/Login/Login";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import UserData from "../Profile/UserProfile/UserData/UserData";
import Decors from "../Decors/Decors/Decors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hotelInfo/:id",
        element: <HotelInfo></HotelInfo>,
        loader: () => fetch("http://localhost/stayMaster/stay.php/api/hotels"),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/adminSigUp",
        element: <AdminSignUp></AdminSignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/paymentSystem/:id",
        element: <PaymentSystem></PaymentSystem>,
      },
      {
        path: "/userProfile",
        element: <UserData></UserData>,
      },
      {
        path: "/decors",
        element: <Decors></Decors>,
      },
    ],
  },
]);
