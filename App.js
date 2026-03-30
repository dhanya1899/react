import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Hello React</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    <h1 id="heading">Namste react</h1>
  </div>
);

console.log(Heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
