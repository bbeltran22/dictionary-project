import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
      <Synonyms synonyms={props.meaning.definitions.synonyms} />
    </div>
  );
}
