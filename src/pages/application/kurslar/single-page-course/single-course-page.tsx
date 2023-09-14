import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Title } from "@mantine/core";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";

import Footer from "components/footer";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { kursID } = useParams<{ kursID: string }>();
   const navigete = useNavigate();

   return (
      <Box pl={100}  pt={20}>
         <Box pb={100}>
            <Title size={54} sx={{ lineHeight: "normal" }}>
               <span style={{ color: "rgba(0, 106, 255, 1)" }}>Biznesda CRM</span> sistemadan <br /> foydalanish va o‘rnatish
            </Title>

            <Title pt={15} size={18} color="rgba(17, 17, 17, 0.54)" sx={{ fontWeight: 400 }}>
               Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top <br /> menejer, tadbirkorlar uchun Husan Mamasaidovning
               "Strategik marketing" <br /> nomli intensiv kurs <span style={{ color: "rgba(0, 106, 255, 1)" }}>Yana...</span>
            </Title>

            <Flex pt={20} align='center' gap={35}>
               <Title  size={24}>
                  {" "}
                  Avtor:<span style={{ color: "rgba(0, 106, 255, 1)" }}> Husan Mamasaidov</span>{" "}
               </Title>
               <Flex align='center' gap={2}>
                  <AiFillStar size={24} color="rgba(0, 106, 255, 1)" />
                  <Title color="rgba(0, 106, 255, 1)" size={24}>
                  4,2 (12,965)
                  </Title>
               </Flex>

               <Flex align='center' gap={2}>
                  <AiOutlineEye size={24} color="rgba(0, 106, 255, 1)" />
                  <Title color="rgba(0, 106, 255, 1)" size={24}>
                  54,112
                  </Title>
               </Flex>
            </Flex>
         </Box>

         <Footer/>
      </Box>
   );
};

export default SinglePageCourse;
