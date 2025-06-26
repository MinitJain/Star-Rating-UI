import { useState } from "react";
import "./App.css";
import StarRating from "./StarRating/StarRating";

function App() {
  return (
    <>
      <StarRating starCount={5} />
    </>
  );
}

export default App;
