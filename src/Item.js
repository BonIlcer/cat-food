import React, { useState } from "react";
import "./styles/Item.css";
import catImg from "./img/cat.jpg";

const colorGrey = "rgb(159, 159, 159)";

function Item({
  topText,
  flavorName,
  itemQty,
  giftQty,
  giftText,
  weight,
  bottomText,
}) {
  const [isActive, setState] = useState(false);

  function toggleItem() {
    setState(!isActive);
  }

  return (
    <div className="Item-Wrapper">
      <div
        className={isActive ? "Item-Border Activated" : "Item-Border"}
        onClick={toggleItem}
      >
        <div className="Item">
          <img src={catImg} alt="cat" />
          <p style={{ color: colorGrey, fontSize: "12pt" }}>
            {topText}Сказочное заморское яство
          </p>
          <p style={{ fontWeight: "1000", fontSize: "38pt" }}>Нямушка</p>
          <p style={{ fontWeight: "1000", fontSize: "18pt", marginTop: "0px" }}>
            {flavorName}с фуа гра
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "30px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>{itemQty}10 </span>
            порций
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "0px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>{giftQty}2 </span>
            {giftText}мыши в подарок
          </p>
          <div className={isActive ? "circle CActivated" : "circle"}>
            <p style={{ fontSize: "28pt" }}>{weight}0,5 </p>
            <p>кг</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px", fontWeight: "600" }}>
        Чего сидишь? Порадуй котэ,{" "}
        <a href="#" style={{ textDecoration: "none", borderBottom: "dashed" }}>
          купи
        </a>
        {bottomText}
      </div>
    </div>
  );
}

export default Item;
