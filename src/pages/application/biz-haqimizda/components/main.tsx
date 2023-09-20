import { FunctionComponent } from "react";
import { Box, Flex, Text, Title } from "@mantine/core";

import img2 from "../assets/img/Rectangle 89 (1).svg";
import img1 from "../assets/img/Rectangle 89.svg";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
   const i = 0;

   return (
      <>
         <Flex justify="center" mt="30px" align="center" direction="column" h="auto" w="1300px">
            <Flex p="24px" w="100%" justify="space-between" align="center">
               <Box>
                  <img src={img1} alt="" />
               </Box>
               <Flex direction="column" justify="center" align="center" gap="20px">
                  <Title
                     sx={{
                        fontSize: "46px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        color: "#006AFF"
                     }}
                  >
                     Biz haqimizda
                  </Title>
                  <Text
                     sx={{
                        maxWidth: "484px",
                        color: "#111",
                        fontFamily: "Gilroy",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500
                     }}
                  >
                     InfoNex MFaktor tomonidan har kimga, hamma joyda hayotni o'zgartiradigan ta'lim tajribalarini taqdim etish niyatida asos
                     solingan.
                  </Text>
                  <Text
                     sx={{
                        maxWidth: "484px",
                        color: "#111",
                        fontFamily: "Gilroy",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500
                     }}
                  >
                     Hozirda bu O'zbekiston bo'ylab million o'quvchi kelajak ko'nikmalarini o'rganish uchun yetakchi onlayn ta'lim platformasi.
                  </Text>
                  <Text
                     sx={{
                        maxWidth: "484px",
                        color: "#111",
                        fontFamily: "Gilroy",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500
                     }}
                  >
                     O'zbekistonning dan ortiq eng yaxshi universitetlari va soha o'qituvchilari InfoNex bilan hamkorlik qilib, kurslar,
                     mutaxassisliklar, sertifikatlar va diplom dasturlarini taklif qilmoqdalar.
                  </Text>
               </Flex>
            </Flex>

            <Flex p="24px" w="100%" justify="space-between" align="center">
               <Flex direction="column" justify="center" gap="20px">
                  <Title
                     sx={{
                        fontSize: "46px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        color: "#006AFF"
                     }}
                  >
                     Kurs haqida
                  </Title>
                  <Text
                     sx={{
                        maxWidth: "484px",
                        color: "#111",
                        fontFamily: "Gilroy",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500
                     }}
                  >
                     InfoNex dagi har bir kursni jahon miqyosidagi universitetlar va kompaniyalarning ustozlari o'qitadilar, shuning uchun siz istagan
                     vaqtingizda va istagan joyda yangi narsalarni o'rganishingiz mumkin.
                  </Text>
                  <Text
                     sx={{
                        maxWidth: "484px",
                        color: "#111",
                        fontFamily: "Gilroy",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500
                     }}
                  >
                     Yuzlab kurslar talab bo'yicha video ma'ruzalar, uy vazifalari mashqlari va jamoatchilik muhokamalari forumlariga kirish
                     imkoniyatini beradi. Har kuni o'zingiz uchun yangilik kashf eting!
                  </Text>
               </Flex>
               <Box>
                  <img src={img2} alt="" />
               </Box>
            </Flex>
         </Flex>
      </>
   );
};

export default Main;
