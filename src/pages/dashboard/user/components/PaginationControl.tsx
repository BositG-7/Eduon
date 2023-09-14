import _ from "lodash";

import style from "../styles/pagenation.module.scss";

export default function PaginationControl({ course, pageSize, handlePageChange }: any) {
   const pageCount = course.length / pageSize; // Use Math.ceil to calculate pageCount
   const pages = _.range(1, pageCount + 1);

   return (
      <ul className={style.pagination}>
         {pages.map(page => (
            <li key={page} className={style.pageItem}>
               <a className={style.pageLink} href="#1" onClick={() => handlePageChange(page)}>
                  {page}
               </a>
            </li>
         ))}
      </ul>
   );
}
