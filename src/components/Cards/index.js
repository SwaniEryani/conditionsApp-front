import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards(props) {
  const conditionList = props.conditions.map((condition) => {
    let snippetFixedLength = null;
    if (condition.snippet) {
      const snippetFixedLengthArray = condition.snippet.split(" ");
      const sliceTenWords = snippetFixedLengthArray.slice(0, 10);
      snippetFixedLength = sliceTenWords.join(" ") + "..";
    }
    return (
      <CardItem
        key={condition.label}
        label={condition.label}
        image={condition.image}
        text={snippetFixedLength}
        onChoose={props.onChoose}
        setCondition={() => props.setCondition(condition)}
      />
    );
  });
  return (
    <div className="cards-container">
      <div className="cards-heading">
        <h2>Conditions</h2>
      </div>
      <div className="cards-row">{conditionList}</div>
    </div>
  );
}
