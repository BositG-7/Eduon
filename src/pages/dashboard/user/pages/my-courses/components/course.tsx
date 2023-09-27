import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../../../styles/my-courses.module.scss";

interface CourseProps {
   name: string;
   id: number;
   img: string;
}
export default function Course({ name, id, img }: CourseProps) {
   const navigete = useNavigate();

   return (
      <div
         className={style.wrapper}
         onClick={() => {
            navigete(`/dashboard/user/courses/${id}`);
         }}
      >
         <div className={style.img} style={{ backgroundImage: `url(${img})` }} />
         <p className={style.title}>{name}</p>
         <div className={style.progress}>
            <div className={style.progresInNumber}>
               <p>Progress</p>
               <div className={style.persent}>
                  <p>12/24</p>
                  <p>(50%)</p>
               </div>
            </div>
            <div className={style.diagramma}>
               <div className={style.diagrammaItem} />
            </div>
         </div>
         <button className={style.btn}>Davom ettirish</button>
      </div>
   );
}
