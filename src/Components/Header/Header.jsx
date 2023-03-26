import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="lg:flex justify-between items-center lg:mx-14 my-2 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col md:flex-row gap-3 text-center font-semibold ">
        <a href="/order">Order</a>
        <a href="/order-review">Order review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
