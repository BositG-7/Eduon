import Footer from "components/footer";

import Courses from "./components/courses";
import Header from "./components/header";
import Statistic from "./components/statistic";
import TopCourse from "./components/top-course";

function Home() {
   return (
      <div>
         <Header />
         <Statistic />
         <TopCourse />
         <Courses />
         <Footer />
      </div>
   );
}

export default Home;
