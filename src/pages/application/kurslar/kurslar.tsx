import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface KurslarProps {}

const Kurslar: FunctionComponent<KurslarProps> = () => {
   const navigete = useNavigate();

   return (
      <div>
         <h1>hello</h1>
      </div>
   );
};

export default Kurslar;
