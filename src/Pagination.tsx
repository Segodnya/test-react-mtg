import React from 'react';

interface PaginationProps {
  pageNumbers: number[];
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumbers, handleClick, currentPage }) => {
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} id={number.toString()} onClick={handleClick} className={currentPage === number ? 'active' : undefined}>
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
