/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "layouts/sidebar";

import { Kurslarim } from "./pages/index";
import { Navbar, Pagination } from "./components";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps {}

const UserPanel = (props: TeacherPanelProps) => {
   const s = "";

   return (
      <div className={style.userPanel}>
         <Sidebar />
         <div className={style.main}>
            <div className={style.kurslarim}>
               <Navbar
                  links={[
                     { link: "/", label: "Barchasi" },
                     { link: "/", label: "Progresdagi" },
                     { link: "/", label: "Saqlangan" },
                     { link: "/", label: "Tugatilgan" }
                  ]}
               />
               <div className={style.kurslarimList}>
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
                  <Kurslarim />
               </div>
               <Pagination />
            </div>
         </div>
      </div>
   );
};

export default UserPanel;
