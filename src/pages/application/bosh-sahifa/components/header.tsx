import { useNavigate } from "react-router-dom";

import cursor from "../../../../assets/images/cursor.png";
import threeD from "../../../../assets/images/threeD.png";

import "../style/header.scss";

function Header() {
   const navigete = useNavigate();

   return (
      <section className="header">
         <div className="title">
            <h1>Onlayn o’qitish</h1>
            <span>platformasi</span>
            <p>Kelajak yoshlariga sifatli ta'lim berishda o'z hissangizni qo'shing</p>
         </div>
         <div className="buttons">
            <button
               className="share-subject"
               onClick={() => {
                  navigete("/kurslar");
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
