import "bootswatch/dist/slate/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
      const fetchData =  () => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '68c7e04f58mshe2746e99037767bp117450jsn1e27e8b210f9',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };
        
        fetch('https://spotify23.p.rapidapi.com/search/?q=beyonce%20&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
          .then(response => response.json())
          .then(response => setTracks(response.tracks.items))
          .catch(err => console.error(err));
      } 
        
      fetchData();
        
  }, []);
  
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />}> {" "}
        </Route>
        <Route path="/Browse" element={<Browse tracks={tracks}/>}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
