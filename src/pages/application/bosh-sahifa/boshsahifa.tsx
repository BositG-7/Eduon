import Footer from "components/footer";

import Boxes from "./components/boxes";
import Courses from "./components/courses";
import Header from "./components/header";
import Steps from "./components/qadamlar";
import Statistic from "./components/statistic";
import TopCourse from "./components/top-course";
import TopSpeakers from "./components/top-speaker";
import Ustunlik from "./components/ustunlik";
import NewCourse from "./components/yangi-kurslar";

function BoshSahifa() {
   return (
      <div>
         <Header />
         <Boxes />
         <TopCourse />
         <NewCourse />
         <TopSpeakers />
         <Courses />
         <Ustunlik/>
         <Statistic />
         <Steps />
         <Footer />
      </div>
   );
}

export default BoshSahifa;
