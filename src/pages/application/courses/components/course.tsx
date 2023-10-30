import { useNavigate } from "react-router-dom";
import { Card, Image, Text } from "@mantine/core";

import cls from "../../../../assets/styles/course.module.scss";

interface CourseProps {
   img?: string;
   name?: string;
   id?: number;
   typeTask?: "viewCourse" | "editCourse";
}

export default function Course({ id, img, name, typeTask = "viewCourse" }: CourseProps) {
   const navigate = useNavigate();
   let courseName = ''

   if(name?.length! > 46) {
    courseName = `${name?.substring(0, 46)!}...`
   }
   else {
      courseName = name!
   }
   return (
      <Card w="280px" withBorder radius="md" className={cls.card}>
         <Card.Section className={cls.imageSection}>
            <Image src={img} alt="kurs-image" onClick={() => navigate(`/courses/course/${id}`)}/>
         </Card.Section>
         <Text mb="md" mt="sm" className={cls.text}>
            {courseName}
         </Text>
         {typeTask === "viewCourse" ? (
            <button className={cls.button} onClick={() => navigate(`/courses/course/${id}`)}>
               kursni korish
            </button>
         ) : (
            <button className={cls.editButton} onClick={() => navigate(`/dashboard/teacher/edit-course/${id}`)}>
               kursni tahrirlash
            </button>
         )}
      </Card>
   );
}
