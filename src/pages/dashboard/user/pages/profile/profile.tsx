import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { Demo,  Main } from "./companents";


interface ProfileProps {}

const ProfileUser: FunctionComponent<ProfileProps> = () => {
   const { user } = useAuth();

   return (
      <Flex w="100%"
      justify="space-around">
         <Box>
      
            <Demo/>
         </Box>
            <Box w="60%">
            <Main />
            </Box>
      </Flex>
   )
};

export default ProfileUser;
