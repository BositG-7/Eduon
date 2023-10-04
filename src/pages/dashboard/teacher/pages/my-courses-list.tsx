import { MyCourses, NewCourses } from "../components";

import style from "../styles/my-courses-list.module.scss";

export default function MyCoursesList() {
   return (
      <div className={style.wrapper}>
         <div>
            <p className={style.title}>Yuklangan kurslar</p>
            <div className={style.courseList}>
               <MyCourses />
               <MyCourses />
               <MyCourses />
               <MyCourses />
            </div>
         </div>
         <div className={style.hr} />
         <div>
            <p className={style.title}>Yangi kurs</p>
            <div className={style.courseList}>
               <NewCourses />
            </div>
         </div>
      </div>
   );
}
