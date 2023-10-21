import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Flex, Title } from "@mantine/core";

import Demo from "./modal";

interface CourseProps {
   img?: string;
   name?: string;
   price?: number;
   view?: string;
   id?: string;
   rating?: number;
}

const Course: FunctionComponent<CourseProps> = ({ id, img, name, price, view, rating }) => {
   const navigete = useNavigate();

   return (
      <Box>
         <Flex>
            <Box>
               <Link to={`/courses/course/${id}`}>
                  <img
                     style={{
                        width: "300px",
                        height: "250px",
                        backgroundSize: "cover",
                        borderRadius: "25px",
                        border: "1px solid #000"
                     }}
                     src={img}
                     alt=""
                  />
               </Link>

               <Flex mt={10} justify="space-between">
                  <Title color="gray" size={16}>
                     {name}
                  </Title>
               </Flex>

               <Divider my="sm" />
               <Flex align="center" justify="space-between">
                  {price ? (
                     <Title color="gray" size={16}>
                        {price.toFixed(2)} so'm
                     </Title>
                  ) : (
                     <Button>Bepul</Button>
                  )}
                  <Demo />
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default Course;
