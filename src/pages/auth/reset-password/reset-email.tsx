import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { SendEmail } from "modules/auth/api";
import { useAuth } from "modules/auth/context";

interface ResetEmailProps {
   setEmail: (newEmail: string) => void;
}

const schema = yup.object({
   email: yup.string().min(5).email().label("Email").required()
});

const ResetEmail: FunctionComponent<ResetEmailProps> = ({ setEmail }) => {
   const { methods } = useAuth();
   const form = useForm<Types.IForm.ResetEmail>({
      initialValues: {
         email: ""
      },
      validate: yupResolver(schema)
   });
   const navigete = useNavigate();

   const onSubmit = async (data: Types.IForm.ResetEmail) => {
      console.log(data);

      try {
         await SendEmail(data);

         methods.getEmail();
         setEmail(data.email);

         navigete("/auth/resetemail");

         // Yuborish muvaffaqiyatli yakunlandi
      } catch (error) {
         console.error("Emailni yuborishda xato:", error);
      }
   };

   return (
      <Box h="100vh" w="100%">
         <Box h="100%" sx={{ display: "grid", placeItems: "center" }}>
            <form
               onSubmit={form.onSubmit(onSubmit)}
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "30px"
               }}
            >
               <Flex
                  sx={{ border: "1px solid " }}
                  w="600px"
                  direction="column"
                  justify="center"
                  gap={50}
                  align="center"
                  p={20}
               >
                  <h1>Reset Password</h1>

                  <Input
                     placeholder="Email..."
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
                     {...form.getInputProps("email")}
                     w="100%"
                  />
                  <Button type="submit">Submit</Button>
               </Flex>
            </form>
         </Box>
      </Box>
   );
};

export default ResetEmail;
