import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";
import { useAuth } from "modules/auth/context";

// import Img from "./img";
import Main from "./main";
import TeacherModal from "./teacherModal";




interface DataProps {}

const Data: FunctionComponent<DataProps> = () => {
   const { user } = useAuth();


   return (
      <Box>
      
         <Flex w="100%" justify="space-around" mt="30px">
         <Box>
            <TeacherModal/>
         </Box>
            <Box w="60%">
            <Main />
            </Box>
         </Flex>
      </Box>
   );
};

export default Data