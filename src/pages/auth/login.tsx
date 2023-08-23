import { Link } from "react-router-dom";
import { Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import "../../assets/styles/login.scss";

interface LoginProps {}

function Login(props: LoginProps) {
   const form = useForm({
      initialValues: {
         password: "",
         confirmPassword: ""
      },

      validate: {
         confirmPassword: (value, values) =>
            value !== values.password ? "Passwords did not match" : null
      }
   });

   return (
      <Box className="login">
         <form onSubmit={form.onSubmit(values => console.log(values))}>
            <input
               placeholder="Username"
               // {...form.getInputProps('password')}
            />

            <input
               placeholder="Password" className="passwordInput"
               // {...form.getInputProps('password')}
            />

            {/* <PasswordInput
          mt="sm"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
          
          /> */}
            <h3>Parolingizni unutdingizmi?</h3>
            <button>Tizimga kirish</button>
         </form>
         <h2>
            Akkauntingiz yo’qmi? unda <Link to="/auth/register">Register</Link>
         </h2>
      </Box>
   );
}

export default Login;
