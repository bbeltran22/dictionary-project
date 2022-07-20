import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word"
            onChange={handleKeywordChange}
          />
        </form>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
