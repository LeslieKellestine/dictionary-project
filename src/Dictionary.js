import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js"
import './Dictionary.css';


export default function Dictionary () {
    const [keyword, setKeyword] = useState ("");
    const [results, setResults] = useState (null)
    
    function handleResponse (response) {
        setResults (response.data[0]);
    }

    function search (event) {
        event.preventDefault ();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange (event) {
        setKeyword(event.target.value)
    }
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
            <input 
            type="search"
             autoFocus= {true}
             onChange={handleKeywordChange}
             defaultvalue ={"Type your word"} />
        </form>
        <div className="hint">
            Suggested searches: code, women, tech, cat...
        </div>
        </section>
        <Results results={results}/>
        </div>
    );
}