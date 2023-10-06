import { FormEvent, useState } from "react";
import { Box, Button, FileInput, Flex, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UpdateImage } from "modules/auth/api";

// Import Img component if it exists
import Img from "./img";

import style from "../assets/styles/profile.module.scss";

function Demo() {
   const [opened, { open, close }] = useDisclosure(false);
   const [images, setImages] = useState([]);

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         console.log(images);

         setImages(images[0]);

         // @ts-ignore
         const res = await UpdateImage({ images });

         console.log(res); // UpdateImage işleminin cevabını işleyin
      } catch (error: any) {
         console.log(error.message);
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
      // padding: "14px 45px",
      marginTop: "24px"
   };

   return (
      <>
         <Modal 
          opened={opened} onClose={handleModalClose} centered withCloseButton={false}>
            <Flex justify="space-around">
               <form onSubmit={handleSubmit}>
                  <FileInput
                     name="image"
                     label="Rasmni tanlang"
                     placeholder="Rasmni tanlash uchun bosing"
                     required
                     w="60%"
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
