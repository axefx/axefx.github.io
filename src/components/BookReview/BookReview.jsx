import React, { Component } from 'react'
import BookListing from "../BookListing/BookListing";


class BookReview extends Component {
  render() {
    return (
      <div className="content-container">
        <h1>Book Reviews</h1>
        <h2>Book List</h2>
        <BookListing />
        <h2>Book Notes</h2>
        <h2>Book Codepen Projects</h2>
      </div>
    );
  }
}

export default BookReview;
