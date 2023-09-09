import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex } from "@mantine/core";

interface CourseProps {
    img: string;
    name?: string;
    price?: number;
    view?: string;
}

const SingleCourse: FunctionComponent<CourseProps> = ({ img,name,price,view }) => {
   const navigete = useNavigate();

   return (
      <Box>
        <Flex gap={20}>
            <Box >
             <img style={{width:'300px',height:'300px', backgroundSize:'cover',border:'1px solid #000' }}  src={img} alt="" />
             {!price? (
              <h1>{price}</h1>
             ): <Button>Bepul</Button> }
            </Box>
        </Flex>
      </Box>
   );
};

export default SingleCourse;
