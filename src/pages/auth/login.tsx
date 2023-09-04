import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box } from "@mantine/core";
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
      <Box className="login">
         <form onSubmit={form.onSubmit(onLogin)}>
            <input placeholder="Username" {...form.getInputProps("username")} />

            <input type="password" placeholder="Password" {...form.getInputProps("password")} />
            <h2>
               <Link to="/auth/resetemail">Parolingizni unutdingizmi?</Link>
            </h2>

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
