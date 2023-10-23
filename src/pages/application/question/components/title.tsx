import { FunctionComponent } from "react";
import { Box, Title } from "@mantine/core";

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
         </Box>
      </>
   );
};

export default Titlee;
