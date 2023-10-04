import { FunctionComponent, useState } from "react";
import { SegmentedControl } from "@mantine/core";
import { useList } from "modules/courses/hooks/course-use-list";

import { Paginate, Paginated } from "../../components";

import Kurs from "./components/course";

import style from "../../styles/panel.module.scss";

interface MyCoursesProps {}

const MyCourses: FunctionComponent<MyCoursesProps> = () => {
   const { course } = useList();
   const [pageSize, setPageSize] = useState<number>(8);
   const [currentPage, setCurrentPage] = useState<number>(1);

   const [selectedValue, setSelectedValue] = useState("Barchasi");

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const paginated = Paginated({ currentPage, pageSize });

   if (!course) {
      return null;
   }
   if (selectedValue === "Saqlangan") {
      return (
         <>
            <div className={style.kurslarim}>
               <SegmentedControl
                  sx={{
                     color: "rgba(17, 17, 17, 0.54)",
                     fontFamily: "Gilroy-Medium",
                     fontSize: 16,
                     fontStyle: "normal",
                     fontWeight: 400,
                     lineHeight: "normal",
                     width: "60%"
                  }}
                  data={[
                     { label: "Barchasi", value: "Barchasi" },
                     { label: "Progresdagi", value: "Progresdagi" },
                     { label: "Saqlangan", value: "Saqlangan" },
                     { label: "Tugatilgan", value: "Tugatilgan" }
                  ]}
                  value={selectedValue} // Set the selected value
                  onChange={value => setSelectedValue(value)} // Update the selected value
               />
            </div>
            <div className={style.kurslarimList}>
               <h1>Saqlangan</h1>
            </div>
         </>
      );
   }

   return (
      <>
         <div className={style.kurslarim}>
            <SegmentedControl
               sx={{
                  color: "rgba(17, 17, 17, 0.54)",
                  fontFamily: "Gilroy-Medium",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "60%"
               }}
               data={[
                  { label: "Barchasi", value: "Barchasi" },
                  { label: "Progresdagi", value: "Progresdagi" },
                  { label: "Saqlangan", value: "Saqlangan" },
                  { label: "Tugatilgan", value: "Tugatilgan" }
               ]}
               value={selectedValue} // Set the selected value
               onChange={value => setSelectedValue(value)} // Update the selected value
            />
         </div>
         <div className={style.kurslarimList}>
            {/* @ts-ignore */}
            {course.map(item => (
               <Kurs key={item.id} name={item.name} id={item.id} img={item.image} />
            ))}
         </div>
         <Paginate total={course.results?.length} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
      </>
   );
};

export default MyCourses;
