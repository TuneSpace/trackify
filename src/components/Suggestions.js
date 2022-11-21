import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Suggestions = () => {

  // const [playlists, setPlaylists] = useState([{
  //   name: "Spotify Top 10",
  //   image: "../43189002.jpg",
  //   description: "The best of the best available. The best that's ever been. Yada yada ya"
  // }]);
  
  // const handleClick = () =>{
  
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '68c7e04f58mshe2746e99037767bp117450jsn1e27e8b210f9',
  //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //     }
  //   }
    
  //   fetch('https://spotify23.p.rapidapi.com/search/?q=top%2010&type=playlists&offset=0&limit=10&numberOfTopResults=5', options)
  //   .then(response => response.json())
  //   .then((response) => {
  //     setPlaylists(response)
  //     console.log(playlists)
  //     return playlists
  //   })
   
  // }
    
  
  return (
    <div>
         <CardGroup >
          <Card>
            <Card.Img variant="top" src="https://i.scdn.co/image/ab67706c0000bebb8b698cb13aae2eb29f346531" />
            <Card.Body>
              <Card.Title>Bilboard Top 100</Card.Title>
              <Card.Text> 
              Features this week's most popular songs across all genres, ranked by radio airplay monitored by Nielsen BDS, download sales tracked by Nielsen SoundScan and streaming activity data provided by leading online music services. 
              </Card.Text>
              <a variant="success" style={{display:'inline-block'}} href="https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ"     
                                                    >Go to Spotify</a>
            </Card.Body>
          </Card>
          </CardGroup>
    </div>
  )
}

export default Suggestions