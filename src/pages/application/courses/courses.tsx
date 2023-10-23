import React, { FunctionComponent, useState } from "react";
import { Box, Divider, Flex, InputBase, SegmentedControl, Title } from "@mantine/core";
import { useList } from "modules/courses/hooks/course-use-list";
import { useCourseTop } from "modules/courses/hooks/use-course-top";
// eslint-disable-next-line import/order
import { AiOutlineSend } from "react-icons/ai";
import { Paginated } from "utils/paginate";

import Paginate from "components/pagination";

import Course from "./components/course";

interface CoursesProps {}

const Courses: FunctionComponent<CoursesProps> = () => {
   const { course } = useList();
   const { courseTop } = useCourseTop();

   const [segmentValue, setSegmentValue] = useState("barchasi");

   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };

   const [pageSize, setPageSize] = React.useState<number>(9);
   const [currentPage, setCurrentPage] = React.useState<number>(1);
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const paginated = Paginated({ currentPage, pageSize });

   return (
      <Box mb={50}>
         <Flex direction="column">
            <Flex direction="column" justify="center" align="center">
               <Title size="60px" color="#006AFF" sx={{ marginTop: "50px", textAlign: "center" }}>
                  Xush kelibsiz
               </Title>
               <Title sx={{ textAlign: "center" }}>ilm izlanuvchi</Title>
               <Title
                  size="20px"
                  sx={{
                     fontWeight: "normal",
                     textAlign: "center",
                     marginTop: "15px",
                     marginBottom: "50px"
                  }}
               >
                  Xo‘sh bugun qanday bilimlar o‘rganamiz?
               </Title>
               <Flex>
                  <InputBase mb={20} autoFocus placeholder="kursni yozing..." radius="5px" w="400px" bg="#E7F0FF" p="8px" />
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
                  <Flex align="center" sx={{ flexDirection: "column" }}>
                     <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr ", gap: "20px" }}>
                        {segmentValue === "barchasi" &&
                           // @ts-expect-error
                           course?.map(item => (
                              <Course
                                 key={item.id}
                                 id={String(item.id)}
                                 img={item.image}
                                 price={item.price}
                                 name={item.name}
                                 view={String(item.view)}
                              />
                           ))}
                        {segmentValue === "zo'rlari" &&
                           courseTop?.map(item => (
                              <Course
                                 key={item.id}
                                 id={String(item.id)}
                                 img={item.image}
                                 price={item.price}
                                 name={item.name}
                                 view={String(item.view)}
                              />
                           ))}
                     </Box>

                     {/* @ts-ignore */}
                     <Paginate total={course?.length} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Courses;
