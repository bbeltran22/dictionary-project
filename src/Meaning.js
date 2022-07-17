import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions[0].definition}
        <div>
          <em>{props.meaning.definitions[0].example}</em>
        </div>
      </p>
    </div>
  );
}
