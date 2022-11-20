import "bootswatch/dist/slate/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Register = (props) => {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState({
    email: "",
    passcode: "",
    username: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
    return input;
  };

  return (
    <>
    
      <button  onClick={handleShow}>
        Register Here
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="RegBody">
      
          <form className="registration-form" onSubmit={handleSubmit}>
       
            <input
              type="name"
              onChange={handleChange}
              id="name"
              value={input.username}
              name="username"
              placeholder="Create Username"
            /> Username
            <br />
        
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="youremail@gmail.com"
              value={input.email}
              className="Email"
            />Email
            <br />
 
            <input
              type="password"
              onChange={handleChange}
              placeholder="your password"
              id="password"
              value={input.passcode}
              name="passcode"
            />
            Password
         
         
         
          </form>
     
     
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>
            fetch("http://localhost:8000/user", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(input),
            }).then(console.log(input)).then(handleClose())
          }
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Register;
