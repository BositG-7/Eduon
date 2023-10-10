import { useAuth } from "modules/auth/context";

import { MyCourses, NewCourses } from "../components";

import style from "../styles/my-courses-list.module.scss";

export default function MyCoursesList() {
   const { user } = useAuth();

   return (
      <div className={style.wrapper}>
         <div>
            <p className={style.title}>Yuklangan kurslar</p>
            <div className={style.courseList}>
               {user?.course.map((item: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <MyCourses image={item.image} name={item.name} price={item.price} />
               ))}
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
