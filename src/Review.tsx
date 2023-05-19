import React from 'react';

interface ReviewProps {
  name: string;
  review: string;
  date: string;
}

const shortenName = (name: string) => {
  const matches = name.match(/^(\S+)\s+(\S)\S*/);
  if (matches) {
    return `${matches[1]} ${matches[2]}.`;
  }
  return name;
};

const Review: React.FC<ReviewProps> = ({ name, review, date }) => {
  return (
    <li className="review">
      <div className="review__name">{shortenName(name)}</div>
      <div className="review__text">{review}</div>
      <div className="review__date">{date}</div>
    </li>
  );
};

export default Review;
