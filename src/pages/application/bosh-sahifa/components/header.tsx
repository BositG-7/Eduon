import cursor from "../../../../assets/images/cursor.png";
import play from "../../../../assets/images/play.png";
import threeD from "../../../../assets/images/threeD.png";

import "../style/header.scss";

function Header() {
   return (
      <section className="header">
         <div className="title">
            <h1>Onlayn o’qitish</h1>
            <span>platformasi</span>
            <p>Kelajak yoshlariga sifatli ta'lim berishda o'z hissangizni qo'shing</p>
         </div>
         <div className="buttons">
            <button className="share-subject">Kurslar</button>
            <div className="flex">
               <img src={play} alt="play" />
               <h3>Videoni ko‘rish</h3>
            </div>
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
