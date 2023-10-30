import { FunctionComponent } from "react";
import { Box, Title as MantineTitle } from "@mantine/core";

interface TitleProps {}

const Title: FunctionComponent<TitleProps> = () => (
   <>
      <Box h="150px" maw="579px">
         <MantineTitle
            sx={{
               color: "#111", // Text color
               fontSize: 36, // Font size in pixels
               fontStyle: "normal", // Font style (normal in this case)
               fontWeight: 700 // Font weight (700 for bold),
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
               Ko’p beriladigan
            </span>{" "}
            <span style={{ marginLeft: "100px" }}> savollarga javoblar</span>
         </MantineTitle>
      </Box>
   </>
);

export default Title;
