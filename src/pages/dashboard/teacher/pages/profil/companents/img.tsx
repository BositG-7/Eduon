import { FunctionComponent } from "react";
import { Box, Image } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import userImage from "../assets/imgs/Photo.png"

interface ImgProps {}

const Img: FunctionComponent<ImgProps> = () => {
   const { user } = useAuth();

   return (
      <Box>
      <Image maw="177px" mx="0"  radius="md" src={userImage} alt="User Image" />
      </Box>
   )
};

export default Img