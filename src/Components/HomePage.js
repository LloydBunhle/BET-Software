import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import More from './More'

export default function HomePage() {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div className="">
      {isLoggedIn ? <More/> : <div class="card mt-4 container1">
        <div class="card-header headerTitle">Welcome</div>
         <div class="card-body">
          <h5 class="card-title">Seems like you're not login yet!</h5>
          <p class="card-text">
            Click the button below to login and see more features
          </p>
          <button>
            <Link to="login">Go to login</Link>
          </button>
        </div>
      </div>}
      
    </div>
  );
}
