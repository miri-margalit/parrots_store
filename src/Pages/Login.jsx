import React, { useState, useContext } from "react";
import MyContext  from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const {users, setUsers, setCurrentUser} = useContext(MyContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setMessage("Login successful!");
      setCurrentUser(user);
      localStorage.setItem("currentUser", "user");

      navigate("/home");
    } else {
      setMessage("Incorrect username or password.");
    }
  };

  const handleRegister = () => {
    if (users.find((u) => u.username === username)) {
      setMessage("Username already exists.");
    } else {
      setUsers([...users, { username, password }]);
      setMessage("Registration successful! You can now log in.");
      setIsRegistering(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto", padding: 20 }}>
      <h2>{isRegistering ? "Register" : "Login"}</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      {message && <div style={{ marginBottom: 10 }}>{message}</div>}

      {isRegistering ? (
        <button onClick={handleRegister} style={{ width: "100%", marginBottom: 10 }}>
          Register
        </button>
      ) : (
        <button onClick={handleLogin} style={{ width: "100%", marginBottom: 10 }}>
          Login
        </button>
      )}

      <button
        onClick={() => {
          setMessage("");
          setIsRegistering(!isRegistering);
        }}
        style={{ width: "100%" }}
      >
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default Login;
