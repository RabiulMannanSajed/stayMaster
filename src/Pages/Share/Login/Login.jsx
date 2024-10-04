import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [firebaseErrorMessage, setFirebaseErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); //* this is stop the reload the page
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //*  value send to the firebase
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        Swal.fire("Successfully Login");
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        setFirebaseErrorMessage(errorMessage);
      });
  };
  //   this isi login page
  return (
    <div className="p-10 flex items-end bg-white">
      <div className="flex-1 ">
        <p className="text-3xl font-bold text-center mb-9">StayMaster</p>
        <form onSubmit={handleLogin}>
          <div className="mt-[5%] divOfSignUp">
            <label htmlFor="">Email Address</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input-bgRemove"
            />
          </div>

          <div className="divOfSignUp mt-[2%] mb-[5%]">
            <label htmlFor=""> Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Your password"
              className="input-bgRemove"
            />
          </div>
          {/* <p className="text-red-500">{firebaseErrorMessage}</p> */}
          <button className="signUpBtn ">Login</button>
        </form>
        <p className="mt-4">
          Don't have an Account.
          <NavLink to="/signUp" className={"text-blue-500"}>
            Create an account
          </NavLink>
        </p>
      </div>
      <div className="flex-1">
        {/* <img className="w-[100%]" src={loginImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Login;
