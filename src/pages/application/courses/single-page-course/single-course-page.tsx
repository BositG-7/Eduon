import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Title } from "@mantine/core";
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

   return (
      <Box pl={100} pt={20}>
         <Flex justify="space-between" pr={100}>
            <Box w="50vw">
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

               <Box pt={50}>
                  <Title>Spiker va o’xshash kurslar</Title>

                  <Flex pt={50} pb={100} gap={50}>
                     <SpeakersCourse />
                     <SpeakersCourse />
                  </Flex>
               </Box>
            </Box>

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
                  12,400,000 <span style={{ color: "rgba(17, 17, 17, 0.36)" }}>so'm</span>{" "}
               </Title>
               <Demo />
            </Flex>
         </Flex>

         <Footer />
      </Box>
   );
};

export default SinglePageCourse;
