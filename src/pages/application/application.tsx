import Header from "./bosh-sahifa/components/header";
import Statistic from "./bosh-sahifa/components/statistic";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
   const i = 0;

   console.log(i);

   return (
      <>
         <Header />
         <Statistic />
      </>
   );
};

export default Application;
