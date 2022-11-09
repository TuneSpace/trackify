import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Results = () => {
  return (
    <div>
    <Container id="results-container">
       <div id='results-card'>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Track Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">Show In Spotify</Button>
                </Card.Body>
            </Card>
       </div>
       <div id="player">
        {/* insert spotify player here*/}
       </div>
    </Container>
    </div>
  )
}

export default Results