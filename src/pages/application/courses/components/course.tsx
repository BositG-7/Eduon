import { useNavigate } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";

import classes from "../../../../assets/styles/course.module.scss";

interface CourseProps {
   img?: string;
   name?: string;
   id?: number;
}

export default function Course({ id, img, name }: CourseProps) {
   const navigate = useNavigate();

   return (
      <Card withBorder radius="md" className={classes.card}>
         <Card.Section className={classes.imageSection}>
            <Image src={img} alt="kurs-image" />
         </Card.Section>
         <Text mb="md" mt="sm" className={classes.text}>
            {name}
         </Text>
         <button className={classes.button} onClick={() => navigate(`/courses/course/${id}`)}>
            kursni korish
         </button>
      </Card>
   );
}
