import _ from "lodash";
import { useList } from "modules/kurslar/hooks/course-use-list";

interface PaginateProps {
   
   currentPage: number;
   pageSize: number;
}

export const Paginated = ({  currentPage, pageSize }: PaginateProps) => {
   const { course } = useList();

   const startIndex: number = (currentPage - 1) * pageSize;
   let list = _.slice(course?.results, startIndex);

   list = _.take(list, pageSize);
   return list;
};
