import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Api, Types } from "modules/auth";

const schema = yup.object({
   email: yup.string().email().label("Email").required(),
   username: yup.string().min(4).label("Username").required(),
   password: yup.string().min(1).label("Password").required(),
   re_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .label("Confirm password")
      .required()
});

const Register = () => {
   const { getInputProps, onSubmit } = useForm<Types.IForm.Register>({
      initialValues: {
         first_name: "",
         last_name: "",
         email: "",
         username: "",
         password: "",
         re_password: ""
      },
      validate: yupResolver(schema)
   });

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const onRegister = async (data: Types.IForm.Register) => {
      console.log(data);
      setLoading(true);
      try {
         const { data: user } = await Api.Register(data);

         console.log("navi");
         navigate("auth/register");
         setLoading(false);
      } catch (err: any) {
         console.log(err?.message);
         setLoading(false);
      }
   };

   return (
      <Box h="80vh" sx={{ display: "grid", placeItems: "center" }}>
         <form onSubmit={onSubmit(onRegister)}>
            <Paper bg="var(--paper-bg)" w={400}>
               <Flex direction="column" gap={20} align="center" p={20}>
                  <Flex direction="column" gap={22} w="100%">
                     <InputBase
                        autoFocus
                        placeholder="First name"
                        sx={{
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        {...getInputProps("first_name")}
                     />
                     <InputBase
                        autoFocus
                        placeholder="last name"
                        sx={{
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        {...getInputProps("last_name")}
                     />
                     <InputBase
                        autoFocus
                        placeholder="Name"
                        sx={{
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        {...getInputProps("username")}
                     />
                     <InputBase
                        autoFocus
                        type="email"
                        placeholder="Email"
                        sx={{
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        {...getInputProps("email")}
                     />
                     <PasswordInput
                        placeholder="Password"
                        sx={{
                           border: "none",
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        {...getInputProps("password")}
                     />
                     <PasswordInput
                        sx={{
                           input: {
                              width: "100%",
                              height: "45px",
                              borderRadius: "16px",
                              outline: "none",
                              border: "none",
                              padding: "20px 15px",
                              fontSize: "18px",
                              color: "rgba(17, 17, 17, 0.36)",
                              backgroundColor: "rgba(17, 17, 17, 0.02)"
                           }
                        }}
                        placeholder="Confirm password"
                        {...getInputProps("re_password")}
                     />
                     <Button
                        loading={loading}
                        type="submit"
                        sx={{
                           color: "rgba(0, 106, 255, 1)",
                           height: "50px",
                           backgroundColor: "rgba(231, 240, 255, 1)",
                           fontSize: "20px"
                        }}
                     >
                        Register
                     </Button>
                     <Text size="22px" color="rgba(17, 17, 17, 0.36)" sx={{ alignSelf: "center" }}>
                        Akkauntingiz bormi? unda <Link to="/auth/login">Login!</Link>
                     </Text>
                  </Flex>
               </Flex>
            </Paper>
         </form>
      </Box>
   );
};

export default Register;
