import React, { Component } from 'react';

interface ReviewProps {
  name: string;
  review: string;
  date: string;
}

interface ReviewState {}

class Review extends Component<ReviewProps, ReviewState> {
  shortenName = (name: string) => {
    const matches = name.match(/^(\S+)\s+(\S)\S*/);
    if (matches) {
      return `${matches[1]} ${matches[2]}.`;
    }
    return name;
  };

  render() {
    const { name, review, date } = this.props;

    return (
      <li className="review">
        <div className="review__name">{this.shortenName(name)}</div>
        <div className="review__text">{review}</div>
        <div className="review__date">{date}</div>
      </li>
    );
  }
}

export default Review;
