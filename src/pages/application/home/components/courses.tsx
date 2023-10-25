import { useNavigate } from "react-router-dom";
import { useCategory } from "modules/courses/hooks/use-category";

// import business from "../../../../assets/images/business.png";
// import design from "../../../../assets/images/design.png";
// import din from "../../../../assets/images/din.png";
// import languages from "../../../../assets/images/languages.png";
// import marketing from "../../../../assets/images/marketing.png";
// import menejment from "../../../../assets/images/menejment.png";
import programming from "../../../../assets/images/programming.png";

// import sale from "../../../../assets/images/sale.png";
import "../style/courses.scss";

function Courses() {
   const navigete = useNavigate();
   const { category } = useCategory();

   return (
      <section className="courses">
         <div className="title">
            <h3>KURSLAR</h3>
            <h1>
               <span>30 dan</span> ortiq soha va <span>4000+</span> kurslar
            </h1>
         </div>
         <div className="boxes">
            {category.map(category => (
               <article key={category.id} className="box">
                  <img src={programming} alt="marketing" />
                  <h3>{category.name}</h3>
                  <h2>{category.course_count}</h2>
               </article>
            ))}
            {/*
            <article className="box">
               <img src={programming} alt="dasturlash" />
               <h3>Dasturlash</h3>
               <h2>124 ta kurs</h2>
            </article>

            <article className="box">
               <img src={business} alt="biznes" />
               <h3>Biznes</h3>
               <h2>27 ta kurs</h2>
            </article>

            <article className="box">
               <img src={din} alt="din" />
               <h3>Din va diyonat</h3>
               <h2>31 ta kurs</h2>
            </article>

            <article className="box">
               <img src={languages} alt="xorijTillar" />
               <h3>Xorijiy tillar</h3>
               <h2>146 ta kurs</h2>
            </article>

            <article className="box">
               <img src={menejment} alt="menejment" />
               <h3>Menejment</h3>
               <h2>34 ta kurs</h2>
            </article>

            <article className="box">
               <img src={sale} alt="sotuv" />
               <h3>Sotuv</h3>
               <h2>49 ta kurs</h2>
            </article>

            <article className="box">
               <img src={design} alt="design" />
               <h3>Dizayn</h3>
               <h2>62 ta kurs</h2>
            </article> */}
         </div>
         <div className="link">
            <button
               className="share-subject"
               onClick={() => {
                  navigete("/courses");
               }}
            >
               Barchasi
            </button>
         </div>
      </section>
   );
}

export default Courses;
