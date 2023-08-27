import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { SendEmail } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

interface VerificationProps {
   setEmail: (newEmail: string) => void;
}

const schema = yup.object({
   email: yup.string().min(5).email().label("Email").required()
});

const Verification: FunctionComponent<VerificationProps> = ({ setEmail }) => {
   const { methods } = useAuth();
   const form = useForm<Types.IForm.Verification>({
      initialValues: {
         email: ""
      },
      validate: yupResolver(schema)
   });
   const navigete = useNavigate();

   const onSubmit = async (data: Types.IForm.Verification) => {
      console.log("dwqdwq");

      try {
         await SendEmail(data);

         methods.getEmail();
         setEmail(data.email);

         navigete("/auth/resetpassword");

         // Yuborish muvaffaqiyatli yakunlandi
      } catch (error) {
         // Yuborish jarayonida xato yuzaga keldi
         console.error("Emailni yuborishda xato:", error);
      }
   };

   return (
      <Box className="login" sx={{ display: "grid", placeItems: "center", gap: "30px" }}>
         <h1>Verification</h1>
         <form onSubmit={form.onSubmit(onSubmit)}>
            <input placeholder="Email..." {...form.getInputProps("email")} />
            <button style={{ marginTop: "20px" }}>Submit</button>
            <p>Email kiriting</p>
         </form>
      </Box>
   );
};

export default Verification;
