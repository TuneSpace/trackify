
import React, { useRef, useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import BrowsePreview from '../components/BrowsePreview';
import Results from '../components/Results';


//const APIURL = 'http://localhost:8000'
//Create Structure for the Browse Page


const Browse = () => {
    
    const [tracks, setTracks] = useState([]);
    const searchInput = useRef(null);
    const handleSubmit = (event) => {
        //event.preventDefault();
        const searchValue = searchInput?.current?.value
        //console.log("The user entered the following:", searchInput)
        
            let fetchData =  (value) => {
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '68c7e04f58mshe2746e99037767bp117450jsn1e27e8b210f9',
                        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                    }
                };
                
                fetch(`https://spotify81.p.rapidapi.com/search?q=${value}%&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
                    .then(response => response.json())
                    .then(response => {
                        setTracks(response.tracks);
                        console.log('the following is returned from the API',response)
                    })
                    .catch(err => console.error(err));
            } 
            fetchData(searchValue);
    }

    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
          console.log('Submitted Search with Enter key')
        }
      }
    
  return (
    <div>
        <Container fluid="md">
        <InputGroup className="mb-3" >
            <Button variant="outline-secondary" id="button-addon1" onClick={handleSubmit} >Search</Button>
            <Form.Control
            placeholder="Enter a Artist or Track Name"
            type="text"
            onKeyDown={handleKeyDown}
            name="searchValue"
            ref={searchInput}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
        </Container>
        <Container id='results-container'>
          <Results tracks={tracks} /> 
        </Container>
        <Container id='preview-container'>
            <BrowsePreview />
        </Container>
    </div>
  )
}

export default Browse