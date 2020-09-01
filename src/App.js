import React from "react";
import "./styles/App.css";
import Item from "./Item";
import data from "./data";
import ItemDisabled from "./ItemDisabled";

function App() {
  const items = data.map((item, index) =>
    item.status ? (
      <Item
        key={index}
        topText={item.topText}
        flavorName={item.flavorName}
        itemQty={item.itemQty}
        giftQty={item.giftQty}
        giftText={item.giftText}
        weight={item.weight}
        bottomText={item.bottomText}
      />
    ) : (
      <ItemDisabled
        key={index}
        topText={item.topText}
        flavorName={item.flavorName}
        itemQty={item.itemQty}
        giftQty={item.giftQty}
        giftText={item.giftText}
        weight={item.weight}
      />
    )
  );
  data.map((item) => console.log(item.status));
  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items}
      </div>
    </div>
  );
}

export default App;
