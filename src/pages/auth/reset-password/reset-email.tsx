import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Types } from "modules/auth";
import { ResetEmaill } from "modules/auth/api";
import { useAuth } from "modules/auth/context";
import { clearSessionReset, setSessionReset } from "services/store";

import cursor from "../../../assets/images/cursor.png";
import threeD from "../../../assets/images/threeD.png";

interface ResetEmailProps {}

const schema = yup.object({
   email: yup.string().min(5).email().label("Email").required()
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ResetEmail: FunctionComponent<ResetEmailProps> = () => {
   const { methods } = useAuth();
   const form = useForm<Types.IForm.ResetEmail>({
      initialValues: {
         email: ""
      },
      validate: yupResolver(schema)
   });
   const navigete = useNavigate();

   useEffect(() => {
      clearSessionReset();
   }, []);
   const onSubmit = async (data: Types.IForm.ResetEmail) => {


      try {
         await ResetEmaill(data);

         methods.getEmail();
         setSessionReset(data);

         navigete("/auth/resetpassword");
      } catch (error: any) {
         notifications.show({
            message: error.data.email
         });
      }
   };

   return (
      <Box h="100vh" w="100%">
         <Box
            h="90vh"
            w="100%"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "200px" }}
         >
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
               <Flex w="600px" direction="column" justify="center" gap={50} align="center" p={20}>
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
                  <Button type="submit"> Davom etish</Button>
               </Flex>
            </form>
            <div className="left">
               <img src={threeD} alt="threeD" />
            </div>
         </Box>
      </Box>
   );
};

export default ResetEmail;
