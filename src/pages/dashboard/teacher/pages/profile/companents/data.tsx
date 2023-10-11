import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";

// import Img from "./img";
import Main from "./main";
import TeacherModal from "./teacherModal";

interface DataProps {}

const Data: FunctionComponent<DataProps> = () => (
   <Box>
      <Flex w="100%" justify="space-around" mt="30px">
         <Box>
            <TeacherModal />
         </Box>
         <Box w="60%">
            <Main />
         </Box>
      </Flex>
   </Box>
);

export default Data;
