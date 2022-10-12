import React from "react";
import { NavLink, Link } from "react-router-dom";
import fblogo from "../../../assets/icons8-facebook.svg";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdGroups, MdOndemandVideo } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";

import { TbGridDots } from "react-icons/tb";

import "./style.css";

const NavBar: React.FC = () => {
  const color = {
    inputBg: "#3A3B3C",
    darkBg: "#242526",
  };
  const navItems = [
    {
      label: "home",
      icon: <AiFillHome />,
      link: "/",
    },
    {
      label: "friend",
      icon: <BsPeople />,
      link: "/",
    },
    {
      label: "watch",
      icon: <MdOndemandVideo />,
      link: "/",
    },
    {
      label: "market",
      icon: <BiStoreAlt />,
      link: "/",
    },
    {
      label: "group",
      icon: <MdGroups />,
      link: "/",
    },
  ];

  const accountIcn = [
    {
      label: "menu",
      icon: <TbGridDots />,
    },
    {
      label: "messenger",
      icon: <TbGridDots />,
    },
    {
      label: "notification",
      icon: <TbGridDots />,
      badge: 20,
    },
    {
      label: "account",
      icon: <TbGridDots />,
    },
  ];
  return (
    <div
      className={`nav flex w-full  bg-[${color.darkBg}] fixed p-[8px] h-14 items-center bg-base-100 px-2 border-b-[1px] w-full p-0 border-slate-600`}
    >
      <div className="logoInput flex-1 max-w-xs flex items-center relative mr-2">
        <AiOutlineSearch className="z-9 absolute left-14 text-xl top-[50%] -translate-y-[50%]" />
        <img src={fblogo} alt="" />
        <input
          type="text"
          placeholder="Cari di Facebook"
          className={`pl-10 rounded-full  p-2 bg-color w-full bg-[#3A3B3C]`}
        />
      </div>
      <ul className="flex-1 flex  justify-center w-full flex space-x-2 ">
        {navItems.map((item, i) => {
          return (
            <li key={i} className="nav-items group relative text-gray-400 ">
              <Link to={item.link}>
                <button
                  style={{ padding: "0 35px" }}
                  className="btn btn-ghost text-3xl -scale-x-100"
                >
                  {item.icon}
                </button>
                <span className="badge  hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="account flex-1 ">
        <ul className="flex justify-end">
          {accountIcn.map((item) => {
            return (
              <li className={`${item?.badge ? "indicator" : ""}`}>
                <button className="btn btn-circle group bg-white/10 hover:bg-white/20 text-2xl relative">
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
