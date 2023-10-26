// ResetPassword.tsx
import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Api, Types } from "modules/auth";
import { clearSessionReset, getSessionVerification } from "services/store";

import cursor from "../../assets/images/cursor.png";
import threeD from "../../assets/images/threeD.png";

interface CheckpasswordProps { }

const schema = yup.object({
   password: yup.string().min(5).label("Password").required()
});

const Checkpassword: FunctionComponent<CheckpasswordProps> = () => {
   const form = useForm<Types.IForm.Checkpassword>({
      initialValues: {
         password: null
      },
      validate: yupResolver(schema)
   });
   const navigate = useNavigate();

   useEffect(() => {
      clearSessionReset();
   }, []);

   const onSubmit = async (data: Types.IForm.Checkpassword) => {
      try {
         const { email }: any = getSessionVerification();

         await Api.Checkpassword({ email, activation_code: data.password });
         navigate("/auth/register");
      } catch (error: any) {
         notifications.show({
            message: error.data.invalid_code
         });
      }
   };


   return (
      <Box h="100vh" w="100%">
         <Box h="90vh" w="100%" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "200px" }}>
            <Button
               onClick={() => navigate(-1)}
               sx={{
                  position: 'absolute',
                  top: 24,
                  left: 36,
               }}>Back</Button>
            <div className="right">
               <img src={cursor} alt="cursor" />
            </div>
            <form onSubmit={form.onSubmit(onSubmit)}>
               <Flex w="400px" direction="column" justify="center" gap={50} align="center" p={20}>
                  <h1>Check Activate Code</h1>

                  <Input
                     placeholder="Enter an activation code"
                     type="number"
                     sx={{
                        size:'xl',
                        input: {
                           border: "none",
                           outline: "none",
                           fontSize: "18px",
                           borderRadius:'15px',
                           padding:'30px',
                           color: "rgba(17, 17, 17, 0.36)",
                           background: "rgba(17, 17, 17, 0.02)"
                        }
                     }}
                     {...form.getInputProps("password")}
                     w="100%"
                  />
                  <Button type="submit"> Davom etish</Button>
               </Flex>
            </form>
            <div className="left">
               <img src={threeD} alt="threeD" />
            </div>
         </Box>
      </Box>
   );
};

export default Checkpassword;
