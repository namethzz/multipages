import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { checkUsername } from "../../datas/username";
import "./Login.css";

function Login({ setToken }) {
  const userRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form.Label htmlFor="inputUsername">Username</Form.Label>
      <Form.Control
        type="text"
        id="Username"
        aria-describedby="passwordHelpBlock"
        placeholder="Enter username"
        ref={userRef}
      />
      <Form.Label htmlFor="inputPassword">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        aria-describedby="passwordHelpBlock"
        placeholder="Enter password"
        ref={passwordRef}
      />
      <button
        onClick={() => {
          const user = userRef.current.value.trim();
          const password = passwordRef.current.value.trim();
          const userInfo = checkUsername(user, password);

          console.log(userInfo);

          if (userInfo) {
            setToken(userInfo.token);
          } else {
            alert("Wrong username or password");
            userRef.current.value = "";
            passwordRef.current.value = "";
            userRef.current.focus();
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
