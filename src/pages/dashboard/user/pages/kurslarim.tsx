import React from "react";

import img from "../../../../assets/images/kurslarim.png";

import style from "../styles/kurslarim.module.scss";

export default function Kurslarim() {
   return (
      <div className={style.wrapper}>
         <div className={style.img} style={{ backgroundImage: `url(${img})` }} />
         <p className={style.title}>Biznesda CRM sistemadan foydalanish va o'rnatish</p>
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
