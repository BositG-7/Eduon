/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "layouts/sidebar";

import { CreateCourse } from "./pages/index";

import style from "./styles/panel.module.scss";

interface TeacherPanelProps { }

const UserPanel = (props: TeacherPanelProps) => {
    const s = "";

    return (
        <div className={style.userPanel}>
            <Sidebar />
            <div className={style.kurslarim}>
                <CreateCourse/>
            </div>
        </div>
    );
};

export default UserPanel;
