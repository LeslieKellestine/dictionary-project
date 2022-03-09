import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import './Dictionary.css';


export default function Dictionary () {
    const [keyword, setKeyword] = useState ("");
    const [results, setResults] = useState (null);
    const [photos, setPhotos] = useState (null);
    
    function handleDictionaryResponse (response) {
        setResults (response.data[0]);
    }
    function handlePexalsResponse (response){
        setPhotos(response.data.photos);
    }
    function search (event) {
        event.preventDefault ();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexalsApiKey = `563492ad6f91700001000001c105ac0d7b3440a7a491d4608ccfef36`;
        let pexalsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {Authorization: `Bearer ${pexalsApiKey}`};
        axios.get(pexalsApiUrl, {headers: headers}).then(handlePexalsResponse);
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
             onChange={handleKeywordChange} />
        </form>
        <div className="hint">
            Suggested searches: code, tech, computer, app...
        </div>
        </section>
        <Results results={results}/>
        <Photos photos={photos} />
        </div>
    );
}