import Footer from "components/footer";

import Advantage from "./components/advantage";
import Boxes from "./components/boxes";
import Courses from "./components/courses";
import Header from "./components/header";
import NewCourse from "./components/new-courses";
import Statistic from "./components/statistic";
import Steps from "./components/steps";
import TopCourses from "./components/top-course";
import TopSpeakers from "./components/top-speaker";

function Home() {
   return (
      <div style={{ overflow: "hidden" }}>
         <Header />
         <Boxes />
         <TopCourses />
         <NewCourse />
         <TopSpeakers />
         <Courses />
         <Advantage />
         <Statistic />
         <Steps />

         <Footer />
      </div>
   );
}

export default Home;
