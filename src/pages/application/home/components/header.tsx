import { useNavigate } from "react-router-dom";

import cursor from "../../../../assets/images/cursor.png";
import threeD from "../../../../assets/images/threeD.png";

import "../style/header.scss";

function Header() {
   const navigete = useNavigate();

   return (
      <section className="header" data-aos="zoom-in" data-aos-duration="1500">
         <div className="title">
            <h1>Onlayn o’qitish</h1>
            <span>platformasi</span>
            <p style={{ fontSize: "24px" }}>Ta'lim kelajagi InfoNex bilan</p>
         </div>
         <div className="buttons">
            <button
               className="share-subject"
               onClick={() => {
                  navigete("/courses");
               }}
            >
               Kurslar
            </button>
         </div>

         <div className="right">
            <img src={cursor} alt="cursor" />
         </div>
         <div className="left">
            <img src={threeD} alt="threeD" />
         </div>
      </section>
   );
}

export default Header;
