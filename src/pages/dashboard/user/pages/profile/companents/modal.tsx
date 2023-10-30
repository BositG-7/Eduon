import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FileInput, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UpdateImage } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

import Img from "./img";

import style from "../assets/styles/profile.module.scss";

function Demo() {
   const [opened, { open, close }] = useDisclosure(false);
   const [images, setImages] = useState([]);
   const { user } = useAuth();
   const navigete = useNavigate();

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         const formData = new FormData();

         formData.append("image", images[0]);
         // @ts-expect-error
         formData.append("username", user?.username);
         // @ts-expect-error

         formData.append("email", user?.email);

         const res = await UpdateImage(formData);

         navigete("/dashboard");
      } catch (error: any) {
         console.error(error.message);
      }
   };

   const handleImageClick = () => {
      open();
   };

   const handleModalClose = () => {
      close();
   };

   const handleImageUpload = (files: any) => {
      if (files) {
         // @ts-expect-error
         setImages([files]);
      } else {
         // Dosya seçilmediğinde bir hata mesajı gösterme işlemini burada yapabilirsiniz.
         // Örnek olarak React-Toastify kullanarak:
         // toast.error("Dosya seçilmedi");
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
      margin: "50px 100px 50px 100px"
   };

   return (
      <>
         <Modal opened={opened} onClose={handleModalClose} centered withCloseButton={false} padding="xm">
            <Flex justify="space-around">
               <form onSubmit={handleSubmit}>
                  <FileInput
                     style={{ marginTop: "30px", fontWeight: "bold" }}
                     name="image"
                     label="Rasmni tanlang"
                     placeholder="Rasmni tanlash uchun bosing"
                     required
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
}

export default Demo;
