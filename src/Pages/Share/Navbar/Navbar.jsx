import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";
import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
      Swal.fire("SuccessfUlly logout");
    });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Add event listener if the modal is open
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <div className="bg-gray-500 flex justify-between p-5">
      <div className="flex-1">
        <NavLink to={"/"}>
          {" "}
          <p className="font-bold text-3xl flex-1">
            Stay <span className="text-[#2FC1FF]">Master</span>{" "}
          </p>
        </NavLink>
      </div>

      <div className="flex-1 text-white">
        <div className="flex justify-between text-xl font-bold">
          <div className="cursor-pointer">
            <NavLink to={"/"}>Hotels</NavLink>
          </div>
          <div className="cursor-pointer">
            <NavLink to={"/decors"}>Decor</NavLink>
          </div>
          <div className="cursor-pointer">Event Management</div>
          {user ? (
            <>
              {" "}
              <div onClick={openModal}>
                <FaUserCircle className="profileIcon cursor-pointer" />
              </div>{" "}
            </>
          ) : (
            <>
              <NavLink to="/signUp">
                <p>signUp</p>
              </NavLink>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="list-none profileModal bg-white border-sky-400	border-2"
        >
          <div className="bg-white divide-y-2 divide-blue-200">
            <NavLink to="/userProfile">
              <div className="flex items-center  mb-2 mt-2 text-xl">
                <FaRegUserCircle className="mr-2 " />
                <li onClick={closeModal}>Profile</li>
              </div>
            </NavLink>

            <div className="flex items-center mt-4 mb-4   text-xl">
              <FiLogOut className=" mr-2 " />
              <li onClick={closeModal}>
                <button onClick={handleLogOut}>Logout </button>
                {/* <button>Logout </button> */}
              </li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
