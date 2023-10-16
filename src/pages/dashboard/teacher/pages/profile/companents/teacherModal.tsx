import { FormEvent, FunctionComponent, useState } from "react";
import { Box, Button, FileInput, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { UpdateImage } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

import Img from "./img";

import style from "../assets/styles/teacherProfile.module.scss";

interface TeacherModalProps {}

const TeacherModal: FunctionComponent<TeacherModalProps> = () => {
   const [opened, { open, close }] = useDisclosure(false);
   const [images, setImages] = useState<File[]>([]);
   const { user } = useAuth();
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         console.log(images);

         const formData = new FormData();

         formData.append("image", images[0]); // Assuming images[0] is the selected file

         // @ts-ignore
         formData.append("email", user?.email);
         // @ts-expect-error
         formData.append("username", user?.username);

         console.log(images[0]);
         console.log(user?.username);
         console.log(user?.email);

         const res = await UpdateImage(formData);

         console.log(res); // Handle the response from UpdateImage
      } catch (error: any) {
         console.log(error);

         notifications.show({
            message: error.messege,
            color: "red"
         });
      }
   };

   const handleImageClick = () => {
      open();
   };

   const handleModalClose = () => {
      close();
   };

   const handleImageUpload = (files: File[]) => {
      if (files) {
         // @ts-expect-error

         setImages([files]);
      } else {
         // Handle the case where no files are selected, e.g., show an error message
         // toast.error("No file selected");
      }
   };

   const btnStyle2 = {
      color: "white",
      fontFamily: "Gilroy-Medium",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      borderRadius: "18px",
      border: "3px solid rgba(17, 17, 17, 0.04)",
      marginTop: "24px"
   };

   return (
      <>
         <Modal opened={opened} onClose={handleModalClose} centered withCloseButton={false}>
            <Flex justify="space-around">
               <form onSubmit={handleSubmit}>
                  <FileInput
                     name="image"
                     label="Rasmni tanlang"
                     placeholder="Rasmni tanlash uchun bosing"
                     required
                     w="60%"
                     // @ts-expect-error
                     onChange={handleImageUpload}
                  />
                  <Button style={btnStyle2} type="submit">
                     Yangilash
                  </Button>
               </form>
            </Flex>
         </Modal>

         <Group position="center" className={style.fillup}>
            <Box onClick={handleImageClick}>
               <Img />
            </Box>
         </Group>
      </>
   );
};

export default TeacherModal;
