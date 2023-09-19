import { Kurslarim, YangiKurs } from "../components";

import style from "../styles/kurslarim-list.module.scss";

export default function Malumotlar() {
   return (
      <div className={style.wrapper}>
         <div>
            <p className={style.title}>Yuklangan kurslar</p>
            <div className={style.courseList}>
               <Kurslarim />
               <Kurslarim />
            </div>
         </div>
         <div className={style.hr} />
         <div>
            <p className={style.title}>Yangi kurs</p>
            <div className={style.courseList}>
               <YangiKurs />
            </div>
         </div>
      </div>
   );
}