import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const AdminSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  //! Send the to the firebase and the database

  // * here role is admin of the user

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      UpdateUserProfile(data.name, data.email)
        .then(() => {
          const saveUser = {
            username: data.username,
            email: data.email,
            password: data.password,
            role: "admin",
            hotelName: data.hotelName || null,
          };
          //  this is foe send data to the database
          fetch("http://localhost/stayMaster/stay.php/api/users", {
            method: "POST",
            headers: {
              "COntent-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                navigate("/");
                reset();
                Swal.fire("User Created Successfully");
              } else {
                console.log("this is data up", data.insertedId);
              }
            });
        })
        //  this is for catch the error of user
        .catch((error) => console.log(error));
    });
  };
  return (
    <div>
      <p className="text-3xl font-bold text-center mb-9">StayMaster</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center  font-semibold text-[#2868bc]">
          This is for Admin Who want to open a new Hotel bns
        </p>
        <div className=" divOfSignUp rounded-t-xl">
          <label>First Name </label>
          <br />
          <input
            type="text"
            {...register("userName")}
            required={true}
            name="userName"
            placeholder="Enter Your UserName "
            className="input-bgRemove"
          />
        </div>
        <div className=" divOfSignUp ">
          <label>Hotel Name </label>
          <br />
          <input
            type="text"
            {...register("hotelName")}
            required={true}
            name="hotelName"
            placeholder="Enter Your UserName "
            className="input-bgRemove"
          />
        </div>

        <div className=" divOfSignUp">
          <label>Email</label>
          <br />
          <input
            {...register("email", {
              required: true,
              pattern: {
                message: "Entered value does not match email format",
              },
            })}
            name="email"
            placeholder="email"
            className="input-bgRemove"
            type="email"
          />
        </div>

        <div className="divOfSignUp rounded-b-xl">
          <label> Password</label>
          <br />
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            name="password"
            placeholder="Enter Your password"
            className="input-bgRemove"
          />
        </div>
        {/*  //TODO add the navLink to get the page take him to login page   */}
        <p className="text-center">
          Already have an{" "}
          <NavLink to={"/login"}>
            <span className="text-[#16498d] cursor-pointer font-bold">
              Account
            </span>{" "}
          </NavLink>
        </p>

        {/* this is submit btn */}
        <div className="form-control mt-6 mb-9 w-[50%] m-auto">
          <input className="signUpBtn" type="submit" value="Create Account" />
        </div>
      </form>
    </div>
  );
};

export default AdminSignUp;
