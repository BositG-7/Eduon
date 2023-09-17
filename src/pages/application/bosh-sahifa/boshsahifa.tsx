import Footer from "components/footer";

import Boxes from "./components/boxes";
import Courses from "./components/courses";
import Header from "./components/header";
import Steps from "./components/qadamlar";
import Statistic from "./components/statistic";
import TopCourses from "./components/top-course";
import TopSpeakers from "./components/top-speaker";
import Ustunlik from "./components/ustunlik";
import NewCourse from "./components/yangi-kurslar";

function BoshSahifa() {
   return (
      <div style={{ overflow: "hidden" }}>
         <Header />
         <Boxes />
         <TopCourses />
         <NewCourse />
         <TopSpeakers />
         <Courses />
         <Ustunlik />
         <Statistic />
         <Steps />

         <Footer />
      </div>
   );
}

export default BoshSahifa;
