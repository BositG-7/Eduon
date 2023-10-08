/* eslint-disable jsx-a11y/alt-text */
import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Slider, Title } from "@mantine/core";
import { useSingle } from "modules/courses/hooks/use-single";
import { useSpeaker } from "modules/courses/hooks/use-speaker";
import SpeakersCourse from "pages/application/courses/single-page-course/components/speakers-course";
// eslint-disable-next-line import/order
import { BiSolidShareAlt } from "react-icons/bi";
// eslint-disable-next-line import/order
import { HiVideoCamera } from "react-icons/hi";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { adminCourseSingle } = useParams<{ adminCourseSingle: string }>();
   const navigete = useNavigate();
   const course = useSingle(adminCourseSingle!);

   const { speaker } = course;

   // @ts-expect-error
   console.log(course.video[0]?.video);

   const teacher = useSpeaker(speaker);

   console.log(teacher);

   console.log(course);

   return (
      <Flex>
         <Box pl={50} pt={20}>
            <Flex direction="column" gap={20}>
               <video
                  style={{
                     width: 580,
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
            </Flex>

            <Box w="50vw">
               <Title size={54} sx={{ lineHeight: "normal" }}>
                  {course.name}
               </Title>

               <Title pt={18} size={18} color="rgba(17, 17, 17, 0.54)" sx={{ fontWeight: 400 }}>
                  {course.description}
               </Title>
               <Flex w={580} pt={35} align="center" justify="space-between" gap={35}>
                  <Title sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }} size={24}>
                     Avtor:
                     <img
                        width={100}
                        height={100}
                        style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5, borderRadius: "20px" }}
                        src={teacher.image}
                     />
                  </Title>
               </Flex>
               <Flex justify="space-between" align="center" gap={2}>
                  <span style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5 }}>
                     {/* @ts-ignore */}
                     {teacher.username}
                  </span>
                  <Title
                     sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
                     color="rgba(0,106,255,1)"
                     fw={500}
                     size={20}
                  >
                     <BiSolidShareAlt style={{ marginTop: 5 }} color="rgba(0,106,255,1)" size={20} />
                     Ulashish
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
         </Box>
         <Flex ml={-50} pt={50} direction="column" gap={15}>
            <Flex align="flex-end" justify="space-between">
               <Title>Kurs tarkibi</Title>
               <Title color="rgba(0,106,255,1)" fw={500} size={20}>
                  <Title mb={5} color="gray" fw={500} size={18}>
                     30 ta video
                  </Title>
               </Title>
            </Flex>
            <Flex pt={20} align="flex-end" justify="space-between">
               <Title color="gray" fw={500} size={18}>
                  Progress
               </Title>
               <Title color="gray" fw={500} size={18}>
                  8/30 (28%)
               </Title>
            </Flex>

            <Slider defaultValue={20} max={100} thumbChildren="" />
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
      </Flex>
   );
};

export default SinglePageCourse;
