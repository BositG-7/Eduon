import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface KurslarProps {}

const Kurslar: FunctionComponent<KurslarProps> = () => {
   const navigete = useNavigate();

   return (
      <>
         <h1>Kurslar page</h1>
      </>
   );
};

export default Kurslar;
