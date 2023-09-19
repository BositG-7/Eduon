
import { Navbar } from "./components/index";
import Sidebar from "./components/sidebar";
import Kurslarim from "./pages/kurslarim/kurslarim";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps {}

const UserPanel = (props: TeacherPanelProps) => {
   const i = 0;

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
            </div>
            <Kurslarim />
         </div>
      </div>
   );
};

export default UserPanel;
