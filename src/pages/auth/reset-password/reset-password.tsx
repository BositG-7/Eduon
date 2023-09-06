// ResetPassword.tsx

import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Api, Types } from "modules/auth";
import { clearSessionReset, getSessionReset } from "services/store";

interface ResetPasswordProps {}

const schema = yup.object({
   activation_code: yup.string().min(6).label("Activation Code").required(),
   new_password: yup.string().min(6).label("New Password").required(),
   confirm_password: yup.string().min(6).label("Confirm Password").required()
});

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
   const form = useForm<Types.IForm.ResetPassword>({
      initialValues: {
         activation_code: "", // Initialize with an empty string, not 0
         new_password: "",
         confirm_password: ""
      },
      validate: yupResolver(schema)
   });
   const navigate = useNavigate();

   const onSubmit = async (data: Types.IForm.ResetPassword) => {
      const { email } = getSessionReset();

      try {
         await Api.ResetPassword({
            email,
            activation_code: +data.activation_code,
            new_password: data.new_password,
            confirm_password: data.confirm_password
         });
         navigate("/auth/login");

         console.log("ResetPassword muvaffaqiyatli yakunlandi!");

         clearSessionReset();
      } catch (error: any) {
         notifications.show({
            message: error.data.activation_code
         });
      }
   };

   return (
      <Box h="100vh" w="100%">
         <Box h="100%" sx={{ display: "grid", placeItems: "center" }}>
            <form onSubmit={form.onSubmit(onSubmit)}>
               <Flex w="600px" direction="column" justify="center" gap={50} align="center" p={20}>
                  <h1>Check Code</h1>

                  <PasswordInput
                     placeholder="Activation Code"
                     sx={{
                        border: "none",
                        input: {
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
                     {...form.getInputProps("activation_code")}
                     w="100%"
                  />
                  <PasswordInput
                     placeholder="New Password"
                     sx={{
                        border: "none",
                        input: {
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
                     {...form.getInputProps("new_password")}
                     w="100%"
                  />
                  <PasswordInput
                     placeholder="Confirm Password"
                     sx={{
                        border: "none",
                        input: {
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
                     {...form.getInputProps("confirm_password")}
                     w="100%"
                  />

                  <Button type="submit"> Davom etish</Button>
               </Flex>
            </form>
         </Box>
      </Box>
   );
};

export default ResetPassword;
