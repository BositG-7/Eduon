import { FunctionComponent } from "react";
import { Box, Flex, InputBase, Title } from "@mantine/core";

interface FormProps {}

const Form: FunctionComponent<FormProps> = () => {
   const i = 0;

   return (
      <>
         <Flex bg="#006AFF" sx={{ borderRadius: "36px" }} justify="center" mt="30px" gap="30px" align="center" h="670px" w="1300px">
            <Box>
               <Box>
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
                  <InputBase placeholder="Misol: Husan Mamasaidov" bg="rgba(250, 250, 250, 0.24)" sx={{ borderRadius: "24px" }} />
               </Box>
            </Box>
         </Flex>
      </>
   );
};

export default Form;
