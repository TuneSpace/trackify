import { useState } from "react";

const Register = (props) => {
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
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="name"
          onChange={handleChange}
          id="name"
          value={input.username}
          name="username"
          placeholder="Create Username"
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
          value={input.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleChange}
          placeholder="your password"
          id="password"
          value={input.passcode}
          name="passcode"
        />
        <button
          type="submit"
          onClick={() =>
            fetch("http://localhost:8000/user", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(input),
            }).then(console.log(input))
          }
        >
          Log In
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already Have an Account? Login Here
      </button>
    </div>
  );
};

export default Register;
