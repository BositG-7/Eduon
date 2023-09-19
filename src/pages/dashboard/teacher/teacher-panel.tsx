/* eslint-disable jsx-a11y/anchor-is-valid */

import Malumotlar from "./pages/malumotlar";
import { Sidebar } from "./components";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps {}

const TeacherPanel = (props: TeacherPanelProps) => {
   const s = "";

   return (
      <div className={style.teacherPanel}>
         <Sidebar />
         <div className={style.main}>
            <Malumotlar />
         </div>
      </div>
   );
};

export default TeacherPanel;
