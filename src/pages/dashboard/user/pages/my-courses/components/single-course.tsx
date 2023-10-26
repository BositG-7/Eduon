import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Progress, Title } from "@mantine/core";
import DOMPurify from "dompurify";
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
   const course = useSingle(adminCourseSingle!);

   const { speaker } = course;

   const teacher = useSpeaker(`${speaker}`);

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
                  src={course.video[0].video}
               />
            </Flex>

            <Box w="50vw">
               <Title size={54} sx={{ lineHeight: "normal" }}>
                  {course.name}
               </Title>

               <Title
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.description) }}
                  pt={18}
                  size={18}
                  color="rgba(17, 17, 17, 0.54)"
                  sx={{ fontWeight: 400 }}
               />
               <Flex w={580} pt={35} align="center" justify="space-between" gap={35}>
                  <Title size={24}>
                     Avtor:
                     <span style={{ color: "rgba(0, 106, 255, 1)", marginLeft: 5 }}>
                        {/* @ts-ignore */}
                        {teacher.username}
                     </span>
                  </Title>

                  <Flex align="center" gap={2}>
                     <BiSolidShareAlt style={{ marginTop: 5 }} color="rgba(0,106,255,1)" size={20} />
                     <Title color="rgba(0,106,255,1)" fw={500} size={20}>
                        Ulashish
                     </Title>
                  </Flex>
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

            <Progress value={28} />
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
