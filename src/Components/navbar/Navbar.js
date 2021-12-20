import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logout from "../../Actions/AuthActions";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            BET
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li class="nav-item">
                    <a class="nav-link" href="/feature">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/new">
                      New
                    </a>
                  </li>
                </>
              ) : (
                ""
              )}

              {isLoggedIn ? (
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <span onClick={logout}>Logout</span>
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
