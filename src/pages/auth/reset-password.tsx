// ResetPassword.tsx
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { Checkpassword } from "modules/auth/api";

interface ResetPasswordProps {
   email: string;
}

const schema = yup.object({
   password: yup.string().min(5).label("Password").required()
});

const ResetPassword: FunctionComponent<ResetPasswordProps> = ({ email }) => {
   const form = useForm<Types.IForm.ResetPassword>({
      initialValues: {
         password: 0
      },
      validate: yupResolver(schema)
   });
   const navigate = useNavigate();

   const onSubmit = async (data: Types.IForm.ResetPassword) => {
      try {
         console.log(email);
         console.log(data.password);

         await Checkpassword({ email, activation_code: data.password });
         navigate("/auth/register");

         console.log("Checkpassword muvaffaqiyatli yakunlandi!");
      } catch (error) {
         console.error("Checkpasswordda xato:", error);
      }
   };

   return (
      <Box h="100vh" w="100%">
         <Box h="100%" sx={{ display: "grid", placeItems: "center" }}>
            <form onSubmit={form.onSubmit(onSubmit)}>
               <Flex w="600px" direction="column" justify="center" gap={50} align="center" p={20}>
                  <h1>Check Code</h1>

                  <PasswordInput
                     placeholder="Password"
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
                     {...form.getInputProps("password")}
                     w="100%"
                  />
                  <Button>Submit</Button>
               </Flex>
            </form>
         </Box>
      </Box>
   );
};

export default ResetPassword;
