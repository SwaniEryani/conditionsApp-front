import React from "react";
import Button from "../Button";

export default function SingleCondition({
  label,
  image,
  snippet,
  synonyms,
  keywords,
  onBack,
}) {
  const noImage = "images/no-image.jpg";
  let synonymsList = [];
  if (synonyms) {
    synonymsList = synonyms.map((synonym) => {
      return <li>{synonym}</li>;
    });
  }
  let keywordsList = [];
  if (keywords) {
    keywordsList = keywords.map((keyword) => {
      return <li> {keyword}</li>;
    });
  }
  return (
    <div className="SingleCondition-container">
      <div className="SingleCondition-label"></div>
      <div className="SingleCondition-wrap">
        <div className="SingleCondition-row">
          <img
            className="SingleCondition-img"
            alt={label}
            src={image || noImage}
          />
          <div className="SingleCondition-body">
            <div className="SingleCondition-card-label">
              <h2>{label}</h2>
            </div>
            <hr />
            <div className="SingleCondition-snippet">{snippet}</div>
            <label>Synonyms</label>
            <div className="SingleCondition-synonyms">
              <ul>{synonymsList}</ul>
            </div>
            <label>Keywords</label>
            <div className="SingleCondition-keywords">
              <ul>{keywordsList}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="SingleCondition-btn">
        <Button onClick={onBack}>Back</Button>
      </div>
    </div>
  );
}
