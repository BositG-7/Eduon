import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

import check from "../../../../assets/images/my-courses-check.svg";

// import unCheck from "../../../../assets/images/kurslarim-uncheck.svg";
import style from "../styles/my-courses.module.scss";

interface MyCoursesProps {
   image: string;
   name: string;
   price: number;
   id: number;
}

export default function MyCourses({ image, price, name, id }: MyCoursesProps) {
   const navigete = useNavigate();

   return (
      <div
         onClick={() => {
            navigete(`/dashboard/teacher/course/${id}`);
         }}
         className={style.card}
      >
         <div className={style.img} style={{ backgroundImage: `url(${image})` }}>
            <span className={style.check}>
               <img src={check} alt="check" />
            </span>
         </div>
         <p className={style.title}>{name}</p>
         <div className={style.hr} />
         <div className={style.btn}>
            <div className={style.price}>
               <p>{!price ? <Button children="Bepul" /> : price}</p>
               <p>{!price ? "" : "so'm"}</p>
            </div>
            <button>Tahrirlash</button>
         </div>
      </div>
   );
}
