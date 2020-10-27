import axios from "axios";

export default {
    googleBookSearch: function(input) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input)
    },

    getSavedBooks: function() {
        return axios.get("/api/books")
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}