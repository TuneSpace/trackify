
import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import Results from '../components/Results';
import { UserContext } from '../Context/UserContext';


const APIURL = 'http://localhost:8000'
//Create Structure for the Browse Page


const Browse = () => {
    //destructure the stateObject to access the individual values we want to use in this file
    const {setUser, user} = useContext(UserContext);
    console.log('this should be info->',user, setUser);


    const [tracks, setTracks] = useState([]);
    const searchInput = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = searchInput?.current?.value
        //console.log("The user entered the following:", searchInput)
        
            let fetchData =  (value) => {
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '68c7e04f58mshe2746e99037767bp117450jsn1e27e8b210f9',
                        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                    }
                };        
                fetch(`https://spotify23.p.rapidapi.com/search/?q=${value}%20&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
                .then(response => response.json())
                .then(response => setTracks(response.tracks.items))
                .catch(err => console.error(err));
            } 
            fetchData(searchValue);
    }

    
    function getUserInfo() {
        //set the options field to grab the username from the login input field
        const options = {
            method: 'GET',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(
                {
                //    username: username
                }
            )
        }

        fetch(`${APIURL}/user/info`)
        .then(response => response.json())
        .then(response => console.log(response))
    }

    return (
    <div>
        <Container fluid="md">
        <InputGroup className="mb-3" >
            <Button variant="outline-secondary" id="button-addon1" onClick={handleSubmit} >Search</Button>
            <Form.Control
            placeholder="Enter a Artist or Track Name"
            type="text"
            
            name="searchValue"
            ref={searchInput}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            />
      </InputGroup>
        </Container>
        <Container>
            <Results tracks={tracks} />
        </Container>
    </div>
  )
}

export default Browse