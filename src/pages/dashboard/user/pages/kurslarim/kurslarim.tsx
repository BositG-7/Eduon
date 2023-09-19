import { FunctionComponent, useState } from "react";
import { useList } from "modules/kurslar/hooks/course-use-list";

import { Paginate, Paginated } from "../../components";

import Kurs from "./components/kurs";

import style from "../../styles/panel.module.scss";

interface KurslarimProps {}

const Kurslarim: FunctionComponent<KurslarimProps> = () => {
   const { course } = useList();
   const [pageSize, setPageSize] = useState<number>(8);
   const [currentPage, setCurrentPage] = useState<number>(1);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
      console.log(page);
   };

   const paginated = Paginated({ currentPage, pageSize });

   if (!course) {
      return null;
   }

   return (
      <>
         <div className={style.kurslarimList}>
            {paginated.map(item => (
               <Kurs key={item.id} name={item.name} id={item.id} img={item.image} />
            ))}
         </div>
         <Paginate total={course.results?.length} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
      </>
   );
};

export default Kurslarim;
