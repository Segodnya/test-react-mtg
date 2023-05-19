import React, { Component } from 'react';
import data from './data.json';

interface MainProps {
  language: string;
}

interface Review {
  name: string;
  review: string;
  date: string;
}

interface MainState {
  currentPage: number;
  reviewsPerPage: number;
  reviews: Review[];
}

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      currentPage: 1,
      reviewsPerPage: 10,
      reviews: Object.values(data[this.props.language]),
    };
  }

  componentDidUpdate(prevProps: MainProps) {
    if (prevProps.language !== this.props.language) {
      this.setState({ reviews: Object.values(data[this.props.language]) });
    }
  }

  handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    this.setState({
      currentPage: Number(event.currentTarget.id),
    });
  };

  render() {
    const { currentPage, reviewsPerPage, reviews } = this.state;

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <main className="main">
        <ul className="reviews-list">
          {currentReviews.map((review, index) => (
            <li key={index} className="review">
              <div className="review__name">{review.name}</div>
              <div className="review__text">{review.review}</div>
              <div className="review__date">{review.date}</div>
            </li>
          ))}
        </ul>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} id={number.toString()} onClick={this.handleClick} className={currentPage === number ? 'active' : undefined}>
              {number}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Main;
