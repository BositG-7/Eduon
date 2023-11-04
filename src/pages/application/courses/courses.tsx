import { useState } from "react";
import { Box, Divider, Flex, InputBase, Loader, SegmentedControl, Title } from "@mantine/core";
import { Types } from "modules/courses";
import { useList } from "modules/courses/hooks/course-use-list";
import { useCourseTop } from "modules/courses/hooks/use-course-top";
// eslint-disable-next-line import/order
import { AiOutlineSend } from "react-icons/ai";
import { paginate } from "utils/paginate";

import Paginate from "components/pagination";

import Course from "./components/course";

const Courses = () => {
   const [search, setSearch] = useState("");
   const { course, isLoading } = useList({ search });
   const { courseTop } = useCourseTop();
   const [segmentValue, setSegmentValue] = useState("barchasi");
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 8;

   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const paginatedCourse: Types.IEntity.Course[] = paginate(course, currentPage, pageSize);
   const paginatedCourseTop: Types.IEntity.ICourseTop[] = paginate(courseTop, currentPage, pageSize);

   return (
      <Box mb={50}>
         <Flex direction="column">
            <Flex direction="column" justify="center" align="center">
               <Title size="60px" color="#006AFF" sx={{ marginTop: "50px", textAlign: "center" }}>
                  Xush kelibsiz
               </Title>
               <Title sx={{ textAlign: "center" }}>ilm izlanuvchi</Title>
               <Title size="20px" weight="normal" align="center" mt={15} mb={50}>
                  Xo‘sh bugun qanday bilimlar o‘rganamiz?
               </Title>
               <Flex>
                  <InputBase
                     onChange={e => {
                        setSearch(e.target.value);
                     }}
                     mb={20}
                     value={search}
                     autoFocus
                     placeholder="kursni yozing..."
                     radius="5px"
                     w="400px"
                     bg="#E7F0FF"
                     p="8px"
                  />
                  <Box sx={{ position: "relative", top: "17px", right: "30px" }}>
                     <AiOutlineSend />
                  </Box>
               </Flex>
            </Flex>

            <Divider my="lg" />
            <Flex align="center" justify="center" gap={150} ml="20px">
               <Flex align="center" justify="center" sx={{ flexDirection: "column", textAlign: "center" }}>
                  <Flex gap={25} mt="30px">
                     <SegmentedControl
                        w={400}
                        radius="lg"
                        color="blue"
                        size="md"
                        data={[
                           { label: "Barchasi", value: "barchasi" },
                           { label: "Zo'rlari", value: "zo'rlari" }
                        ]}
                        value={segmentValue}
                        onChange={handleSegmentChange}
                        style={{ background: "white" }}
                     />
                  </Flex>
                  <Flex align="center" justify="center" sx={{ flexDirection: "column" }}>

                     {isLoading ? (
                        <Loader mt={20} color="blue" />
                     ) : (
                        <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr ", gap: "20px" }}>
                           {segmentValue === "barchasi" &&
                              paginatedCourse.map(item => <Course key={item.id} id={item.id} img={item.image} name={item.name} />)}
                           {segmentValue === "zo'rlari" &&
                              paginatedCourseTop.map(item => <Course key={item.id} id={item.id} img={item.image} name={item.name} />)}
                        </Box>
                     )}

                     <Paginate
                        total={course?.length ? course.length : 1}
                        onPageChange={handlePageChange}
                        pageSize={pageSize}
                        currentPage={currentPage}
                     />
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Courses;
