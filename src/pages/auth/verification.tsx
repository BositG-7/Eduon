import { FunctionComponent } from "react";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { SendEmail } from "modules/auth/api";

interface VerificationProps {}

const schema = yup.object({
   email: yup.string().min(5).email().label("Email").required()
});

const Verification: FunctionComponent<VerificationProps> = () => {
   const form = useForm<Types.IForm.Verification>({
      initialValues: {
         email: ""
      },
      validate: yupResolver(schema)
   });

   const onSubmit = async (data: Types.IForm.Verification) => {
      console.log("dwqdwq");

      try {
         await SendEmail(data);
         // Yuborish muvaffaqiyatli yakunlandi
         console.log("Email yuborildi!");
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
