import { FunctionComponent } from "react";

interface MainProps {
   value: string;
}

const Main: FunctionComponent<MainProps> = ({ value }) => {
   const i = 0;

   return (
      <>
         <h1>{value}</h1>
      </>
   );
};

export default Main;
