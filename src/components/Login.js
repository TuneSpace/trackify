import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Browse from "../Pages/Browse";
import Register from "./Register";





const Login = (props) => {

  const {APIURL, userState, setUserState, setImageUrl} = useContext(UserContext);

 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  //const [username, setUsername] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData();
    console.log('the user input the following email ->',email)
  };


  const getUserData = () => {
      let loginObj = {
        email,
        pass
      }
      //Verify the password matches with the database, un hash first

        //fetch the user data from the database based of email input in textbox
        fetch(`http://localhost:8000/user/info`, {
          method: 'POST',
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(loginObj)
        })
        .then((res) => res.json())
        .then((userData) => {
          //set the userState to the result of that fetch
          if(typeof userData == 'string') {
            console.log(userData);
            alert('Password Incorrect, Please try again.');
          } else {
            setUserState(userData[0]);
            console.log('user logged in -->', userState);
            setImageUrl(userData[0].avatar);
          } 
        })

  }

  return (
    <div>
    <h1 style={{textAlign:'center'}}>Welcome to Trackify</h1>
    <h2 style={{textAlign:'center'}}>Please Log In</h2>
    <div className="auth-form-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <label >Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="your password"
          id="password"
        />
        
        <button type="submit" onClick={
          () => <Browse email={email}/>
        }>Log In</button>
       <Register className="REGFORM"/>
      
      </form>

     
    </div>
    </div>
    
  ) 
};

export default Login;
