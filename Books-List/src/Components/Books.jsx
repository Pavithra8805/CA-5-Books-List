import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Books.css";

function BookList() {
    // State the array of books and search input
    const [booksArray, setBooksArray] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // Fetch books from the API
    useEffect(() => {
        async function getBooks() {
            try {
                const response = await axios.get(
                    " https://reactnd-books-api.udacity.com/books",
                    {
                        headers: { Authorization: "whatever-you-want" },
                    }
                );
                setBooksArray(response.data.books);
                console.log("data.books: ", response.data.books);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }
        getBooks();
    }, []);

    // Filter books based on search input
    const filteredBooks = booksArray.filter((book) => {
        if (!searchInput) {
            return true;
        }
        const title = book.title.toLowerCase();
        return title.startsWith(searchInput.toLowerCase());
    });

    // Handle search input change
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="book-list-container">
            <div className="header">
                <div className="logo-container">
                    <img src={"data:image/png;base64,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"} alt="Logo" />
                </div>
                <h2>Kalvium Books</h2>
                {/* Search bar */}
                <div className="search-bar-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                </div>


                {/* Registration button */}
                <Link to="/register">
                    <button className="register-button">Register</button>
                </Link>
            </div>

            {/* Display filtered books  */}
            <div className="book-list">
                {filteredBooks.length ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <div className="book-image">
                                <img
                                    className="book-thumbnail"
                                    src={book.imageLinks.thumbnail}
                                    alt={book.title}
                                />
                            </div>
                            <div className="book-details">
                                <p className="book-title">{book.title}</p>
                                <p className="book-authors">{book.authors.join(", ")}</p>
                                <p className="book-published">Published: {book.publishedDate}</p>
                                <p className="book-rating">
                                    Rating: ⭐ {book.averageRating || "-"} /5  Free
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Result Found</p>
                )}
            </div>
        </div>
    );
}

export default BookList;

