import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Text, Title } from "@mantine/core";
// eslint-disable-next-line import/order
import DOMPurify from "dompurify";
// eslint-disable-next-line import/order
import { useSingle } from "modules/courses/hooks/use-single";
import { useSpeaker } from "modules/courses/hooks/use-speaker";

import Footer from "components/footer";

import Demo from "./components/modal";
import SpeakersCourse from "./components/speakers-course";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { courseID = "" } = useParams<{ courseID: string }>();
   const navigete = useNavigate();
   const course = useSingle(courseID);

   const { speaker = 1 } = course;

   const teacher = useSpeaker(speaker);

   console.log(teacher);

   return (
      <Box pl={100} pt={20}>
         <Flex justify="space-between" pr={100}>
            <Flex direction="column" h={300} justify="space-between" w="50vw">
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
                  // @ts-expect-error
                  src={course.video[0]?.video}
               />

               <Title fw={500} size={24}>
                  {/* @ts-expect-error */}
                  <Title>{course.video[0]?.title}</Title>
                  {/* @ts-ignore */}
                  {course?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span style={{ color: "rgba(17, 17, 17, 0.36)" }}>uzs</span>{" "}
                  {/* @ts-expect-error */}
                  <Text color="#9B9B9B">{course.video[0]?.description} </Text>
               </Title>
               <Demo />
            </Flex>
         </Flex>
         <Box pt={50}>
            <Title mb={20} sx={{ textAlign: "center" }}>
               Spiker va o’xshash kurslar
            </Title>

            <Flex sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }} gap={20} mb={30}>
               {teacher.courses.map((item, id) => (
                  // @ts-expect-error
                  // eslint-disable-next-line react/no-array-index-key
                  <SpeakersCourse key={id} id={item.id} name={item.name} price={item.price} image={item.image} />
               ))}
            </Flex>
         </Box>

         <Footer />
      </Box>
   );
};

export default SinglePageCourse;
