import { FunctionComponent } from "react";
import { Box, Flex, InputBase, Text, Title } from "@mantine/core";
import { AiOutlineSend } from "react-icons/ai";

interface TitleProps {}

const Titlee: FunctionComponent<TitleProps> = () => {
   const i = 0;

   return (
      <>
         <Box h="150px" maw="579px">
            <Title
               sx={{
                  color: "#111", // Text color
                  fontFamily: "Samsung Sharp Sans", // Font family
                  fontSize: 36, // Font size in pixels
                  fontStyle: "normal", // Font style (normal in this case)
                  fontWeight: 700 // Font weight (700 for bold),
               }}
            >
               {" "}
               <span
                  style={{
                     color: "#006AFF", // Text color
                     fontFamily: "Samsung Sharp Sans", // Font family
                     fontSize: 72,
                     fontStyle: "normal", // Font style (normal in this case)
                     fontWeight: 700
                  }}
               >
                  Ko’p beriladigan
               </span>{" "}
               <span style={{ marginLeft: "100px" }}> savollarga javoblar</span>
            </Title>
            <Text
               color="rgba(17, 17, 17, 0.72)" // Text color in RGBA format
               sx={{
                  fontFamily: "Gilroy-Medium", // Font family
                  fontSize: 18, // Font size in pixels
                  fontStyle: "normal", // Font style (normal in this case)
                  fontWeight: 400, // Font weight (400 for normal)
                  lineHeight: "normal" // Line height (normal)
               }}
               ml="20px" // Left margin in pixels
               mt="20px" // Top margin in pixels
               mb="20px" // Bottom margin in pixels
            >
               Siz ham savol yo’llashingiz mumkin, 6 soat ichida javob beramiz
            </Text>
            <Flex>
               <InputBase
                  autoFocus
                  placeholder="Savolingizni yozing..."
                  radius="5px"
                  w="92%"
                  bg="#E7F0FF"
                  p="8px"
               />
               <Box sx={{ position: "relative", top: "17px", right: "30px" }}>
                  <AiOutlineSend />
               </Box>
            </Flex>
         </Box>
      </>
   );
};

export default Titlee;
