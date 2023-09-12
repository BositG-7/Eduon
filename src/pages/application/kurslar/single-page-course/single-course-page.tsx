import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mantine/core";

interface SinglePageCourseProps {
  
}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const navigete = useNavigate();

   return (
      <Box>
        hello nilufar

      </Box>
   );
};

export default SinglePageCourse;