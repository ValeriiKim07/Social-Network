import s from "./Paginator.module.css";
import React from "react";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageL = currentPage + 5;
  let slicedPages = pages.slice(currentPageF, currentPageL);

  return (
    <div>
      {slicedPages.map((page) => {
        return (
          <span
            key={page}
            className={currentPage === page ? s.selectedPage : ""}
            onClick={() => onPageChanged(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
