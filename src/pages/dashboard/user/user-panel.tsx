import { Navbar } from "./components/index";
import Sidebar from "./components/sidebar";
import CourseCreate from "./pages/create-course/create-course";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps { }

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
            <CourseCreate />
         </div>
      </div>
   );
};

export default UserPanel;
