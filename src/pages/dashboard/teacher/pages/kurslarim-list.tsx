import { Kurslarim, YangiKurs } from "../components/index";

import style from "../styles/kurslarim-list.module.scss";

export default function KurslarimList() {
   return (
      <div className={style.wrapper}>
         <div>
            <p className={style.title}>Yuklangan kurslar</p>
            <div className={style.courseList}>
               <Kurslarim />
               <Kurslarim />
               <Kurslarim />
               <Kurslarim />
            </div>
         </div>
         <div className={style.hr} />
         <div>
            {" "}
            <p className={style.title}>Yangi kurs</p>
            <div className={style.courseList}>
               <YangiKurs />
            </div>
         </div>
      </div>
   );
}
