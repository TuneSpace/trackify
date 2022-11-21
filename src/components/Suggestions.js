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
              <Card.Title>Spotify Top 100</Card.Title>
              <Card.Text> 
              The 100 most streamed songs on Spotify ever, in correct order
              </Card.Text>
            </Card.Body>
          </Card>
          </CardGroup>
    </div>
  )
}

export default Suggestions