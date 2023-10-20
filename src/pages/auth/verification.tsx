import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Types } from "modules/auth";
import { SendEmail } from "modules/auth/api";
import { clearSessionReset, clearSessionVerification, setSessionVerification } from "services/store";

import cursor from "../../assets/images/cursor.png";
import threeD from "../../assets/images/threeD.png";

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

   useEffect(() => {
      clearSessionVerification();
      clearSessionReset();
   }, []);
   const navigete = useNavigate();

   const onSubmit = async (data: Types.IForm.Verification) => {
      try {
         const res = await SendEmail(data);

         setSessionVerification(data);

         console.log(res);

         notifications.show({ message: res.statusText, color: "green" });

         navigete("/auth/check-password");
      } catch (error: any) {
         notifications.show({
            message: error.data.email,
            color: "red"
         });
      }
   };

   return (
      <Box h="100vh" w="100%" data-aos="fade-up" data-aos-anchor-placement="bottom-up">
         <Box h="90vh" w="100%" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "220px" }}>
            <div className="right">
               <img src={cursor} alt="cursor" />
            </div>
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
            <div className="left">
               <img src={threeD} alt="threeD" />
            </div>
         </Box>
      </Box>
   );
};

export default Verification;
