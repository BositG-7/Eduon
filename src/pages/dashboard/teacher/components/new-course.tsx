import img from "../../../../assets/images/my-courses.png";

import style from "../styles/my-courses.module.scss";

export default function NewCourses() {
   return (
      <div>
         {" "}
         <div className={style.card}>
            <div className={style.img} style={{ backgroundImage: `url(${img})` }} />
            <p className={style.title2}>Blog yuritishni 0 dan o'rganamiz. Amaliy mashg'ulot</p>
            <div className={style.btn}>
               <button className={style.button}>Davom ettirish</button>
            </div>
         </div>
      </div>
   );
}
