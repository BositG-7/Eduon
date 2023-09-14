import React from "react";
import _ from "lodash";

import style from "../styles/pagenation.module.scss";

interface PaginationControlProps {
   course: {
      results: {
         length: number;
      };
   };
   pageSize: number;
   handlePageChange: (page: number) => void;
}

export default function PaginationControl({ course, pageSize, handlePageChange }: PaginationControlProps) {
   const arrayLength = course.results?.length;
   const pageCount = Math.ceil(arrayLength / pageSize);
   const pages = _.range(1, pageCount + 1);

   return (
      <nav aria-label="Pagination">
         <ul className={`pagination ${style.pagination}`}>
            {pages.map(page => (
               <li key={page} className={`page-item ${page === 1 ? "active" : ""}`} aria-current="page">
                  <button
                     className={`page-button ${style.pageButton}`}
                     onClick={() => handlePageChange(page)}
                     disabled={page === 1} // Optional: Disable the first button if it's active
                  >
                     {page}
                  </button>
               </li>
            ))}
         </ul>
      </nav>
   );
}
