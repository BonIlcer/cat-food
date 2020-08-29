import React from "react";
import "./styles/App.css";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Item />
        <Item />
        <Item topText="keka " />
      </div>
    </div>
  );
}

export default App;
