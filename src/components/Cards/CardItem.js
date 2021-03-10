import React from "react";

export default function CardItem(props) {
  const noImage = "images/no-image.jpg";
  const clickHandker = () => {
    props.setCondition();
    props.onChoose();
  };
  return (
    <>
      <div className="card">
        <img
          className="card-item-img"
          alt={props.label}
          src={props.image || noImage}
        />
        <h3>{props.label}</h3>
        <div className="card-item-text">
          {props.text}
          <span className="find_more" onClick={clickHandker}>
            {" "}
            find out more
          </span>{" "}
        </div>
      </div>
    </>
  );
}
