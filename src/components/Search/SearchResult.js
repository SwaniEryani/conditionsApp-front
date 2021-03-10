import React from "react";
import Conditions from "../Conditions";

export default function SearchResult({ name, state }) {
  // const conditions = state.conditions;
  let result = {};
  result["conditions"] = state.conditions.filter(({ label }) => label === name);
  if (result.conditions) {
    return <Conditions state={result} />;
  }
  return (
    <>
      <h2>No Result</h2>
    </>
  );
}
