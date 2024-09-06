import s from "./Paginator.module.css";
import React, { useState } from "react";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPageNubmer = (portionNumber - 1) * portionSize + 1;
  let rightPageNubmer = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}
      {console.log(
        pages.filter((p) => p >= leftPageNubmer && p <= rightPageNubmer),
      )}
      {pages
        .filter((p) => p >= leftPageNubmer && p <= rightPageNubmer)
        .map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p ? s.selectedPage : ""}
              onClick={() => onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
