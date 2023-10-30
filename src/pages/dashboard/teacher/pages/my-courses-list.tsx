import { useState } from "react";
import { useAuth } from "modules/auth/context";
import { Types } from "modules/courses";
import Course from "pages/application/courses/components/course";
import { paginate } from "utils/paginate";

import Paginate from "components/pagination";

import cls from "../styles/my-courses-list.module.scss";

export default function MyCoursesList() {
   const { user } = useAuth();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 4;

   const paginatedCourse: Types.IEntity.ICourseTop[] = paginate(user?.course, currentPage, pageSize);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <div className={cls.wrapper}>
         <div>
            <p className={cls.title}>Yuklangan kurslar</p>
            <div className={cls.courseList}>
               {paginatedCourse.map(item => (
                  <Course key={item.id} id={item.id} img={item.image} name={item.name} typeTask='editCourse'/>
               ))}
            </div>
            <Paginate
               total={user?.course.length ? user.course.length : 1}
               onPageChange={handlePageChange}
               currentPage={currentPage}
               pageSize={pageSize}
            />
         </div>
         <div className={cls.hr} />
      </div>
   );
}
