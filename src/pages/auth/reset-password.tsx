// ResetPassword.tsx
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { Checkpassword } from "modules/auth/api";

interface ResetPasswordProps {
   email: string;
}

const schema = yup.object({
   password: yup.string().min(5).label("Password").required() // Change yup.number() to yup.string()
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
      <Box className="login" sx={{ display: "grid", placeItems: "center", gap: "30px" }}>
         <h1>Check Code</h1>
         <form onSubmit={form.onSubmit(onSubmit)}>
            <input type="password" placeholder="password" {...form.getInputProps("password")} />
            <button style={{ marginTop: "20px" }} type="submit">
               Submit
            </button>
         </form>
      </Box>
   );
};

export default ResetPassword;
