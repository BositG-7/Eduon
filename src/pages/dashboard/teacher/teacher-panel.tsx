/* eslint-disable jsx-a11y/anchor-is-valid */
// import { KurslarimList } from "./pages/index";
import Moliya from "./pages/moliya";
import { Sidebar } from "./components";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps {}

const TeacherPanel = (props: TeacherPanelProps) => {
   const s = "";

   return (
      <div className={style.teacherPanel}>
         <Sidebar />
         <div className={style.main}>
            {/* <KurslarimList /> */}
            <Moliya />
         </div>
      </div>
   );
};

export default TeacherPanel;
