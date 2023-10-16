import React, { FunctionComponent, useState } from "react";
import { Box, Image } from "@mantine/core";
// import { UpdateImage } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

import userImage from "../assets/imegs/user.svg";

interface ImgProps {}

const Img: FunctionComponent<ImgProps> = () => {
   const { user } = useAuth();
   const [selectedImage, setSelectedImage] = useState<File | null>(null);

   return (
      <Box>
         {/* Display selected image */}
         <Image
            maw="177px"
            mx="0"
            radius="md"
            src={user?.img ? user.img : userImage}
            alt="User Image"
            // cursor="pointer"  onClick={handleImageClick}
         />
      </Box>
   );
};

export default Img;
