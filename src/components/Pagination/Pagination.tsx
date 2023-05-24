import React, { Component } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  pageNumbers: number[];
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  currentPage: number;
}

class Pagination extends Component<PaginationProps> {
  render() {
    const { pageNumbers, handleClick, currentPage } = this.props;

    return (
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} id={number.toString()} onClick={handleClick} className={currentPage === number ? styles.active : undefined}>
            {number}
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
