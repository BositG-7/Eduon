import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface SingleKursProps {}

const SingleCourse: FunctionComponent<SingleKursProps> = () => {
   const { adminKursSingle } = useParams<{ adminKursSingle: string }>();

   return <h1>{adminKursSingle}</h1>;
};

export default SingleCourse;
