import React, { useState } from "react";
import "./index.css";
import useVisualMode from "../../hooks/useVisualMode";
import Cards from "../Cards/";
import SingleCondition from "./SingleCondition";

export default function Conditions(props) {
  const ALL = "ALL";
  const SINGLE = "SINGLE";

  const [condition, setCondition] = useState({});

  const conditions = props.state.conditions;

  const { mode, transition, back } = useVisualMode(ALL);
  return (
    <div>
      {mode === ALL && (
        <Cards
          conditions={conditions}
          onChoose={() => transition(SINGLE)}
          setCondition={setCondition}
        />
      )}
      {mode === SINGLE && (
        <SingleCondition
          label={condition.label}
          image={condition.image || null}
          snippet={condition.snippet || null}
          synonyms={condition.synonyms || null}
          keywords={condition.keywords || null}
          onBack={back}
        />
      )}
    </div>
  );
}
