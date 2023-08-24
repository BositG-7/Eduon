import { Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import "../../../assets/styles/login.scss";

interface SignUpProps {}

function SignUp(props: SignUpProps) {
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
      <Box className="SignUp">
         <form onSubmit={form.onSubmit(values => console.log(values))}>
            <input placeholder="Email" />
            <button>Davom etish</button>
         </form>
         <h2>
            Akkauntingiz yo’qmi? unda <span>bu yerga</span> bosing
         </h2>
      </Box>
   );
}

export default SignUp;
