import { FunctionComponent } from "react";
import { Box, Text, Title } from "@mantine/core";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
   const i = 0;

   return (
      <>
         <Box h="150px" maw="674px">
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
                  O’zbekistondagi ilk
               </span>{" "}
               <span style={{ marginLeft: "100px" }}> onlayn o’quv platformasi</span>
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
               ml="60px" // Left margin in pixels
               mt="20px" // Top margin in pixels
               mb="20px" // Bottom margin in pixels
               maw="573px"
            >
               Treninglar, seminarlar, vebinar va online darsliklar uchun yagona o`zbek tilidagi platforma. Muvaffaqiyatli insonlar ilmi bilan
               bo`lishamiz.
            </Text>
         </Box>
      </>
   );
};

export default Header;
