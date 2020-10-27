import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";

function Saved() {

    const [savedBooks, setSavedBooks] = useState();

    function loadBooks() {
        if(!savedBooks) {
            API.getSavedBooks()
            .then(res => {
                let results = res.data.map(book => {
                    let result = {
                        id: book._id,
                        title: book.title,
                        author: book.authors,
                        description: book.description,
                        image: book.image,
                        link: book.link
                    }
                    return result;
                })
                setSavedBooks(results);
            });
        }
    }

    function handleDelete(event) {
        event.preventDefault();
        API.deleteBook(event.target.id)
        .catch(err => console.log(err))
    }

    loadBooks();

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <SavedBooks savedBooks={savedBooks} handleDelete={handleDelete}/>
        </div>
    )
};

export default Saved;