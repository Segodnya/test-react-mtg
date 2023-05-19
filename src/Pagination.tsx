import React, { Component } from 'react';

interface PaginationProps {
  pageNumbers: number[];
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  currentPage: number;
}

class Pagination extends Component<PaginationProps> {
  render() {
    const { pageNumbers, handleClick, currentPage } = this.props;

    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} id={number.toString()} onClick={handleClick} className={currentPage === number ? 'active' : undefined}>
            {number}
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
