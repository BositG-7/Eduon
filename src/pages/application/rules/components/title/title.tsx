import { FunctionComponent } from "react";
import { Box, Text } from "@mantine/core";

interface TitleProps {}

const Title: FunctionComponent<TitleProps> = () => (
      <Box h="150px" maw="500px">
         <Text
            ml="40px"
            sx={{
               color: "#111", // Matn rangi
               fontSize: 36, // Matn o'lchami pikselda
               fontStyle: "normal", // Shriftya uslubi (bu holatda oddiy)
               fontWeight: 700 // Shriftya og'irlik (700 juda qalin)
            }}
         >
            <span
               style={{
                  color: "#006AFF", // Matn rangi
                  fontSize: 72, // Matn o'lchami pikselda
                  fontStyle: "normal", // Shriftya uslubi (bu holatda oddiy)
                  fontWeight: 700 // Shriftya og'irlik (700 juda qalin)
               }}
            >
               Platformadan
            </span>{" "}
            <span style={{ marginLeft: "50px" }}>foydalanish shartlari</span>
         </Text>
      </Box>
   );

export default Title;
