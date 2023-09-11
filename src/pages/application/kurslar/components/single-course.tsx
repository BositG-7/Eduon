import { FunctionComponent } from "react";
import {  useNavigate } from "react-router-dom";
import { Box, Button, Divider, Flex, Title } from "@mantine/core";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";

interface CourseProps {
   img: string;
   name?: string;
   price?: number;
   view?: string;
}

const SingleCourse: FunctionComponent<CourseProps> = ({ img, name, price, view }) => {
   const navigete = useNavigate();

   return (
      <Box>
         <Flex>
            <Box>
                  <img
                     style={{
                        width: "300px",
                        height: "250px",
                        backgroundSize: "cover",
                        borderRadius: "25px",
                        border:'1px solid #000'
                     }}
                     src={img}
                     alt=""
                  />

               <Flex mt={10} justify="space-between">
                  <Title color="gray" size={16}>
                     {name}
                  </Title>
                  <BsBookmarkDash size={20} color="blue" />
               </Flex>

               <Flex mt={4} gap={15}>
                  <Flex gap={5}>
                     <AiFillStar color="rgba(0, 106, 255, 1)" />
                     <Title color="rgba(0, 106, 255, 1)" size={12}>
                        4,2 (12,965)
                     </Title>
                  </Flex>
                  <Flex gap={2}>
                     <AiOutlineEye color="rgba(0, 106, 255, 1)" />
                     <Title color="rgba(0, 106, 255, 1)" size={12}>
                        {view}
                     </Title>
                  </Flex>
               </Flex>
               <Divider my="sm" />
               <Flex align="center" justify="space-between">
                  {price ? (
                     <Title color="gray" size={16}>
                        {price} so'm
                     </Title>
                  ) : (
                     <Button>Bepul</Button>
                  )}

                  <Button variant="light">Xarid qilish</Button>
               </Flex>
               {/* {!price ? <h1>{price}</h1> : <Button>Bepul</Button>} */}
            </Box>
         </Flex>
      </Box>
   );
};

export default SingleCourse;
