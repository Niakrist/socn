import React from "react";
// import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCounter, pageSize, onPageChange, currentPage }) => {
  // pageCount - количество страниц
  const pageCount = Math.ceil(itemsCounter / pageSize);

  // Если всего 1 страница, то можно вернуть "" или null
  if (pageCount === 1) return null;

  // Создание количества страниц через цикл [1, 2, 3]
  const getPages = (pageCount) => {
    const pagesArr = [];
    for (let i = 0; i < pageCount; i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  };
  const pages = getPages(pageCount);

  // Cоздание количества страниц через lodash [1, 2, 3]
  // const pagesLodas = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={"page_" + page}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCounter: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;
