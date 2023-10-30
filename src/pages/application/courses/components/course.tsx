import { useNavigate } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";

import cls from "../../../../assets/styles/course.module.scss";

interface CourseProps {
   img?: string;
   name?: string;
   id?: number;
   typeTask?: "viewCourse" | "editCourse";
}

export default function Course({ id, img, name, typeTask = 'viewCourse' }: CourseProps) {
   const navigate = useNavigate();

   return (
      <Card w="264.8px" withBorder radius="md" className={cls.card}>
         <Card.Section className={cls.imageSection}>
            <Image src={img} alt="kurs-image" />
         </Card.Section>
         <Text mb="md" mt="sm" className={cls.text}>
            {name}
         </Text>
         <button className={cls.button} onClick={() => navigate(typeTask === 'viewCourse' ?  `/courses/course/${id}` : `/dashboard/teacher/edit-course/${id}`)}>
            {typeTask === "viewCourse" ? "kursni korish" : "kursni tahrirlash"}
         </button>
      </Card>
   );
}
