import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return(
    <div>
      <h1>This is the homepage</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  )
}