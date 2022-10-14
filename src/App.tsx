import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import Market from "./components/Market/Market";
import Friend from "./components/Friend/Friend";
import Watch from "./components/Watch/Watch";
import Group from "./components/Group/Group";

function App() {
  return (
    <div
      style={{ backgroundColor: "#18191A" }}
      className="App w-screen mx-auto  bg-darkBg"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="market" element={<Market />} />
        <Route path="watch" element={<Watch />} />
        <Route path="friend" element={<Friend />} />
        <Route path="group" element={<Group />} />
      </Routes>
    </div>
  );
}

export default App;
