import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text, Title } from "@mantine/core";
// eslint-disable-next-line import/order
import DOMPurify from "dompurify";
import { Types } from "modules/courses";
// eslint-disable-next-line import/order
import { useSingle } from "modules/courses/hooks/use-single";
import { useSpeaker } from "modules/courses/hooks/use-speaker";
import { paginate } from "utils/paginate";

import Footer from "components/footer";
import Paginate from "components/pagination";

import Course from "../components/course";

import Demo from "./components/modal";

// import SpeakersCourse from "./components/speakers-course";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { courseID = "" } = useParams<{ courseID: string }>();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const course = useSingle(courseID);
   const { speaker = 1 } = course;
   const pageSize = 8;
   const teacher = useSpeaker(`${speaker}`);

   const paginatedCourses: Types.IEntity.Course[] = paginate(teacher.courses, currentPage, pageSize);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <Box pt={20}>
         <Flex justify='space-between'>
            <Flex direction="column" justify="space-between">
               <Title size={54} sx={{ lineHeight: "normal" }}>
                  {course.name}
               </Title>

               <Title
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.description) }}
                  pt={15}
                  size={18}
                  color="rgba(17, 17, 17, 0.54)"
                  sx={{ fontWeight: 400 }}
               />
               <Flex pt={20} align="center" gap={35}>
                  <Title size={24}>
                     Avtor:
                     <span style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5 }}>
                        {teacher.first_name} {teacher.last_name}
                     </span>
                  </Title>
               </Flex>
            </Flex>

            <Flex direction="column" gap={20}>
               <video
                  style={{
                     width: 380,
                     height: "auto",
                     borderRadius: "25px",
                     border: "1px solid #000"
                  }}
                  autoPlay
                  loop
                  muted
                  controls
                  src={course.video[0]?.video}
               />

               <Title fw={500} size={24}>
                  <Title>{course.video[0]?.title}</Title>
                  <Text color="#9B9B9B">{course.video[0]?.description}</Text>
               </Title>
               <Demo />
            </Flex>
         </Flex>

         <Box pt={50}>
            <Title mb={20} sx={{ textAlign: "center" }}>
               Spiker va o’xshash kurslar
            </Title>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }} mb={30}>
               {paginatedCourses.map((item, id) => (
                  <Course key={item.id} id={item.id} name={item.name} img={item.image} />
               ))}
            </Box>
            <Paginate
               total={teacher.courses.length ? teacher.courses.length : 1}
               onPageChange={handlePageChange}
               pageSize={pageSize}
               currentPage={currentPage}
            />
         </Box>
         <Footer />
      </Box>
   );
};

export default SinglePageCourse;
