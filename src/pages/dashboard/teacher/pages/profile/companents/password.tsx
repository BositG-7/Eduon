import { FormEvent, FunctionComponent, useState } from "react";
import { Box, Button, Flex, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ResetEmaill } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

interface PasswordProps {}

const Password: FunctionComponent<PasswordProps> = () => {
   const { user } = useAuth();
   const [email, setEmail] = useState<string>(user?.email!);

   const [isResetPassword, setIsResetPassword] = useState<boolean>(false);

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
         const res = await ResetEmaill({ email });

         console.log(res);
         notifications.show({ message: res.statusText, color: "green" });
         setIsResetPassword(true);
      } catch (error: any) {
         console.log(error);
      }
   };

   if (isResetPassword) {
      return (
         <>
            <Box h="100vh" w="100%" mt="100px" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
               <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                  <Flex gap={20} justify="space-around" align="center">
                     <Box>qdw</Box>
                     <Button
                        type="submit"
                        sx={{
                           color: "rgba(0, 106, 255, 1)",
                           height: "50px",
                           backgroundColor: "rgba(231, 240, 255, 1)",
                           fontSize: "20px",
                           marginTop: "10px",
                           "&:hover": {
                              color: "white"
                           }
                        }}
                     >
                        Saqlash
                     </Button>
                  </Flex>
               </form>
            </Box>
         </>
      );
   }

   return (
      <div>
         <Box h="100vh" w="100%" mt="100px" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Title maw="500px">Parol almashtirishni istasangiz roziman tugmasini bosing oshanda sizga kod yuboriladi</Title>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
               <Flex gap={20} justify="space-around" align="center">
                  <Button
                     type="submit"
                     sx={{
                        color: "rgba(0, 106, 255, 1)",
                        height: "50px",
                        backgroundColor: "rgba(231, 240, 255, 1)",
                        fontSize: "20px",
                        marginTop: "10px",
                        "&:hover": {
                           color: "white"
                        }
                     }}
                  >
                     Roziman
                  </Button>
               </Flex>
            </form>
         </Box>
      </div>
   );
};

export default Password;
