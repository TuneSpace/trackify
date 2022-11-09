import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import Results from '../components/Results'

const Browse = () => {
  return (
    <div>
        <Container fluid="md">
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
            Search
            </Button>
            <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            />
            </InputGroup>
        </Container>
        <Container>
            <Results />
        </Container>
    </div>
  )
}

export default Browse