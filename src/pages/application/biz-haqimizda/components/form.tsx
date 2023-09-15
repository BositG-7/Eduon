import { FunctionComponent, useState } from "react";
import { Button, Flex, InputBase, Textarea, Title } from "@mantine/core";

interface FormProps {}

const Form: FunctionComponent<FormProps> = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData(prevData => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Bu erda `formData` ni ishlatishingiz mumkin, masalan, uni serverga yuborishingiz mumkin
   };

   return (
      <form onSubmit={handleSubmit}>
         <Flex direction="column" h="670px" justify="center" align="center" gap="20px" w="1300px" bg="#006AFF">
            <Flex sx={{ borderRadius: "36px" }} justify="center" gap="20px" align="center" w="100%" h="80%">
               <Flex gap="30px" w="50%" direction="column" h="100%" justify="center" align="center">
                  {/* Ismingiz inputi */}
                  <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                     <Title
                        sx={{
                           color: "#FAFAFA",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "24px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                     >
                        Ismingiz
                     </Title>
                     <InputBase
                        name="name"
                        radius="24px"
                        w="100%"
                        p="30px 24px"
                        bg="rgba(250, 250, 250, 0.24)"
                        sx={{
                           color: "rgba(250, 250, 250, 0.72)",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "18px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                        placeholder="Misol: Husan Mamasaidov"
                        value={formData.name}
                        onChange={handleChange}
                     />
                  </Flex>
                  {/* Elektron pochta inputi */}
                  <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                     <Title
                        sx={{
                           color: "#FAFAFA",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "24px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                     >
                        Elektron pochtangiz
                     </Title>
                     <InputBase
                        name="email"
                        w="100%"
                        placeholder="Misol: infonexplatform@gmail.com"
                        radius="24px"
                        p="30px 24px"
                        bg="rgba(250, 250, 250, 0.24)"
                        sx={{
                           color: "rgba(250, 250, 250, 0.72)",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "18px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </Flex>
                  {/* Telefon raqam inputi */}
                  <Flex w="100%" direction="column" align="center" justify="center" gap="20px">
                     <Title
                        sx={{
                           color: "#FAFAFA",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "24px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                     >
                        Telefon raqamingiz
                     </Title>
                     <InputBase
                        name="phone"
                        placeholder="+998 (xx) xxx-xx-xx"
                        radius="24px"
                        w="100%"
                        p="30px 24px"
                        bg="rgba(250, 250, 250, 0.24)"
                        sx={{
                           color: "rgba(250, 250, 250, 0.72)",
                           fontFamily: "Gilroy-Medium",
                           fontSize: "18px",
                           fontStyle: "normal",
                           fontWeight: 400,
                           lineHeight: "normal"
                        }}
                        value={formData.phone}
                        onChange={handleChange}
                     />
                  </Flex>
               </Flex>
               {/* Xabar inputi */}
               <Flex
                  mt="100px"
                  align="center"
                  gap="20px"
                  direction="column"
                  w="450px"
                  h="500px"
                  sx={{
                     color: "#FAFAFA",
                     fontFamily: "Gilroy-Medium",
                     fontSize: "24px",
                     fontStyle: "normal",
                     fontWeight: 400,
                     lineHeight: "normal"
                  }}
               >
                  <Title
                     sx={{
                        color: "#FAFAFA",
                        fontFamily: "Gilroy-Medium",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal"
                     }}
                  >
                     Xabaringiz
                  </Title>
                  <Textarea
                     name="message"
                     radius="24px"
                     w="100%"
                     p="30px 24px"
                     h="100%"
                     placeholder="Shu yerga yozing..."
                     value={formData.message}
                     onChange={handleChange}
                  />
               </Flex>
            </Flex>
            <Button variant="white" type="submit">
               Yuborish
            </Button>
         </Flex>
      </form>
   );
};

export default Form;
