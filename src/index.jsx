import React, { useState } from "react";
import { Search, Book, X } from "lucide-react";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("title");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const fetchBooks = async (page, isNewSearch = false) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          searchQuery,
          searchCategory,
          page: page.toString()
        }),
      });
      const data = await response.json();
      setBooks(data.books || []);
      if (isNewSearch) {
        setTotalItems(data.totalItems || 0);
      }
    } catch (err) {
      setError("Failed to load books.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCurrentPage(0);
    await fetchBooks(0, true);
  };

  return (
    <div className="search-container">
      <div className="content-wrapper">
        <div className="header">
          <h1>Book Explorer</h1>
          <p>Discover your next favorite read</p>
        </div>

        <div className="search-form-container">
          <form onSubmit={handleSubmit} className="search-form">
            <div className="input-group">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  placeholder="Search for books..."
                  required
                />
                <Search className="search-icon" size={20} />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="clear-button"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="category-select"
              >
                <option value="title">Title</option>
                <option value="isbn">ISBN</option>
                <option value="genre">Genre</option>
                <option value="author">Author</option>
              </select>
            </div>

            <button type="submit" disabled={isLoading} className="search-button">
              <Search size={20} />
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="book-grid">
          {books.length === 0 && !error && !isLoading ? (
            <div className="empty-state">
              <Book size={48} className="mx-auto mb-4 opacity-50" />
              <p>No books found. Try a different search?</p>
            </div>
          ) : (
            books.map((book, index) => <BookCard key={index} book={book} />)
          )}
        </div>

        {totalItems > 0 && (
          <div className="pagination-controls">
            <button
              onClick={() => {
                const prevPage = currentPage - 1;
                setCurrentPage(prevPage);
                fetchBooks(prevPage);
              }}
              disabled={currentPage === 0 || isLoading}
            >
              Previous
            </button>
            
            <span>
              Page {currentPage + 1} of {Math.ceil(totalItems / 10)}
            </span>

            <button
              onClick={() => {
                const nextPage = currentPage + 1;
                setCurrentPage(nextPage);
                fetchBooks(nextPage);
              }}
              disabled={currentPage >= Math.ceil(totalItems / 10) - 1 || isLoading}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-content">
        <div className="book-image-wrapper">
          <img src={book.thumbnail} alt={`${book.title} cover`} className="book-image" />
        </div>
        <div className="book-details">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-metadata">
            <span className="font-semibold">Author(s):</span> {book.authors.join(", ")}
          </p>
          <p className="book-metadata">
            <span className="font-semibold">Genres:</span> {book.categories.join(", ")}
          </p>
          <p className="book-description">{book.description}</p>
          <button className="view-details-button">
            <Book size={20} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;