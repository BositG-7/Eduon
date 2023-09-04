import Carousel from "react-multi-carousel";

import biznes from "../../../../assets/images/biznes.png";
import dasturlash from "../../../../assets/images/dasturlash.png";
import design from "../../../../assets/images/design.png";
import din from "../../../../assets/images/din.png";
import marketing from "../../../../assets/images/marketing.png";
import menejment from "../../../../assets/images/menejment.png";
import sotuv from "../../../../assets/images/sotuv.png";
import xorijTillar from "../../../../assets/images/xorijTillar.png";

import "../style/courses.scss";
import "react-multi-carousel/lib/styles.css";

function Courses({ deviceType }: any) {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
         slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 768 },
         items: 3,
         slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 768, min: 568 },
         items: 2,
         slidesToSlide: 1 // optional, default to 1.
      },
      android: {
         breakpoint: { max: 568, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };

   return (
      <section className="courses">
         <div className="title">
            <h3>KURSLAR</h3>
            <h1>
               <span>30 dan</span> ortiq soha va <span>4000+</span> kurslar
            </h1>
         </div>
         <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={deviceType !== "android"}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carousel"
         >
            <article className="box">
               <img src={marketing} alt="marketing" />
               <h3>Marketing</h3>
               <h2>72 ta kurs</h2>
            </article>

            <article className="box">
               <img src={dasturlash} alt="dasturlash" />
               <h3>Dasturlash</h3>
               <h2>124 ta kurs</h2>
            </article>

            <article className="box">
               <img src={biznes} alt="biznes" />
               <h3>Biznes</h3>
               <h2>27 ta kurs</h2>
            </article>

            <article className="box">
               <img src={din} alt="din" />
               <h3>Din va diyonat</h3>
               <h2>31 ta kurs</h2>
            </article>

            <article className="box">
               <img src={xorijTillar} alt="xorijTillar" />
               <h3>Xorijiy tillar</h3>
               <h2>146 ta kurs</h2>
            </article>

            <article className="box">
               <img src={menejment} alt="menejment" />
               <h3>Menejment</h3>
               <h2>34 ta kurs</h2>
            </article>

            <article className="box">
               <img src={sotuv} alt="sotuv" />
               <h3>Sotuv</h3>
               <h2>49 ta kurs</h2>
            </article>

            <article className="box">
               <img src={design} alt="design" />
               <h3>Dizayn</h3>
               <h2>62 ta kurs</h2>
            </article>
         </Carousel>
      </section>
   );
}

export default Courses
