import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
// import { notifications } from "@mantine/notifications";
import { Api, Types } from "modules/auth";
import { useAuth } from "modules/auth/context";
import { setSession } from "services/store";

import "../../assets/styles/login.scss";

interface LoginProps {}

const schema = yup.object({
   username: yup.string().min(4).label("Username").required(),
   password: yup.string().min(1).label("Password").required()
});

function Login(props: LoginProps) {
   const { methods } = useAuth();
   const form = useForm<Types.IForm.Login>({
      initialValues: {
         username: "",
         password: ""
      },
      validate: yupResolver(schema)
   });

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const onLogin = async (par: Types.IForm.Login) => {
      console.log(par);

      setLoading(true);
      try {
         console.log("nav");

         const { data } = await Api.Login(par);

         console.log(data);
         const tokens: any = data;

         console.log(tokens);

         setSession(tokens);

         window.location.href = "/";
      } catch (err: any) {
         // notifications.show(err.message);

         console.log(err?.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <Box h="90vh" w="100%" sx={{ display: "grid", placeItems: "center" }}>
         <form onSubmit={form.onSubmit(onLogin)}>
            <Paper bg="var(--paper-bg)" w={400}>
               <Flex direction="column" gap={20} align="center" p={20}>
                  <Flex direction="column" gap={22} w="100%">
                     <InputBase
                        autoFocus
                        placeholder="username"
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
                        {...form.getInputProps("username")}
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
                        {...form.getInputProps("password")}
                     />
                     <h6>
                        <Link to="/auth/resetemail">Parolingizni unutdingizmi?</Link>
                     </h6>

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
                        {loading ? "Loading..." : "Tizimga kirish"}
                     </Button>
                     <Text
                        size="15px"
                        color="rgba(17, 17, 17, 0.36)"
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           gap: "10px"
                        }}
                     >
                        Akkauntingiz yo’qmi? unda <Link to="/auth/login">ro’yxatdan o’ting!</Link>
                     </Text>
                  </Flex>
               </Flex>
            </Paper>
         </form>
      </Box>
   );
}

export default Login;

// eslint-disable-next-line no-lone-blocks
{
   /* <input placeholder="Username" {...form.getInputProps("username")} />

<input type="password" placeholder="Password" {...form.getInputProps("password")} />


<button type="submit" disabled={loading}>
 
</button> */
}
