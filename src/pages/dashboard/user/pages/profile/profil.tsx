import { FunctionComponent } from "react";
import { Box, Flex } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { Img, Main } from "./companents";


interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
   const { user } = useAuth();

   return (
      <Flex w="100%"
      justify="space-around">
         <Box>
            <Img/>
         </Box>
            <Box w="60%">
            <Main />
            </Box>
      </Flex>
   )
};

export default Profile;
