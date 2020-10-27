import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";

function Search() {

    const [userInput, setUserInput] = useState();
    const [bookResults, setBookResults] = useState();

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.googleBookSearch(userInput)
        .then(res => {
            let results = res.data.items.map(book => {
                let result = {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink
                }
                return result;
            })
            setBookResults(results);
        });
    }

    function handleSave(event) {
        event.preventDefault();
        let savedBook = bookResults.filter(book => book.id === event.target.id);
        savedBook = savedBook[0];
        API.saveBook(savedBook);
    }

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <SearchResults bookResults={bookResults} handleSave={handleSave}/>
        </div>
    )
};

export default Search;