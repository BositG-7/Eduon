import { useNavigate } from "react-router-dom";
import { useList } from "modules/courses/hooks/course-use-list";
import Course from "pages/application/courses/components/course";

import "../style/new-courses.scss";

function NewCourse() {
   const { course } = useList({});

   const navigete = useNavigate();

   return (
      <section className="top-course" data-aos="zoom-out-left" data-aos-duration="2000">
         <div className="title">
            <h1>
               <span>Yangi</span> kurslar
            </h1>
         </div>
         <div className="boxes">
            {/* @ts-ignore */}
            {course?.slice(1, 5).map(item => (
               // @ts-ignore
               <Course key={item.id} id={String(item.id)} img={item.image} price={item.price} name={item.name} view={String(item.view)} />
            ))}
         </div>
      </section>
   );
}

export default NewCourse;
