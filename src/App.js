import "bootswatch/dist/slate/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  
  
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />}> {" "}
        </Route>
        <Route path="/Browse" element={<Browse />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
