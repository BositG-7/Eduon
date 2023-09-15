import activy from "../../../../assets/images/activity.png";
import cateyory from "../../../../assets/images/category.png";
import profile from "../../../../assets/images/profile.png";

import "../style/boxes.scss";

function Boxes() {
   return (
      <section className="container" data-aos="zoom-in" data-aos-duration="1500">
         <div className="boxes">
            <article className="box">
               <img src={profile} alt="profile" />
               <h3>Profile</h3>
            </article>
            <article className="box">
               <img src={cateyory} alt="cateyory" />
               <h3>Cateyory</h3>
            </article>
            <article className="center box ">
               <img src={activy} alt="activy" />
               <h3>Activity</h3>
            </article>
         </div>
      </section>
   );
}

export default Boxes;
