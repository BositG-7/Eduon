import { FunctionComponent } from "react";
import { Box, Flex, Text } from "@mantine/core";

import img2 from "../assets/img/icons/Calling.svg";
import img1 from "../assets/img/icons/Location.svg";
import img3 from "../assets/img/icons/Message.svg";

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
   const i = 0;

   return (
      <>
         <Flex justify="center" mt="30px" gap="30px" align="center" h="auto" w="1300px">
            <Flex
               justify="center"
               align="center"
               direction="column"
               gap="20px"
               sx={{
                  border: "1px solid rgba(17, 17, 17, 0.04)",
                  borderRadius: "24px",
                  boxShadow: "0px 24px 30px -2px rgba(17, 17, 17, 0.04)",
                  background: "#FFF",
                  width: "190px",
                  height: "130px"
               }}
            >
               <Box p="8px" w="62px" h="54px" sx={{ borderRadius: "14px", background: "#E7F0FF" }}>
                  <img width="100%" height="100%" src={img1} alt="" />
               </Box>
               <Text
                  sx={{
                     color: "#111",
                     fontFamily: "Gilroy-Medium",
                     fontSize: "16px",
                     fontStyle: "normal",
                     fontWeight: 400,
                     lineHeight: "normal"
                  }}
               >
                  Shota Rustaveli 6-uy
               </Text>
            </Flex>

            <Flex
               justify="center"
               align="center"
               direction="column"
               gap="20px"
               sx={{
                  border: "1px solid rgba(17, 17, 17, 0.04)",
                  borderRadius: "24px",
                  boxShadow: "0px 24px 30px -2px rgba(17, 17, 17, 0.04)",
                  background: "#FFF",
                  width: "190px",
                  height: "130px"
               }}
            >
               <Box p="8px" w="62px" h="54px" sx={{ borderRadius: "14px", background: "#E7F0FF" }}>
                  <img width="100%" height="100%" src={img2} alt="" />
               </Box>
               <Text
                  sx={{
                     color: "#111",
                     fontFamily: "Gilroy-Medium",
                     fontSize: "16px",
                     fontStyle: "normal",
                     fontWeight: 400,
                     lineHeight: "normal"
                  }}
               >
                  (99) 702-00-88
               </Text>
            </Flex>

            <Flex
               justify="center"
               align="center"
               direction="column"
               sx={{
                  border: "1px solid rgba(17, 17, 17, 0.04)",
                  borderRadius: "24px",
                  boxShadow: "0px 24px 30px -2px rgba(17, 17, 17, 0.04)",
                  background: "#FFF",
                  width: "190px",
                  height: "130px"
               }}
               gap="20px"
            >
               <Box p="8px" w="62px" h="54px" sx={{ borderRadius: "14px", background: "#E7F0FF" }}>
                  <img width="100%" height="100%" src={img3} alt="" />
               </Box>
               <Text
                  sx={{
                     color: "#111",
                     fontFamily: "Gilroy-Medium",
                     fontSize: "16px",
                     fontStyle: "normal",
                     fontWeight: 400,
                     lineHeight: "normal"
                  }}
               >
                  eduon@gmail.com
               </Text>
            </Flex>
         </Flex>
      </>
   );
};

export default Category;
