import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mantine/core";

interface SinglePageCourseProps {}

const SinglePageCourse: FunctionComponent<SinglePageCourseProps> = () => {
   const { kursID } = useParams<{ kursID: string }>();
   const navigete = useNavigate();

   return <Box>hello {kursID} </Box>;
};

export default SinglePageCourse;
