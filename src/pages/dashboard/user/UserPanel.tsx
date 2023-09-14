import Sidebar from "layouts/sidebar";
import { useList } from "modules/kurslar/hooks/course-use-list";

import { Navbar, Pagination } from "./components/index";
import Kurslarim from "./pages/kurslarim";

import style from "./styles/panel.module.scss";

export const UserPanel = (props: any) => {
   const { course } = useList();
   // @ts-ignore
   const count = course.results.length;

   // eslint-disable-next-line no-console
   console.log(course);

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
                  {/* @ts-ignore */}
                  {course && course?.results?.map(item => <Kurslarim key={item.id} name={item.name} id={item.id} img={item.image} />)}
               </div>
               {/* @ts-ignore */}
               {course && <Pagination count={course.results.length} />}
            </div>
         </div>
      </div>
   );
};
