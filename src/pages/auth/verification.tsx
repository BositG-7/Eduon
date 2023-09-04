import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { SendEmail } from "modules/auth/api";
import { useAuth } from "modules/auth/context";
import { setSessionVerfication } from "services/store";

interface VerificationProps {}

const schema = yup.object({
   email: yup.string().min(5).email().label("Email").required()
});

const Verification: FunctionComponent<VerificationProps> = () => {
   const { methods } = useAuth();
   const form = useForm<Types.IForm.Verification>({
      initialValues: {
         email: ""
      },
      validate: yupResolver(schema)
   });
   const navigete = useNavigate();

   const onSubmit = async (data: Types.IForm.Verification) => {
      console.log(data);

      try {
         await SendEmail(data);

         methods.getEmail();
         setSessionVerfication(data);

         navigete("/auth/checkpassword");

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
               <Flex w="350px" direction="column" justify="center" gap={20} align="center" p={20}>
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
                           color: "black",
                           backgroundColor: "rgba(17, 17, 17, 0.02)"
                        }
                     }}
                     {...form.getInputProps("email")}
                     w="100%"
                  />
                  <Button w="100%" variant="light" type="submit">
                     Davom etish
                  </Button>
                  <Box w="100%">
                     <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        Akkauntingiz bormi? unda{" "}
                        <span
                           onClick={() => {
                              navigete("/auth/login");
                           }}
                           style={{ color: "blue" }}
                        >
                           bu yerga bosing
                        </span>
                     </p>
                  </Box>
               </Flex>
            </form>
         </Box>
      </Box>
   );
};

export default Verification;
