import { FunctionComponent } from "react";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { Types } from "modules/auth";

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

   const onLogin = async (data: Types.IForm.Verification) => {
      console.log(data); // Foydalanuvchi kiritgan ma'lumotlarni ko'rsatadi

      notifications.show({
         title: "Talaba Qo'shildi!",
         message: "Asosiy jadvalga qaytib tekshirib ko'ring",
         icon: <IconCheck size="1rem" />
      });
   };

   return (
      <Box
         className="login"
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px"
         }}
      >
         <h1>Verification</h1>
         <form onSubmit={form.onSubmit(onLogin)}>
            <input placeholder="Email..." {...form.getInputProps("email")} />
            <button style={{ marginTop: "20px" }}>Submit</button>
         </form>
      </Box>
   );
};

export default Verification;
