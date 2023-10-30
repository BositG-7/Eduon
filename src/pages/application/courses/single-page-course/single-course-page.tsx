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

interface SinglePageCourseProps { }

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { courseID = "" } = useParams<{ courseID: string }>();
   const course = useSingle(courseID);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [showMore, setShowMore] = useState(false)
   const pageSize = 8;
   const { speaker = 1 } = course;

   const teacher = useSpeaker(`${speaker}`);

   const paginatedCourses: Types.IEntity.Course[] = paginate(teacher.courses, currentPage, pageSize);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <Box pt={20}>
         <Flex direction="column">
            <Flex justify="space-around" mb="30px">
               <Title size={34} sx={{ lineHeight: "normal", fontFamily: 'sans-serif' }}>
                  {showMore ? course.name : `${course.name.substring(0, 70)} `}
                  <button style={{ border:'none', background:'transparent', fontSize:'30px' }} className="btn" onClick={() => setShowMore(!showMore)}>...</button>
               </Title>
            </Flex>

            <Flex justify="space-around" w="100%">
               <Flex direction="column" w="50%">
                  <video
                     style={{
                        height: "auto",
                        borderRadius: "5px",
                        border: "1px solid transparent"
                     }}
                     autoPlay
                     loop
                     muted
                     controls
                     src={course.video[0]?.video}
                  />
                  <Flex mt="30px" w="100%" justify="space-between" align="start">
                     <Title size={20} w="20%">Kurs haqida: </Title>
                     <Text
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.description) }}
                        size={15}
                        w="80%"
                        mt="3px"
                        color="rgba(17, 17, 17, 0.54)"
                        sx={{ fontWeight: 400 }}
                     />
                  </Flex>
               </Flex>
               <div style={{ border: "1px solid #9B9B9B", width: "35%", borderRadius: "30px" }}>
                  <Flex direction="column" p="30px">
                     <Title mb="20px" size={25}>{course.video[0]?.title}</Title>
                     <Title size={24} mb="20px">
                        Avtor:
                        <span style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5 }}>
                           {teacher.first_name} {teacher.last_name}
                        </span>
                     </Title>
                     <Title size={24} color="black">
                        Video haqida:
                        <span style={{ color: "#9B9B9B", fontSize: "20px", marginLeft: "10px" }}>{course.video[0]?.description}</span>
                     </Title>
                  </Flex>
               </div>
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
