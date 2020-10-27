import React from "react";

function SavedBooks(props) {
    return (
        <div className="CBorder container mt-5 p-2">
            <div className="row">
                <div className="col-12">
                    <h3>Results</h3>
                    {props.savedBooks ? props.savedBooks.map(book => {
                        return (
                            <div className="indBook row ml-5 mt-3" key={book.id}>
                                <div className="col-3">
                                    <img alt={book.title} src={book.image}></img>
                                </div>
                                <div className="col-7">
                                    <h3>{book.title}</h3>
                                    <h4>{book.author}</h4>
                                    <p>
                                        {book.description}
                                    </p>
                                    <a rel="noreferrer noopener" target="_blank" href={book.link}>
                                        Link to Book
                                    </a>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-danger" id={book.id} onClick={props.handleDelete}>Delete</button>
                                </div>
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default SavedBooks;