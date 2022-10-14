import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdOndemandVideo, MdGroups } from "react-icons/md";
import { BiStoreAlt } from "react-icons/bi";
import "./css.css";
function NavItems() {
  const navItems = [
    {
      label: "home",
      icon: <AiFillHome />,
      link: "/",
      exact: true,
    },
    {
      label: "friend",
      icon: <BsPeople />,
      link: "friend",
    },
    {
      label: "watch",
      icon: <MdOndemandVideo />,
      link: "watch",
    },
    {
      label: "market",
      icon: <BiStoreAlt />,
      link: "market",
    },
    {
      label: "group",
      icon: <MdGroups />,
      link: "group",
    },
  ];

  return (
    <>
      <li className="nav-items  group relative text-gray-400 ">
        <NavLink to={"/"} end>
          <button
            style={{ padding: "0 35px" }}
            className="btn btn-ghost text-3xl "
          >
            <AiFillHome />
          </button>
          <span className="badge  hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
            home
          </span>
        </NavLink>
      </li>
      <li className="nav-items group relative  text-gray-400 ">
        <NavLink to={"/friend"}>
          <button
            style={{ padding: "0 35px" }}
            className="btn btn-ghost -scale-x-100 text-3xl "
          >
            <BsPeople />
          </button>
          <span className="badge hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
            teman
          </span>
        </NavLink>
      </li>
      <li className="nav-items group relative text-gray-400 ">
        <NavLink to={"watch"}>
          <button
            style={{ padding: "0 35px" }}
            className="btn btn-ghost text-3xl "
          >
            <MdOndemandVideo />{" "}
          </button>
          <span className="badge  hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
            watch
          </span>
        </NavLink>
      </li>
      <li className="nav-items group relative text-gray-400 ">
        <NavLink to={"market"}>
          <button
            style={{ padding: "0 35px" }}
            className="btn btn-ghost text-3xl "
          >
            <BiStoreAlt />
          </button>
          <span className="badge  hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
            marketplace
          </span>
        </NavLink>
      </li>
      <li className="nav-items group relative text-gray-400 ">
        <NavLink to={"group"}>
          <button
            style={{ padding: "0 35px" }}
            className="btn btn-ghost text-3xl "
          >
            <MdGroups />
          </button>
          <span className="badge  hidden group-hover:flex absolute text-gray-600 p-4 bg-gray-300 -bottom-10 left-[50%] -translate-x-[50%]">
            group
          </span>
        </NavLink>
      </li>
    </>
  );
}

export default NavItems;
