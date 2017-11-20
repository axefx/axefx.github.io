import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import BookReview from "../components/BookReview/BookReview";

class BookReviewsPage extends Component {
  render() {
    return (
      <div className="book-reviews-container">
        <Helmet>
          <title>{`Book Reviews | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/book-reviews/`} />
        </Helmet>
        <BookReview />
      </div>
    );
  }
}

export default BookReviewsPage;
