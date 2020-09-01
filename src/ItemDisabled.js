import React from "react";
import catImg from "./img/cat.jpg";
import "./styles/ItemDisabled.css";

function ItemDisabled({
  topText,
  flavorName,
  itemQty,
  giftQty,
  giftText,
  weight,
}) {
  const colorGrey = "#999999";

  return (
    <div className="Item-Wrapper">
      <div className="Item-Border BDisabled">
        <div className="Item Disabled">
          <img src={catImg} alt="cat" />
          <p style={{ color: colorGrey }}>{topText}</p>
          <p style={{ fontWeight: "1000", fontSize: "38pt" }}>Нямушка</p>
          <p style={{ fontWeight: "1000", fontSize: "18pt", marginTop: "0px" }}>
            {flavorName}
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "30px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>{itemQty} </span>
            порций
          </p>
          <p
            style={{
              color: colorGrey,
              fontSize: "12pt",
              marginTop: "0px",
            }}
          >
            <span style={{ fontWeight: "1000" }}>{giftQty} </span>
            {giftText}
          </p>
          <div className={"circle CDisabled"}>
            <p style={{ fontSize: "28pt" }}>{weight}</p>
            <p>кг</p>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "20px 0 20px 0",
          fontWeight: "500",
          fontSize: "12pt",
          color: "#e9e95c",
          width: "320px",
        }}
      >
        {"Печалька, " + flavorName + " закончился."}
      </div>
    </div>
  );
}

export default ItemDisabled;
