import React from "react";
import "./Button.css";
function Button() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button className="button" onClick={handleClick}>
      Click me
    </button>
  );
}

export default Button;
