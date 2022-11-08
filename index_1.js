import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    // empty tag act acts like a parent
    <>
      <p>This is first JSX Element!</p>
      <p>This is another JSX Element</p>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
