import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/kurslarim.module.scss";

interface KurslarimProps {
   name: string;
   id: number;
   img: string;
}
export default function Kurslarim({ name, id, img }: KurslarimProps) {
   const navigete = useNavigate();

   return (
      <div
         className={style.wrapper}
         onClick={() => {
            navigete(`/kurslar/kurs/${id}`);
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
