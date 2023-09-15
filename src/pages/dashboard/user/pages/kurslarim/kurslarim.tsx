import { FunctionComponent } from "react";
import { useList } from "modules/kurslar/hooks/use-list";

import Kurs from "./components/kurs";

import style from "../../styles/panel.module.scss";

interface KurslarimProps {}

const Kurslarim: FunctionComponent<KurslarimProps> = () => {
   const { course } = useList();

   console.log(window.location.pathname);

   return (
      <>
         <div className={style.kurslarimList}>
            {/* @ts-ignore */}
            {course && course?.results?.map(item => <Kurs key={item.id} name={item.name} id={item.id} img={item.image} />)}
         </div>
      </>
   );
};

export default Kurslarim;
