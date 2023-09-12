/* eslint-disable jsx-a11y/anchor-is-valid */
import { Hisobim } from "./pages/index";
import { Sidebar } from "./components";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps { }

const UserPanel = (props: TeacherPanelProps) => {
    const s = "";

    return (
        <div className={style.userPanel}>
            <Sidebar />
            <div className={style.kurslarim}>
                <Hisobim />
            </div>
        </div>
    );
};

export default UserPanel;