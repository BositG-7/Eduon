import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface SingleKursProps {}

const SingleCourse: FunctionComponent<SingleKursProps> = () => {
   const { adminCourseSingle } = useParams<{ adminCourseSingle: string }>();

   return <h1>{adminCourseSingle}</h1>;
};

export default SingleCourse;
