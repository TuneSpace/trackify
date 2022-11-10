import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'

const Results = ({tracks}) => {

   console.log("Our tracks array for your reference", {tracks})
   
  return (
    <div>
    <Container id="results-container">
    <CardGroup>
        {tracks.map(track => ( 
                <div id='results-card' style={{padding:"10px"}} key={track.data.id}>
                    <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={track.data.albumOfTrack.coverArt.sources[0].url} />
                    <Card.Body>
                    <Card.Title>{track.data.name}</Card.Title>
                    <iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/album/${track.data.albumOfTrack.id}`} width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title={track.data.name}></iframe>
                    <a variant="success" href={track.data.albumOfTrack.sharingInfo.shareUrl} 
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