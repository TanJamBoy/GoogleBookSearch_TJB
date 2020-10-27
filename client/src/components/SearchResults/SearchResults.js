import React from "react";
import "./SearchResults.css"

function SearchResult(props) {
    return (
        <div className="CBorder container mt-5 p-2">
            <div className="row">
                <div className="col-12">
                    <h3>Results</h3>
                    {props.bookResults ? props.bookResults.map(book => {
                        return (
                            <div className="indBook row ml-5 mt-3" key={book.id}>
                                <div className="col-3" >
                                    <img alt={book.title} src={book.image}></img>
                                </div>
                                <div className="col-7" >
                                    <h3>{book.title}</h3>
                                    <h4>{book.authors}</h4>
                                    <p>
                                        {book.description}
                                    </p>
                                    <a rel="noreferrer noopener" target="_blank" href={book.link}>
                                        Link to Book
                                    </a>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary" id={book.id} onClick={props.handleSave}>Save</button>
                                </div>
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;