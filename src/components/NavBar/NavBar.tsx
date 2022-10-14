import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { NavLink, Link } from "react-router-dom";
import fblogo from "../../assets/icons8-facebook.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPeople, BsMessenger } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

import { TbGridDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import "./css.css";
import { ReactMdeProps } from "react-mde";
import NavItems from "./NavItems";

const NavBar: React.FC = () => {
  const color = {
    inputBg: "#3A3B3C",
    darkBg: "#242526",
  };

  const accountIcn = [
    {
      label: "menu",
      icon: <TbGridDots />,
    },
    {
      label: "messenger",
      icon: <BsMessenger />,
    },
    {
      label: "notification",
      icon: <IoIosNotifications />,
      badge: 20,
    },
    {
      label: "account",
      icon: <CgProfile />,
    },
  ];

  return (
    <div
      className={`nav flex w-full top-0 gap-3 bg-[${color.darkBg}] fixed p-[8px] px-4 h-14 items-center bg-base-100 px-2 border-b-[1px] w-full p-0 border-slate-600`}
    >
      <div className=" w-[25%]">
        <div className="logoInput flex-1 flex items-center relative mr-2">
          <AiOutlineSearch className="z-9 absolute left-14 text-xl top-[50%] -translate-y-[50%]" />
          <img src={fblogo} alt="" className="icon" />
          <input
            type="text"
            placeholder="Cari di Facebook"
            className={`pl-8 rounded-full w-[75%]  p-2 bg-color w-full bg-[#3A3B3C]`}
          />
        </div>
      </div>
      <ul className="flex-1 min-w-[50%] justify-center gap-5 w-full flex ">
        <NavItems />
      </ul>
      <div className="account flex-1  w-[25%]">
        <ul className="flex justify-end gap-[4px]">
          {accountIcn.map((item) => {
            return (
              <li className={`${item?.badge ? "indicator" : ""}`}>
                {item?.badge && (
                  <span
                    style={{ top: 10, padding: "2px" }}
                    className="indicator-item badge bg-red-500 border-none badge-secondary"
                  >
                    {item.badge + "+"}
                  </span>
                )}
                <button
                  style={{ padding: 1 }}
                  className="btn btn-circle group bg-white/10 hover:bg-white/20 text-2xl w-12  relative"
                >
                  {item.icon}
                  <span className="badge lowercase text-sm font-thin hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
                    {item.label.toLowerCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
