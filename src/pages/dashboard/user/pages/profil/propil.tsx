import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { Img, Main } from "./companents";


interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
   const { user } = useAuth();

   return (
      <Flex w="100%"
      justify="space-around">
         <Img/>
         <Main/>
      </Flex>
   )
};

export default Profile;
