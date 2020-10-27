import React from "react";
import "./SearchBar.css"

function SearchBar(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <center>
                        <h3>Search Books</h3>
                        <input type="text" onChange={props.handleChange}></input>
                        <button className="ml-3 btn btn-primary" onClick={props.handleSubmit}>Search</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;