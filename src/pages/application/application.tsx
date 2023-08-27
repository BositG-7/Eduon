import BoshSahifa from "./bosh-sahifa/boshsahifa";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
   const i = 0;

   console.log(i);

   return (
      <>
         <BoshSahifa />
      </>
   );
};

export default Application;
