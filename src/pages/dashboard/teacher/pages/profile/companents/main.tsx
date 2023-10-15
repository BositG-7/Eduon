import { FunctionComponent, useState } from "react";
import { Box, Button, Flex, InputBase, Paper, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { EditProfil } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
   const { user } = useAuth();

   const [formValues, setFormValues] = useState({
      first_name: user?.firstName || "",
      last_name: user?.lastName || "",
      phone: user?.phone || "",
      image: user?.img || "",
      balance: user?.balance || "",
      email: user?.email || "",
      username: user?.username || "",
      birthday: user?.birthday || "",
      about: user?.about || "",
      is_active: !!user?.isActive,
      is_spiker: !!user?.isSpiker,
      job: user?.job || ""
   });

   const handleInputChange = (name: string, value: string) => {
      setFormValues({
         ...formValues,
         [name]: value
      });
   };

   const handleSumbit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         const formData = new FormData();

         formData.append("first_name", formValues.first_name);
         formData.append("last_name", formValues.last_name);
         formData.append("phone", formValues.phone);
         formData.append("email", formValues.email);
         formData.append("birthday", formValues.birthday);
         formData.append("job", formValues.job);
         formData.append("about", formValues.about);
         formData.append("username", formValues.username);

         // Boshqa maydonlar qo'shishingiz mumkin

         const res = await EditProfil(formData); // O'zgartirildi

         notifications.show({ message: res.statusText, color: "green" });
      } catch (error: any) {
         notifications.show({ message: error.statusText, color: "red" });
      }
   };

   return (
      <div>
         <Box h="100vh" w="100%" sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSumbit}>
               <Paper bg="var(--paper-bg)" w="100%">
                  <Flex gap={20} align="center" p={20}>
                     <Flex gap={22} w="100%">
                        <InputBase
                           placeholder="Ismingiz..."
                           radius="sm"
                           value={formValues.first_name}
                           onChange={e => handleInputChange("first_name", e.target.value)}
                        />

                        <InputBase
                           placeholder="Tel:"
                           radius="sm"
                           sx={{
                              border: "none"
                           }}
                           value={formValues.phone}
                           onChange={e => handleInputChange("phone", e.target.value)}
                        />
                     </Flex>
                  </Flex>
               </Paper>
               <Paper bg="var(--paper-bg)" w="123%">
                  <Flex gap={20} align="center" p={20}>
                     <Flex gap={22} w="100%">
                        <InputBase
                           autoFocus
                           w="80%"
                           placeholder="Familyangiz.."
                           radius="sm"
                           value={formValues.last_name}
                           onChange={e => handleInputChange("last_name", e.target.value)}
                        />
                     </Flex>
                  </Flex>
               </Paper>
               <Paper bg="var(--paper-bg)" w="100%">
                  <Flex gap={20} align="center" p={20}>
                     <Flex gap={22} w="100%">
                        <InputBase
                           autoFocus
                           type="date"
                           label="Tug'ilgan sana"
                           placeholder="Sana"
                           radius="sm"
                           sx={{
                              border: "none",
                              width: "208px"
                           }}
                           value={formValues.birthday}
                           onChange={e => handleInputChange("birthday", e.target.value)}
                        />

                        <InputBase
                           label="Kasbi/status"
                           placeholder="Kasbingizni kriting..."
                           type="text"
                           radius="sm"
                           sx={{
                              border: "none"
                           }}
                           value={formValues.job}
                           onChange={e => handleInputChange("job", e.target.value)}
                        />
                     </Flex>
                  </Flex>
                  <Flex w="100%">
                     <Textarea
                        label="Ozingiz haqingizda"
                        placeholder="O'zingiz haqqingizda qisqacha ma'lumot..."
                        radius="sm"
                        ml="20px"
                        mb="30px"
                        sx={{
                           border: "none",
                           width: "426px"
                        }}
                        value={formValues.about}
                        onChange={e => handleInputChange("about", e.target.value)}
                     />
                  </Flex>
               </Paper>

               <Flex gap={20} justify="center" align="center">
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
   );
};

export default Main;
