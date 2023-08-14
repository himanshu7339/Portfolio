import React, { Fragment, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import HeaderSideMenu from "./HeaderSideMenu";
const Header = () => {
  const [menuProperty, setMenuProperty] = useState({isOpen: false });
  
  const openMenuHandler = () => {
    setMenuProperty((prevState)=>({
      isOpen:true
    }));
    
  };
  const closeMenuHandler = () => {
    setMenuProperty((prevState)=>({
      isOpen:false
    }));
    
  };
  return (
    <Fragment>
      <div className="header bg-white text-black-50 flex justify-around items-center p-5 shadow-md  ">
        <h1 className="text-4xl font-semibold overflow-hidden">Grunt</h1>
        <div
          className="header-menu cursor-pointer flex items-center gap-2 text-xl font-light"
          onClick={openMenuHandler}
        >
          <MdOutlineMenu className="text-2xl" /> Menu
        </div>
      </div>
      <HeaderSideMenu isOpen={menuProperty.isOpen} closeMenuHandler={closeMenuHandler} />
    </Fragment>
  );
};

export default Header;
