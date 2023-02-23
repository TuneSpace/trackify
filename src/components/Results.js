import React, { useContext } from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import { UserContext } from '../Context/UserContext'

 


const APIURL = 'http://localhost:8000'
const Results = ({tracks}) => {

  //destructre UserContext to extract the values we need
  const {userState} = useContext(UserContext); 
  console.log('this object made it to the results level',tracks);

   
  return (
    <div>
    <Container id="results-container">
    <CardGroup>
        {tracks.map(track => ( 
          
                <div id='results-card' style={{padding:"10px"}} key={track.data.id}>

                    <Card border="success" style={{ width: '14rem' }}>
                    
                    {/* this dynamically renders a heart so we can break it*/}
                    <svg stroke="currentColor"  fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="30" id="favicon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{padding: "5px"}}
                    //this onclick adds to favorites table and changes the color of the heart
                    onClick={(e) => { 
                                      console.log("sending the following data to the  favorites table->","user id:", userState.id, "track id:",track.data.id);
                                      
                                      //From Shelton -> adds reference data from the Spotify API to the database for use in the favorites table
                                      const options = {
                                        method: 'POST',
                                        headers:{ 'Content-Type': 'application/JSON'},
                                        body: JSON.stringify({
                                          user_id: userState.id,
                                          track_id: track.data.id,
                                          track_name: track.data.albumOfTrack.name,
                                          iPlayerId: track.data.albumOfTrack.id,
                                          imageUrl: track.data.albumOfTrack.coverArt.sources[0].url,
                                          spotify_url: `https://open.spotify.com/track/${track.data.albumOfTrack.id}`})
                                        } 

                                     //Fr:Shelton -> this fetch adds the trackid and userid to the favorites table
                                     fetch(`${APIURL}/user/tracks`, options)

                                     //Fr: the following changes the heart color to green when the POST is successful
                                     let heartPath = e.target.childNodes[0]
                                     heartPath.setAttribute("fill", "green")
                                      }}
                  
                    ><path fill="none" id="path" stroke="#000" strokeWidth="2" d="M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"
                    ></path></svg>

                    
                   {/*add Image, and Body (title, player, and spotify link) to card*/}
                    <Card.Img variant="top" src={track.data.albumOfTrack.coverArt.sources[0].url} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width:"65%" , height: "60%"}} />
                    <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>{track.data.name}</Card.Title>
                    <iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/album/${track.data.albumOfTrack.id}`} width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title={track.data.name}></iframe>
                    <a variant="success" style={{display:'inline-block'}} href={`https://open.spotify.com/track/${track.data.albumOfTrack.id}`}
                                                   onClick={(event) => {console.log('Navigating to Spotify', event, track.data.albumOfTrack.sharingInfo)}}
                                                    >Go to Spotify</a>
                   
                    </Card.Body>
                     </Card>
                 </div>
        ))} 
    </CardGroup>
    </Container>
    </div>
  )
}

export default Results