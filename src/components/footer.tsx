import { useNavigate } from "react-router-dom";

import logo from "./Logo.svg";

import "../assets/styles/footer.scss";

function Footer() {
   const navigete = useNavigate();

   return (
      <section className="footer">
         <div className="boxes">
            <div className="box">
               <img src={logo} alt="logo" />
               <div className="social">
                  <i className="fa-brands fa-instagram" />
                  <i className="fa-brands fa-telegram" />
                  <i className="fa-brands fa-facebook" />
                  <i className="fa-brands fa-youtube" />
               </div>
            </div>
            <div className="box">
               <h3>Veb sayt</h3>
               <ul>
                  <li
                     onClick={() => {
                        navigete("/");
                     }}
                  >
                     Bosh sahifa
                  </li>
                  <li
                     onClick={() => {
                        navigete("/courses");
                     }}
                  >
                     Kurslar
                  </li>
                  <li
                     onClick={() => {
                        navigete("/question");
                     }}
                  >
                     FAQ
                  </li>
               </ul>
            </div>
            <div className="box">
               <h3>Ma’lumotlar</h3>
               <ul>
                  <li
                     onClick={() => {
                        navigete("/about");
                     }}
                  >
                     Biz haqimizda
                  </li>
                  <li
                     onClick={() => {
                        navigete("/rules");
                     }}
                  >
                     Foydalanish shartlari
                  </li>
                  <li>Privacy and Policy</li>
               </ul>
            </div>
            <div className="box">
               <h3>Manzillar</h3>
               <p>Toshkent sh. Yakkasaroy t. Shota Rustaveli 1-tor ko'chasi, 6-uy</p>
               <h2>+998 99 702 00 88</h2>
               <h4>Info@infonex.uz</h4>
            </div>
         </div>
         <h6>
            © <span>InfoNex.</span> Barcha huquqlar himoyalangan
         </h6>
      </section>
   );
}

export default Footer;
