import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";



const Favorites = () => {
  const { userState } = useContext(UserContext); 

  const [tracksData, setTracksData] = useState([]);
  console.log('from favorites->',userState.username);

   useEffect(() => {
    fetch("http://localhost:8000/user/" + userState.id)
      .then((data) => data.json())
      .then((data) => { 
         console.log(data)
        return setTracksData(data)
       
      }, []);
  
  }, [userState.id])
  
 
  return (
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        
        perPage: 1,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: .5
          
        }
      }}
      extensions={{ AutoScroll }}
    >
   
        
          
        {tracksData.map(track => {
           return(
             <>
           <SplideSlide>
             
             <iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/album/${track.iplayerid}`} width="98%" height="98%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title={track.track_name}></iframe>
             </SplideSlide>
           
             </>
           )
        } )} 
    </Splide>
   
       
      
   
  );
}

//  <div><button href={track.track_url}>View In Spotify</button></div>

export default Favorites;
