import Footer from "components/footer";

import Advantage from "./components/advantage";
import Courses from "./components/courses";
import Header from "./components/header";
import NewCourse from "./components/new-courses";
import Steps from "./components/steps";
import TopCourses from "./components/top-course";

function Home() {
   return (
      <div style={{ overflow: "hidden" }}>
         <Header />
         <TopCourses />
         <NewCourse />
         <Courses />
         <Advantage />
         <Steps />

         <Footer />
      </div>
   );
}

export default Home;
