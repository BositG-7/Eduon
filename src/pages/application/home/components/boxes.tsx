import { useNavigate } from "react-router-dom";
import { useAuth } from "modules/auth/context";

import cateyory from "../../../../assets/images/category.png";
import profile from "../../../../assets/images/profile.png";

import "../style/boxes.scss";

function Boxes() {
   const navigete = useNavigate();

   const { user } = useAuth();

   return (
      <section className="container" data-aos="zoom-in" data-aos-duration="1500">
         <div className="boxes">
            <article
               className="box"
               onClick={() => {
                  if (!user) {
                     navigete("/auth/login");
                  } else {
                     navigete("/dashboard");
                  }
               }}
            >
               <img src={profile} alt="profile" />
               <h3>Profile</h3>
            </article>
            <article className="box">
               <img src={cateyory} alt="cateyory" />
               <h3>Cateyory</h3>
            </article>
         </div>
      </section>
   );
}

export default Boxes;
