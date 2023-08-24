import Footer from "components/footer";

import Courses from "./components/courses";
import Header from "./components/header";
import Statistic from "./components/statistic";

function Home() {
   return (
      <div>
         <Header />
         <Statistic />
         <Courses />
         <Footer />
      </div>
   );
}

export default Home;
