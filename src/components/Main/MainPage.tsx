import React from "react";
import Left from "./Left/Left";

const MainPage = () => {
  return (
    <div className="text-darkBg flex p-4 h-[90vh] mt-14  w-full">
      <Left />
      <div className="main  min-w-[50%] flex-1">main</div>
      <div className="right  min-w-[25%]  flex-1">right</div>
    </div>
  );
};

export default MainPage;
