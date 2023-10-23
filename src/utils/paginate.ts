import { useList } from "modules/courses/hooks/course-use-list";

interface PaginateProps {
   currentPage: number;
   pageSize: number;
}

export const Paginated = ({ currentPage, pageSize }: PaginateProps) => {
   const { course } = useList();

   const startIndex: number = (currentPage - 1) * pageSize;
   const list = course

   return list;
};
