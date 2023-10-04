import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseTop } from "modules/courses/api";

import "../style/top-course.scss";

export interface Results {
   id: number;
   name: string;
   price: number;
   view: number;
   image: string;
   review_count: number;
}

export interface TopCoursess {
   count: number;
   next: null;
   previous: null;
   results: Results[];
}

function TopCourse({ deviceType }: any) {
   const [pricing, setPricing] = useState<TopCoursess[]>();

   const navigete = useNavigate();

   useEffect(() => {
      const fetch = async () => {
         const { data }: any = await CourseTop();

         setPricing(data);
      };

      fetch();
   }, []);

   // if (!pricing) return null;
   return (
      <section className="top-course" data-aos="fade-right" data-aos-duration="2000">
         <div className="title">
            <h1>
               <span>Top</span> kurslar
            </h1>
         </div>
         <div className="boxes">
            {/* @ts-ignore */}
            {pricing?.slice(0, 4).map(item => (
               // @ts-ignore
               <div
                  className="box"
                  onClick={() => {
                     // @ts-ignore
                     navigete(`/courses/course/${item.id}`);
                  }}
                  // @ts-ignore
                  key={item.id}
               >
                  {/* @ts-ignore */}
                  <img src={item.image} alt="banner" />
                  <div className="text">
                     <div className="flex">
                        {/* @ts-ignore */}
                        <h3>{item.name}</h3>
                        <i className="fa-regular fa-bookmark" />
                     </div>
                     <div className="statistic">
                        <div className="star">
                           <i className="fa-solid fa-star" />
                           <h2>4,2</h2>
                        </div>
                        <div className="view">
                           <i className="fa-solid fa-eye" />
                           {/* @ts-ignore */}
                           <h2>{item.view}</h2>
                        </div>
                     </div>
                     <div className="price">
                        <h3>
                           {/* @ts-ignore */}
                           {item.price}
                           <span>/so'm</span>
                        </h3>
                        <h2>Xarid qilish</h2>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="link">
            <button
               className="share-subject"
               onClick={() => {
                  navigete("/top-courses");
               }}
            >
               Barchasi
            </button>
         </div>
      </section>
   );
}

export default TopCourse;
