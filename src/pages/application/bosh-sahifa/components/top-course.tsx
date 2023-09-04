import { useState } from "react";
import Carousel from "react-multi-carousel";

import banner from "../../../../assets/images/banner.png";
import by from "../../../../assets/images/by.png";

import "../style/top-course.scss";
import "react-multi-carousel/lib/styles.css";

export interface TopCourses {
   banner: string;
   by: string;
   text: string;
   price: string;
   free?: string; 
   star: string;
   subscribe: string;
   view: string;
   sale?: string;
}

function TopCourse({ deviceType }: any) {
   const [pricing, setPricing] = useState<TopCourses[]>([
      {
         banner,
         by,
         price: "2 750 000",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      },
      {
         banner,
         by,
         price: "0",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      },
      {
         banner,
         by,
         price: "0",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      }
      ,
      {
         banner,
         by,
         price: "2 750 000",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      },
      {
         banner,
         by,
         price: "2 750 000",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      },
      {
         banner,
         by,
         price: "0",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      },
      {
         banner,
         by,
         price: "0",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      }
      ,
      {
         banner,
         by,
         price: "2 750 000",
         text: "Biznesda CRM sistemadan foydalanish va o‘rnatish",
         star: "4,2",
         subscribe: "(12,965)",
         view: "54,112"
      }
   ]);
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
         slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 3,
         slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };

   return (
      <section className="top-course">
         <div className="title">
            <h1>
               <span>Top</span> kurslar
            </h1>
         </div>

         <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={deviceType !== "mobile"}
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
         {pricing.map((item, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>
         <img src={item.banner} alt="banner" />
            </div>
         ))}
         </Carousel>
      </section>
   );
}

export default TopCourse;
