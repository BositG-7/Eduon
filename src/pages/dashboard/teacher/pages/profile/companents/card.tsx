import { FormEvent, FunctionComponent } from "react";
import { Box, Button, Flex, InputBase, Paper } from "@mantine/core";
import { useAuth } from "modules/auth/context";

interface CardProps {}

const CardPage: FunctionComponent<CardProps> = () => {
   const { user } = useAuth();

   function handleInputChange(arg0: string, value: string): void {
      throw new Error("Function not implemented.");
   }

   function handleSumbit(event: FormEvent<HTMLFormElement>): void {
      throw new Error("Function not implemented.");
   }

   return (
      
      <div>
      <Box h="100vh" w="100%" sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
         <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSumbit}>
            <Paper bg="var(--paper-bg)" w="100%">
               <Flex gap={20} align="center" p={20}>
                  <Flex gap={22} w="100%">
                     <InputBase
                     label="Karta egasi"
                        placeholder="Ismingiz..."
                        radius="sm"
                        onChange={e => handleInputChange("first_name", e.target.value)}
                     />

                     <InputBase
                     label="Karta no'meri"
                        placeholder="Karta raqamni kriting..."
                        radius="sm"
                        sx={{
                           border: "none"
                        }}                    
                        onChange={e => handleInputChange("phone", e.target.value)}
                     />
                  </Flex>
               </Flex>
            </Paper>
            <Paper bg="var(--paper-bg)" w="100%">
               <Flex gap={20} align="center" p={20}>
                  <Flex gap={22} w="100%">
                     <InputBase
                     type="number"
                     label="Amal qilish muddati"
                        autoFocus
                        placeholder="22/11"
                        radius="sm"
                        onChange={e => handleInputChange("last_name", e.target.value)}
                     />
                  </Flex>
               </Flex>
            </Paper>
           

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
                  Saqlash
               </Button>
            </Flex>
         </form>
      </Box>
   </div>
   )
};

export default CardPage;
