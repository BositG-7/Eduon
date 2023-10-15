import { FunctionComponent } from "react";
import { Box } from "@mantine/core";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
   const i = 0;

   return (
      <Box h="150px" maw="100%">
         <h1>Main</h1>
      </Box>
   );
};

export default Main;
