import { useNavigate } from "react-router-dom";
import { useList } from "modules/courses/hooks/course-use-list";
import Course from "pages/application/courses/components/course";

import "../style/top-course.scss";


function TopCourse() {
   const { course } = useList();

   const navigete = useNavigate();


   return (
      <section className="top-course" data-aos="fade-right" data-aos-duration="2000">
         <div className="title">
            <h1>
               <span>Top</span> kurslar
            </h1>
         </div>
         <div className="boxes">
            {/* @ts-ignore */}
            {course?.slice(0, 4).map(item => (
               // @ts-ignore
               <Course
               key={item.id}
               id={String(item.id)}
               img={item.image}
               price={item.price}
               name={item.name}
               view={String(item.view)}
            />
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
