import React from "react";
import BookHolder from "../BookHolder/BookHolder";
import "./BookListing.scss";


class BookListing extends React.Component {
  render() {
    return (
      <div className="book-list-container">
        <BookHolder
          bookTitle="Pragmatic Guide to Sass 3"
          coverUrl="https://images-na.ssl-images-amazon.com/images/I/41lcZTsmEeL._SX331_BO1,204,203,200_.jpg"
          bookDesc="book description goes here..."
          link="https://www.amazon.com/Pragmatic-Guide-Sass-Modern-Style/dp/1680501763/ref=sr_1_1?ie=UTF8&qid=1511047039&sr=8-1&keywords=pragmatic+guide+to+sass+3&dpID=41lcZTsmEeL&preST=_SY344_BO1,204,203,200_QL70_&dpSrc=srch"
        />
        <BookHolder
          bookTitle="Book 2"
          coverUrl="https://images-na.ssl-images-amazon.com/images/I/41lcZTsmEeL._SX331_BO1,204,203,200_.jpg"
          bookDesc="book description goes here..."
          link="https://www.amazon.com/Pragmatic-Guide-Sass-Modern-Style/dp/1680501763/ref=sr_1_1?ie=UTF8&qid=1511047039&sr=8-1&keywords=pragmatic+guide+to+sass+3&dpID=41lcZTsmEeL&preST=_SY344_BO1,204,203,200_QL70_&dpSrc=srch"
        />
        <p>Book3</p>
      </div>
    );
  }
}

export default BookListing;
