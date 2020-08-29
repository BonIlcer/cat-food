import React from "react";
import "./styles/Item.css";
import catImg from "./img/cat.jpg";

const colorGrey = "rgb(159, 159, 159)";

function Item() {
  return (
    <div className="Item-Wrapper">
      <div className="Item-Border">
        <div className="Item">
          <img src={catImg} alt="cat" />
          <p style={{ color: colorGrey, fontSize: "12pt" }}>
            Сказочное заморское яство
          </p>
          <p style={{ fontWeight: "1000", fontSize: "38pt" }}>Нямушка</p>
          <p style={{ fontWeight: "1000", fontSize: "18pt", marginTop: "0px" }}>
            с фуа гра
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "30px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>10 </span> порций
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "0px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>2 </span>мыши в подарок
          </p>
          <div className="circle">
            <p style={{ fontSize: "28pt" }}>0,5 </p>
            <p>кг</p>
          </div>
        </div>
      </div>
      <p>Some useless text info</p>
    </div>
  );
}

export default Item;
