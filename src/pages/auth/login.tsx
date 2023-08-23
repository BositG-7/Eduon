import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Api, Types } from "modules/auth";

import "../../assets/styles/login.scss";

interface LoginProps {}

const schema = yup.object({
   username: yup.string().min(4).label("Username").required(),
   password: yup.string().min(1).label("Password").required()
});

function Login(props: LoginProps) {
   const form = useForm<Types.IForm.Login>({
      initialValues: {
         username: "",
         password: ""
      },
      validate: yupResolver(schema)
   });

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const onLogin = async (data: Types.IForm.Login) => {
      console.log(data);

      setLoading(true);
      try {
         console.log("nav");

         const response = await Api.Login(data);
         // Process the response if needed

         console.log(response);
         navigate("/"); // Redirect to a different route after successful login
      } catch (err: any) {
         console.log(err?.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <Box className="login">
         <form onSubmit={form.onSubmit(onLogin)}>
            <input placeholder="Username" {...form.getInputProps("username")} />

            <input type="password" placeholder="Password" {...form.getInputProps("password")} />

            <button type="submit" disabled={loading}>
               {loading ? "Loading..." : "Tizimga kirish"}
            </button>
         </form>
         <h2>
            Akkauntingiz yo’qmi? unda <Link to="/auth/register">Register</Link>
         </h2>
      </Box>
   );
}

export default Login;
