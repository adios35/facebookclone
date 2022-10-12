import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/pages/NavBar/NavBar";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
function App() {
  const [count, setCount] = useState("");

  return (
    <div className="App w-screen mx-auto bg-darkBg">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
