import { useState } from "react";
import Browse from "../Pages/Browse";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  //const [username, setUsername] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('the user input the following email ->',email)
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
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
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register Here
      </button>
     
      </div>
    
  );
};

export default Login;
