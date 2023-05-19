import React, { Component } from 'react';
import styles from './ReviewItem.module.css';

interface ReviewProps {
  name: string;
  review: string;
  date: string;
}

interface ReviewState {}

class ReviewItem extends Component<ReviewProps, ReviewState> {
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
      <li className={styles.review}>
        <div className={styles.reviewName}>{this.shortenName(name)}</div>
        <div className="review__text">{review}</div>
        <div className={styles.reviewDate}>{date}</div>
      </li>
    );
  }
}

export default ReviewItem;
