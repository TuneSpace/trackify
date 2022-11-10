import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Results = ({tracks}) => {
    console.log({tracks})
  return (
    <div>
    <Container id="results-container">
        {tracks.map(track => ( 
                <div id='results-card'>
                    <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={track.data.albumOfTrack.coverArt.sources[0].url} />
                    <Card.Body>
                    <Card.Title>{track.data.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="success" onClick={`location.href=${track.data.albumOfTrack.sharingInfo.shareURL}`}>Show In Spotify</Button>
                    </Card.Body>
                     </Card>
                 </div>
            
        ))} 
       
       <div id="player">
        {/* insert spotify player here*/}
       </div>
    </Container>
    </div>
  )
}

export default Results