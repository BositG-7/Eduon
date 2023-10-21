import video from "../../../../assets/images/video.png";

import "../style/steps.scss";

function Steps() {
   return (
      <section className="qadamlar">
         <div className="title">
            <h3>Qadamlar</h3>
            <h1>
               Ta’lim berishni
               <span> qanday</span> boshlash mumkin?
            </h1>
         </div>
         <div className="boxes">
            <div className="text">
               <div className="box">
                  <h3>Ro’yxatdan o’tish</h3>
                  <p>
                     Bilim ulashuvchi sifatida ro'yxatdan o'tish uchun <span>bu yerga</span> bosing
                  </p>
               </div>
               <div className="box">
                  <h3>Ma'lumotlarni to'ldirish</h3>
                  <p>Platforma tomonidan so'ralgan barcha ma'lumotlar to'liq to'ldirilishi zarur</p>
               </div>
               <div className="box">
                  <h3>Kurs yuklash</h3>
                  <p>Sohangiz bo'yicha kurs yuklashni boshlash</p>
               </div>
            </div>
            <div className="image">
               <img src={video} alt="video" />
            </div>
         </div>
      </section>
   );
}

export default Steps;
