import React from "react";
import "./BookHolder.scss";

function BookHolder(props) {
  return(
    <div className="book-holder">
      <h2 className="book-title">{props.bookTitle}</h2>
      <img className="book-image" src={props.coverUrl} alt="book cover" />
      <h3 className="book-desc-title">Book Description: </h3>
      <p className="book-desc">{props.bookDesc}</p>
      <h3 className="book-link-title">Link:</h3>
      <a className="book-link" href={props.link}>{props.bookTitle}</a>
    </div>
  )
}

export default BookHolder;
