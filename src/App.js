import "bootswatch/dist/slate/bootstrap.min.css";
import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navigationbar from "./components/Navigationbar";
import { UserContext } from './Context/UserContext';
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";



function App(props) {
  // console.log('App.js Login does this ->',Login,"App.js props does this ->", Login["email"]);
const {userState, setUserState}= useContext(UserContext);
const UserState = userState.isLoggedIn
console.log(userState.isLoggedIn);

if(!UserState){
  return (
   
  <Login />)
}

  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Profile />}> {" "}
        </Route>
        <Route path="/Browse/*" element={<Browse tracks={props.tracks}/>}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
