import { FunctionComponent } from "react";
import { Flex, InputBase, Title } from "@mantine/core";

interface FormProps {}

const Form: FunctionComponent<FormProps> = () => {
   const i = 0;

   return (
      <>
         <Flex bg="#006AFF" sx={{ borderRadius: "36px" }} justify="center" gap="20px" align="center" h="670px" w="1300px">
            <Flex gap="30px" w="50%" direction="column" h="100%" justify="center" align="center">
               <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                  <Title
                     sx={{
                        color: "#FAFAFA", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "24px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                  >
                     Ismingiz
                  </Title>
                  <InputBase
                     radius="24px"
                     w="100%"
                     p="30px 24px"
                     bg="rgba(250, 250, 250, 0.24);
                     "
                     sx={{
                        color: "rgba(250, 250, 250, 0.72)", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "18px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                     placeholder="Misol: Husan Mamasaidov"
                  />
               </Flex>
               <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                  <Title
                     sx={{
                        color: "#FAFAFA", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "24px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                  >
                     Elektron pochtangiz
                  </Title>
                  <InputBase
                     w="100%"
                     placeholder="Misol: infonexplatform@gmail.com"
                     radius="24px"
                     p="30px 24px"
                     bg="rgba(250, 250, 250, 0.24);
                     "
                     sx={{
                        color: "rgba(250, 250, 250, 0.72)", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "18px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                  />
               </Flex>
               <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                  <Title
                     sx={{
                        color: "#FAFAFA", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "24px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                  >
                     Telefon raqamingiz
                  </Title>
                  <InputBase
                     placeholder="+998 (xx) xxx-xx-xx"
                     radius="24px"
                     w="100%"
                     p="30px 24px"
                     bg="rgba(250, 250, 250, 0.24);
                     "
                     sx={{
                        color: "rgba(250, 250, 250, 0.72)", // Rangni yuqoridagi sintaktika qoidalari bo'yicha qo'llash kerak
                        fontFamily: "Gilroy-Medium", // Shrift nomini o'zgartiring
                        fontSize: "18px", // O'lchamni o'zgartiring
                        fontStyle: "normal", // Schrift uslubini o'zgartiring (masalan, italic)
                        fontWeight: 400, // Schrift o'lchamini o'zgartiring
                        lineHeight: "normal" // Qatlar orasidagi masofani o'zgartiring
                     }}
                  />
               </Flex>
            </Flex>
         </Flex>
      </>
   );
};

export default Form;
