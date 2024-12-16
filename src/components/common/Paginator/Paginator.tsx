import s from "./Paginator.module.css";
import React, { useState } from "react";
import cn from "classnames";

type Props = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize?: number;
};
const Paginator = (props: Props): JSX.Element => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
  } = props;

  let pagesCount: number = Math.ceil(totalUsersCount / pageSize);

  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPageNubmer = (portionNumber - 1) * portionSize + 1;
  let rightPageNubmer = portionNumber * portionSize;

  return (
    <div className={cn(s.paginator)}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftPageNubmer && p <= rightPageNubmer)
        .map((p) => {
          return (
            <span
              key={p}
              className={cn({ [s.selectedPage]: currentPage === p }, s.page)}
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
