import React from "react";

import bag from "../../../../assets/images/Bag.svg";
import chat from "../../../../assets/images/Chat.svg";
import star from "../../../../assets/images/kurlarim-rate-star.svg";
import img from "../../../../assets/images/kurslarim.png";
import check from "../../../../assets/images/kurslarim-check.svg";

// import unCheck from "../../../../assets/images/kurslarim-uncheck.svg";
import style from "../styles/kurslarim.module.scss";

export default function Kurslarim() {
   return (
      <div className={style.card}>
         <div className={style.img} style={{ backgroundImage: `url(${img})` }}>
            <span className={style.check}>
               <img src={check} alt="check" />
            </span>
         </div>
         <p className={style.title}>Blog yuritishni 0 dan o'rganamiz. Amaliy</p>
         <div className={style.info}>
            <div className={style.wrap}>
               <img src={star} alt="star" />
               <div className={style.count}>
                  <p className={style.ball}>4,9</p>
                  <p className={style.nechta}>(1,483)</p>
               </div>
            </div>
            <div className={style.wrap}>
               <img src={bag} alt="star" />
               <p className={style.ball}>234 ta</p>
            </div>
            <div className={style.wrap}>
               <img src={chat} alt="star" />
               <p className={style.ball}>12 ta</p>
            </div>
         </div>
         <div className={style.hr} />
         <div className={style.btn}>
            <div className={style.price}>
               <p>1,000,000</p>
               <p>so'm</p>
            </div>
            <button>Tahrirlash</button>
         </div>
      </div>
   );
}
