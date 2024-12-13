import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./starStyle.css";
import { renderToReadableStream } from "react-dom/server";
// import './index.css';
// import App from './App';

function Test() {
  const [moverRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} />
      <p>This movie was rated {moverRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
