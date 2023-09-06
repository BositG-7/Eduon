/* eslint-disable jsx-a11y/anchor-is-valid */

import { Sidebar } from "../teacher/components";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps {}

const UserPanel = (props: TeacherPanelProps) => {
   const s = "";

   return (
      <div className={style.userPanel}>
         <Sidebar />
         <div className={style.main}>
            main
            {/** Shu yerga pagelarni chaqirasizlar */}
         </div>
      </div>
   );
};

export default UserPanel;
