import Footer from "components/footer";

import Courses from "./components/courses";
import Header from "./components/header";
import Statistic from "./components/statistic";
import TopCourse from "./components/top-course";
import Ustunlik from "./components/ustunlik";

function BoshSahifa() {
   return (
      <div>
         <Header />
         <Statistic />
         <TopCourse />
         <Courses />
         <Ustunlik/>
         <Footer />
      </div>
   );
}

export default BoshSahifa;
