import React from "react";
import {
  FcBusinessman,
  FcCollaboration,
  FcConferenceCall,
  FcShop,
  FcClapperboard,
  FcClock,
  FcBookmark,
  FcTemplate,
  FcCalendar,
  FcOvertime,
  FcRating,
} from "react-icons/fc";
import "./style.css";

const leftIcons = [
  {
    label: "User",
    icon: <FcBusinessman />,
  },
  {
    label: "Friend",
    icon: <FcCollaboration />,
  },
  {
    label: "Group",
    icon: <FcConferenceCall />,
  },
  {
    label: "Marketplace",
    icon: <FcShop />,
  },
  {
    label: "Watch",
    icon: <FcClapperboard />,
  },
  {
    label: "Kenangan",
    icon: <FcClock />,
  },
  {
    label: "Tersimpan",
    icon: <FcBookmark />,
  },
  {
    label: "Halaman",
    icon: <FcTemplate />,
  },
  {
    label: "Acara",
    icon: <FcCalendar />,
  },
  {
    label: "Terbaru",
    icon: <FcOvertime />,
  },
  {
    label: "Favorit",
    icon: <FcRating />,
  },
];

const Left = () => {
  return (
    <div className="sticky overflow-auto min-w-[21%]  ">
      <div className="wrapper">
        <ul>
          {leftIcons.map((item) => {
            return (
              <li>
                <button
                  style={{ width: "100%", padding: "4px 5px " }}
                  className="btn btn-ghost gap-2 capitalize justify-start flex "
                >
                  <div className="icon text-2xl">{item.icon}</div>
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <footer>
          <ul className="flex text-sm flex-wrap font-thin gap-3 ">
            <li>
              <a href="">link1</a>
            </li>
            <li>
              <a href="">link2</a>
            </li>
            <li>
              <a href="">link3</a>
            </li>
            <li>
              <a href="">link4</a>
            </li>
            <li>
              <a href="">link5</a>
            </li>
            <li>
              <a href="">link6</a>
            </li>
            <li>
              <a href="">link7</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Left;
