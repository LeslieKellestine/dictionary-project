import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary () {
    const [keyword, setKeyword] = useState ("");
    
    function search (event) {
        event.preventDefault ();
        alert (`Searching for ${keyword}`);
    }
    function handleKeywordChange (event) {
        setKeyword(event.target.value)
    }
    return (
        <form onSubmit={search}>
            <input 
            type="search"
             autoFocus= {true}
             onChange={handleKeywordChange}/>
        </form>
    );
}