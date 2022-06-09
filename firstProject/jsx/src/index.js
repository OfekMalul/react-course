//import react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = function () {
  const buttonText = { text: "Click ME!" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "0.5rem",
          border: "none",
          borderRadius: "2rem",
          marginLeft: "0.5rem",
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react componenet and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
