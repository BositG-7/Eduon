import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Divider, Flex, Title } from "@mantine/core";
// eslint-disable-next-line import/order
import { useSingle } from "modules/courses/hooks/use-single";
import { useSpeaker } from "modules/courses/hooks/use-speaker";
// eslint-disable-next-line import/order
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
// eslint-disable-next-line import/order
import { HiVideoCamera } from "react-icons/hi";

import Footer from "components/footer";

import SpeakersCourse from "./components/speakers-course";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { kursID = "" } = useParams<{ kursID: string }>();
   const navigete = useNavigate();
   const  course  = useSingle(kursID);

   const  {speaker=2} = course;

   const teacher  = useSpeaker(speaker);


   return (
      <Box pl={100} pt={20}>
         <Flex justify="space-between" pr={100}>
            <Box w="50vw">
               <Title size={54} sx={{ lineHeight: "normal" }}>

                  {course.name}
               </Title>

               <Title pt={15} size={18} color="rgba(17, 17, 17, 0.54)" sx={{ fontWeight: 400 }}>

                  {course.description}
               </Title>
               <Flex pt={20} align="center" gap={35}>
                  <Title size={24}>
                     Avtor:
                     <span style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5 }}>
                        {/* @ts-ignore */}
                        {teacher.first_name}
                     </span>
                  </Title>
                  <Flex align="center" gap={2}>
                     <AiFillStar size={24} color="rgba(0, 106, 255, 1)" />
                     <Title color="rgba(0, 106, 255, 1)" size={24}>
                        4,2 (12,965)
                     </Title>
                  </Flex>

                  <Flex align="center" gap={2}>
                     <AiOutlineEye size={24} color="rgba(0, 106, 255, 1)" />
                     <Title color="rgba(0, 106, 255, 1)" size={24}>
                        54,112
                     </Title>
                  </Flex>
               </Flex>
               <Divider my={20} />

               <Flex pt={50} direction="column" gap={15}>
                  <Title>Kurs tarkibi</Title>

                  <Flex gap={10} p={15} sx={{ borderRadius: 10 }} align="center" bg="rgba(17, 17, 17, 0.02)">
                     <HiVideoCamera size={20} color="rgba(0, 106, 255, 1)" />
                     <Title size={18} color="rgba(17, 17, 17, 0.72)">
                        1. Strategik marketing (treyler)
                     </Title>
                  </Flex>
                  <Flex gap={10} p={15} sx={{ borderRadius: 10 }} align="center" bg="rgba(17, 17, 17, 0.02)">
                     <HiVideoCamera size={20} color="rgba(0, 106, 255, 1)" />
                     <Title size={18} color="rgba(17, 17, 17, 0.72)">
                        2. SWOT analiz qilish
                     </Title>
                  </Flex>
                  <Flex gap={10} p={15} sx={{ borderRadius: 10 }} align="center" bg="rgba(17, 17, 17, 0.02)">
                     <HiVideoCamera size={20} color="rgba(0, 106, 255, 1)" />
                     <Title size={18} color="rgba(17, 17, 17, 0.72)">
                        3. Ish muhiti
                     </Title>
                  </Flex>
                  <Flex gap={10} p={15} sx={{ borderRadius: 10 }} align="center" bg="rgba(17, 17, 17, 0.02)">
                     <HiVideoCamera size={20} color="rgba(0, 106, 255, 1)" />
                     <Title size={18} color="rgba(17, 17, 17, 0.72)">
                        4. Biznesda politika qanday bo'ladi
                     </Title>
                  </Flex>
               </Flex>

               <Divider my={20} />

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
                  src={course?.video.video}
               />
               <Title fw={500} size={24}>
                  12,400,000 <span style={{ color: "rgba(17, 17, 17, 0.36)" }}>so'm</span>{" "}
               </Title>

               <Button variant="light" h={50} w={380} sx={{ borderRadius: 10 }}>
                  Xarid qilish
               </Button>
            </Flex>
         </Flex>

         <Footer />
      </Box>
   );
};

export default SinglePageCourse;
