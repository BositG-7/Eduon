import { FunctionComponent } from "react";
import { Box, Flex, Text, Title } from "@mantine/core";

import Logos from "../assets/img/Logos.png";

interface PartnerProps {}

const Partner: FunctionComponent<PartnerProps> = () => (
      <>
         <Flex mt="30" justify="center" align="center" direction="column" h="auto" maw="700px">
            <Title
               sx={{
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "#006AFF"
               }}
               mt="50px"
            >
               HAMKORLARIMIZ
            </Title>
            <Text
               sx={{
                  fontSize: "46px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal"
               }}
            >
               InfoNexga{" "}
               <span
                  style={{
                     fontSize: "46px",
                     fontStyle: "normal",
                     fontWeight: 700,
                     lineHeight: "normal",
                     color: "#006AFF"
                  }}
               >
                  hissa
               </span>{" "}
               qo’shganlar
            </Text>
            <Flex gap="30px" mt="20px" justify="space-between" align="center">
               <Box sx={{ border: "1px solid rgba(17, 17, 17, 0.04)", borderRadius: "10px", padding: "0 8px" }} w="152px">
                  <Title>7 ta</Title>
                  <Text>IT va marketing kompaniyalari</Text>
               </Box>
               <img src={Logos} alt="" />
            </Flex>
         </Flex>
      </>
   );

export default Partner;
