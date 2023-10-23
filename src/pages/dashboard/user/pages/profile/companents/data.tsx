import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";

import Main from "./main";
import Demo from "./modal";

// import Img from "./img";

interface DataProps {}

const Data: FunctionComponent<DataProps> = () => (
   <Box>
      <Flex w="100%" justify="space-around" mt="30px">
         <Box>
            <Demo/>
         </Box>
         <Box w="60%">
            <Main />
         </Box>
      </Flex>
   </Box>
);

export default Data;
