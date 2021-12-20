import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../Actions/AuthActions";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
export default function LoginPage(props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showErrorPass, setShowErrorPass] = useState(false);

  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (username === "") {
      setShowError(true);
      return false;
    }
    if (password === "") {
      setShowErrorPass(true);

      return false;
    }
    if (username !== "" && password !== "") {
      dispatch(login(username, password));
      navigate("/");
    }

    // dispatch(login(username,password))
    //   .then(() => {
    //     props.history.push("/");
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };
  return (
    <div className="mt-4">
      <div class="container1" id="container">
        <div class="form-container sign-in-container">
          <form onSubmit={onSubmit}>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={username}
              onChange={onChangeUsername}
            />
            {showError ? <a href="#">username required</a> : ""}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
            {showErrorPass ? <a href="#">Password required</a> : ""}
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
