import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
interface MenuProps {
  isOpen: boolean;
  closeMenuHandler: () => void;
}
const HeaderSideMenu = ({ isOpen, closeMenuHandler }: MenuProps) => {
  return (
    <div
      className={`header-side-menu bg-slate-100 h-[100vh] w-[20rem] z-10 absolute  top-0 right-0  ${
        isOpen === true ? "translate-x-0" : "translate-x-[100%]"
      }  ease-in-out duration-300`}
    >
      <div className="close-menu flex justify-end  p-4 text-3xl">
        <AiFillCloseCircle
          onClick={closeMenuHandler}
          className="cursor-pointer hover:text-purple-700  duration-300"
        />
      </div>
      <div className="menu-Links flex flex-col p-6 mt-10 gap-4 text-xl ">
        <Link to="/">Home</Link>
        <Link to={"/what-we-do"}>What We Do</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact-us"}>Contact</Link>
      </div>
    </div>
  );
};

export default HeaderSideMenu;
