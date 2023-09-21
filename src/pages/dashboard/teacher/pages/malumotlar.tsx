import { Box, Flex, Title } from "@mantine/core";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillCircleFill, BsFillInfoSquareFill } from "react-icons/bs";
import { PiNumberCircleOneFill } from "react-icons/pi";

import video from "../../../../assets/images/video.png";

export default function Malumotlar() {
   return (
      <Flex gap={60}>
         <Box pl={50}>
            <Box>
               <Title color="rgba(0, 106, 255, 1)">Umumiy ma’lumot</Title>
               <Title pt={20} size={18} w={450} sx={{ fontWeight: 500 }}>
                  Talabalaringiz ularga yaxshi tuzilgan, amaliyotda qo'llangan va foydali kurs taqdim etayotganingizga ishonch hosil qilishi eng muhim
                  omildir. Bizning muvaffaqiyatli-spikerlarimiz.asosiy vaqtlarini kurslarni to'g'ri rejalashtirish uchun sarflaydi. Chunki to'g'ri
                  rejalashtirilgan kurs talabalarni qo'ygan maqsadlariga tezroq yetishishlariga yordam beradi.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  1-qadam
               </Title>
               <Title size={24}>Kurs mavzusini tanlang.</Title>
               <Title pt={20} size={18} w={420} sx={{ fontWeight: 500 }}>
                  O'zingiz tajribaga ega va yoqtirgan biror-bir mavzu tanlang. EduOn’da siz tanlagan mavzu bo'yicha talab va raqobatni tushunishga
                  yordam beradigan bir nechta foydali vositalar mavjud.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  2-qadam
               </Title>
               <Title w={430} size={24}>
                  Kurs maqsadingizni va maqsad qilinayotgan auditoriyangizni aniqlab oling.
               </Title>
               <Title pt={20} size={18} w={420} sx={{ fontWeight: 500 }}>
                  Kursingizni yaratishni boshlashdan oldin, siz kimga dars berayotganingizni va kurs tugaguniga qadar o'quvchilaringizni qayerga olib
                  borishni xohlayotganingizni aniqlab olishingiz kerak.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  3-qadam
               </Title>
               <Title w={430} size={24}>
                  Talabalar siz o'rgatayotgan bilimlarni qanday amaliyotda qo'llashlarini aniqlab oling.
               </Title>
               <Title pt={20} size={18} w={430} sx={{ fontWeight: 500 }}>
                  EduOn o'quvchilari o'zlarining bilimlarini amaliy mashg'ulotlarda qo'llashni yaxshi ko'radilar. Siz kiritishingiz mumkin bo'lgan
                  turli xil amaliyot turlari mavjud, shuning uchun siz o'zingizning mavzuingiz uchun eng yaxshisini tanlab olishingiz kerak.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  4-qadam
               </Title>
               <Title size={24}>Kursingizning rejasini yarating.</Title>
               <Title pt={20} size={18} w={430} sx={{ fontWeight: 500 }}>
                  Kursingizning rejasi sizning kursingiz uchun asosdir. Kurslar ketma-ketligini rejalashtirib olsangiz, video tayyorlash jarayonida
                  qiyinchiliklarga duch kelmaysiz.
               </Title>
            </Box>
         </Box>
         <Box>
            <img style={{ width: 600 }} src={video} alt="video" />
            <Flex pt={10} justify="space-between">
               <Flex p={15} w={280} bg="rgba(231, 240, 255, 1)" align="center" gap={15} sx={{ borderRadius: 18 }}>
                  <BiSolidPhoneCall size={24} color="rgba(0, 106, 255, 1)" />
                  <Title size={22} color="rgba(0, 106, 255, 1)" sx={{ fontWeight: 500 }}>
                     Admin bilan aloqa
                  </Title>
               </Flex>
               <Flex p={15} w={300} bg="rgba(231, 240, 255, 1)" align="center" gap={15} sx={{ borderRadius: 18 }}>
                  <BsFillInfoSquareFill size={24} color="rgba(0, 106, 255, 1)" />
                  <Title size={22} color="rgba(0, 106, 255, 1)" sx={{ fontWeight: 500 }}>
                     Foydalanish shartlari
                  </Title>
               </Flex>
            </Flex>
            <Flex justify='space-between' pt={20}>
                <Title  size={0}>.</Title>
               <PiNumberCircleOneFill size={52} color="rgba(0, 106, 255, 1)"  />
            </Flex>

            <Flex align='center' gap={10}>
               <BsFillCircleFill size={24} color="rgba(0, 106, 255, 1)" />
               <Title size={14}> <span style={{fontSize:24, color:'rgba(0, 106, 255, 1)'}}>Eduon </span>  22.05 20:00</Title>
            </Flex>
            <Title pt={10} pl={30} w={470} size={24}>Sizning **** **** **** 4566 kartangizga pul o’tkazildi</Title>
            <Flex pt={50} align='center' gap={10}>
               <BsFillCircleFill size={24} color="rgba(118, 118, 118, 1)" />
               <Title color="rgba(118, 118, 118, 1)" size={14}> <span style={{fontSize:24, color:'rgba(118, 118, 118, 1)'}}>Eduon </span>  22.05 20:00</Title>
            </Flex>
            <Title pt={10} pl={30} w={470} size={24}>Sizning **** **** **** 4566 kartangizga pul o’tkazildi</Title>
         </Box>
      </Flex>
   );
}
