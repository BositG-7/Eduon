import { useNavigate, useParams } from "react-router-dom";
import { Button, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { Course } from "modules/courses/api";

import style from "../../profile/assets/styles/teacherProfile.module.scss";

function DeleteCourse() {
   const [opened, { open, close }] = useDisclosure(false);
   const navigete = useNavigate();
   const { couseEditId = 0 } = useParams();

   const handleModalClose = () => {
      close();
   };
   const handleImageClick = () => {
      open();
   };

   const handleDelete = async () => {
      try {
         await Course.CouseDelete({ id: +couseEditId });
         notifications.show({
            message: "Course successfuly deleted",
            color: "green"
         });

         close();
         navigete("/dashboard");
      } catch (error: any) {
         notifications.show({
            message: error.message
         });
         close();
      }
   };

   const deleteBtn = {
      backgroundColor: "red",
      color: "white",
      height: "50px",
      fontSize: "20px",
      marginTop: "40px",

      "&:hover": {
         color: "white"
      }
   };

   const btnStyle2 = {
      color: "white",
      fontFamily: "Gilroy-Medium",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      borderRadius: "5px",
      border: "3px solid rgba(17, 17, 17, 0.04)"
   };

   const yesBtn = {
      backgroundColor: "red",
      color: "white",
      fontFamily: "Gilroy-Medium",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      borderRadius: "5px",
      border: "3px solid rgba(17, 17, 17, 0.04)"
   };

   return (
      <>
         <Modal opened={opened} onClose={handleModalClose} centered withCloseButton={false} padding="xl">
            <Flex justify="space-around">
               <form>
                  <p>
                     Rostan ham kursni o'chirmoqchimisiz? <br />
                     <span style={{ color: "red" }}>Eslatma: ushbu amal orqali siz o'zingizga tegishli kursni ham o'chirasiz !</span>
                  </p>
                  <Flex justify="space-around" mt="20px">
                     <Button style={btnStyle2} onClick={close}>
                        Yo'q
                     </Button>
                     <Button style={yesBtn} onClick={handleDelete}>
                        Ha
                     </Button>
                  </Flex>
               </form>
            </Flex>
         </Modal>

         <Group className={style.fillup}>
            <Button bg="red" onClick={handleImageClick}>
               Courseni o'chirish
            </Button>
         </Group>
      </>
   );
}

export default DeleteCourse;
