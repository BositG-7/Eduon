import { FunctionComponent } from "react";
import { Box, Flex, Text } from "@mantine/core";

interface MainProps {
   value: string;
}

const Main: FunctionComponent<MainProps> = ({ value }) => {
   const Tolovlar = () => {
      const i = 0;

      return (
         <Box w="100%" h="auto" mb="30px">
            <Flex
               justify="space-between"
               p="24px 30px"
               align="center"
               ml="100px"
               mr="200px"
               mt="30px"
               w="80%"
               sx={{ borderRadius: "14px" }}
               bg="rgba(17, 17, 17, 0.02)"
            >
               <Text>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</Text>
            </Flex>
            <Flex
               justify="space-between"
               p="24px 30px"
               align="center"
               ml="100px"
               mr="200px"
               mt="30px"
               w="80%"
               sx={{ borderRadius: "14px" }}
               bg="rgba(17, 17, 17, 0.02)"
            >
               <Text>Kurs pulini bo‘lib to‘lash imkoniyati mavjudmi?</Text>
            </Flex>
            <Flex
               justify="space-between"
               p="24px 30px"
               align="center"
               ml="100px"
               mr="200px"
               mt="30px"
               w="80%"
               sx={{ borderRadius: "14px" }}
               bg="rgba(17, 17, 17, 0.02)"
            >
               <Text>Agar kurs yoqmasa to‘lagan pulimni qaytarib olsam bo’ladimi? Agar mumkin bo‘lsa u jarayon qanday bo‘ladi?</Text>
            </Flex>
            <Flex
               justify="space-between"
               p="24px 30px"
               align="center"
               ml="100px"
               mr="200px"
               mt="30px"
               w="80%"
               sx={{ borderRadius: "14px" }}
               bg="rgba(17, 17, 17, 0.02)"
            >
               <Text>Kurs uchun to‘lovni online amalga oshirsam bo‘ladimi?</Text>
            </Flex>

            <Flex
               justify="space-between"
               p="24px 30px"
               align="center"
               ml="100px"
               mr="200px"
               mt="30px"
               w="80%"
               sx={{ borderRadius: "14px" }}
               bg="rgba(17, 17, 17, 0.02)"
            >
               <Text>Sotib olingan kurslar qancha vaqtga beriladi? Doimiymi yoki ma’lum bir belgilangan muddatgachami?</Text>
            </Flex>
         </Box>
      );
   };

   if (value === "To’lovlar") {
      return (
         <>
            <Box>{Tolovlar()}</Box>
         </>
      );
   }
   if (value === "Barchasi") {
      return (
         <>
            <Box>{Tolovlar()}</Box>
         </>
      );
   }

   return (
      <>
         <Box>
            <h1>{value}</h1>
         </Box>
      </>
   );
};

export default Main;
