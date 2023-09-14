/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";

export default function PaginationControl({ course, pageSize, handlePageChange }: any) {
   const arrayLeng = course.results?.length;

   const pageCount = arrayLeng / pageSize; // Use Math.ceil to calculate pageCount
   const pages = _.range(1, pageCount + 1);

   return (
      <nav aria-label="Page navigation example">
         <ul className="pagination">
            <li className="page-item">
               <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  1
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  2
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  3
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
               </a>
            </li>
         </ul>
      </nav>
   );
}
