import cursor from "../../../../assets/images/cursor.png";
import play from "../../../../assets/images/play.png";
import threeD from "../../../../assets/images/threeD.png";

import "../style/header.scss";

function Header() {
   return (
      <section className="header">
         <div className="title">
            <h1>
               Onlayn o’qitish <span>platformasi</span>
            </h1>
            <p>Kelajak yoshlariga sifatli ta'lim berishda o'z hissangizni qo'shing</p>
         </div>
         <div className="buttons">
            <button className="share-subject">Bilim ulashish</button>
            <div className="flex">
               <img src={play} alt="play" />
               <h3>Videoni ko‘rish</h3>
            </div>
         </div>

         <div className="absolute right">
            <img src={cursor} alt="cursor" />
         </div>
         <div className="absolute left">
            <img src={threeD} alt="threeD" />
         </div>
      </section>
   );
}

export default Header;
