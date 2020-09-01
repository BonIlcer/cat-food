import React, { useState } from "react";
import "./styles/Item.css";
import catImg from "./img/cat.jpg";

function Item({
  topText,
  flavorName,
  itemQty,
  giftQty,
  giftText,
  weight,
  bottomText,
}) {
  const colorGrey = "#999999";
  const colorSelectedHover = "#d91667";
  const [selection, setSelection] = useState(false);
  const [hoverMode, setHoverMode] = useState(false);

  const defaultBottomText = (
    <>
      <p>
        Чего сидишь? Порадуй котэ,{" "}
        <span
          style={{
            textDecoration: "none",
            borderBottom: "dashed",
            color: "#1698d9",
          }}
        >
          купи
        </span>
      </p>
    </>
  );

  function toggleSelection() {
    setSelection(!selection);
  }

  function leaveHover() {
    setHoverMode(true);
    console.log("onMouseLeave event");
  }

  function enterHover() {
    setHoverMode(false);
    console.log("onMouseLeave event");
  }

  function predicateClassname(className, selectName, hoverName) {
    const classes = [className];
    if (selection) classes.push(selectName);
    if (hoverMode) classes.push(hoverName);

    return classes.join(" ");
  }

  return (
    <div className="Item-Wrapper">
      <div
        className={predicateClassname("Item-Border", "Selected", "Hover")}
        onClick={toggleSelection}
        onMouseLeave={leaveHover}
        onMouseEnter={enterHover}
      >
        <div className="Item">
          <img src={catImg} alt="cat" />
          <p
            style={
              hoverMode && selection
                ? { color: colorSelectedHover }
                : { color: colorGrey }
            }
          >
            {hoverMode && selection ? "Котэ не одобряет?" : topText}
          </p>
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
          <div className={predicateClassname("circle", "CSelected", "CHover")}>
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
          width: "320px",
          height: "45px",
        }}
      >
        {selection ? bottomText : defaultBottomText}
      </div>
    </div>
  );
}

export default Item;
