import { FunctionComponent } from "react";
import { Flex, Text, Title } from "@mantine/core";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
   const i = 0;

   return (
      <>
         <Flex mt="30" justify="center" align="center" direction="column" h="auto" maw="674px">
            <Title
               color="#111"
               weight={700}
               sx={{
                  fontSize: 36, // Font size in pixels
                  fontStyle: "normal" // Font style (normal in this case)
               }}
            >
               {" "}
               <span
                  style={{
                     color: "#006AFF", // Text color
                     fontSize: 72,
                     fontStyle: "normal", // Font style (normal in this case)
                     fontWeight: 700
                  }}
               >
                  O’zbekistondagi ilk
               </span>{" "}
               <p style={{ textAlign: "center" }}>onlayn o’quv platformasi</p>
            </Title>
            <Text
               color="rgba(17, 17, 17, 0.72)" // Text color in RGBA format
               sx={{
                  fontSize: 18, // Font size in pixels
                  fontStyle: "normal", // Font style (normal in this case)
                  fontWeight: 500, // Font weight (400 for normal)
                  lineHeight: "normal" // Line height (normal)
               }}
               align="center"
               mt="20px" // Top margin in pixels
               mb="20px" // Bottom margin in pixels
               maw="573px"
            >
               Treninglar, seminarlar, vebinar va online darsliklar uchun yagona o`zbek tilidagi platforma. Muvaffaqiyatli insonlar ilmi bilan
               bo`lishamiz.
            </Text>
         </Flex>
      </>
   );
};

export default Header;
