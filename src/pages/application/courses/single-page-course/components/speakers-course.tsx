import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Flex, Title } from "@mantine/core";

import Demo from "./modal";

interface CourseProps {
   price?: number;
   name?: string;
   image?: string;
   id?: number;
}

const SpeakersCourse: FunctionComponent<CourseProps> = ({ price, name, image, id }: CourseProps) => {
   const navigete = useNavigate();

   return (
      <Box>
         <Flex>
            <Box>
               <img
                  onClick={() => {
                     navigete(`/courses/course/${id}`);
                     window.location.href = `/courses/course/${id}`;
                  }}
                  style={{
                     width: "200px",
                     height: "150px",
                     backgroundSize: "cover",
                     borderRadius: "25px"
                  }}
                  src={image}
                  alt=""
               />

               <Flex mt={10} justify="space-between">
                  <Title color="gray" size={14}>
                     {name}
                  </Title>
               </Flex>

               <Divider my="sm" />
               <Flex align="center" justify="space-between">
                  <Title size={12} color="gray">
                     {price ? (
                        <Title color="gray" size={16}>
                           {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} uzs
                        </Title>
                     ) : (
                        <Button>Bepul</Button>
                     )}
                  </Title>

                  <Demo />
               </Flex>
               {/* {!price ? <h1>{price}</h1> : <Button>Bepul</Button>} */}
            </Box>
         </Flex>
      </Box>
   );
};

export default SpeakersCourse;
