import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Group, Modal, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAuth } from "modules/auth/context";

function Demo() {
   const [opened, { open, close }] = useDisclosure(false);
   const [selectedRadio, setSelectedRadio] = useState("");
   const { user } = useAuth();

   const handleRadioChange = (value: any) => {
      setSelectedRadio(value);
      console.log(value);
   };

   const navigate = useNavigate();

   const handleSubmit = () => {
      if (selectedRadio === "Click") {
         navigate("/dashboard/user/click");
      } else if (selectedRadio === "Payme") {
         navigate("/dashboard/user/payme");
      }
      console.log(selectedRadio);

      close();
   };

   const btnStyle1 = {
      color: "#006AFF",
      fontFamily: "Gilroy-Medium",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      borderRadius: "18px",
      border: "3px solid rgba(17, 17, 17, 0.04)",
      padding: "14px 25px",
      marginTop: "24px"
   };
   const btnStyle2 = {
      color: "#006AFF",
      fontFamily: "Gilroy-Medium",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      borderRadius: "18px",
      border: "3px solid rgba(17, 17, 17, 0.04)",
      padding: "14px 45px",
      marginTop: "24px"
   };
   const radio = {
      padding: "24px 55px",
      background: "rgba(17, 17, 17, 0.03)",
      borderRadius: "18px",
      color: "rgba(17, 17, 17, 0.54)",
      fontFamily: "Gilroy",
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal"
   };

   console.log("efwefwef");
   return (
      <>
         <Modal opened={opened} onClose={close} centered withCloseButton={false}>
            <Box>
               <Radio.Group label="To'lov turini tanlang">
                  <Flex justify="space-around">
                     <Radio
                        label="Click"
                        value="Click"
                        labelPosition="left"
                        style={radio}
                        // checked={selectedRadio === "Click"}
                        onClick={() => handleRadioChange("Click")}
                     />
                     <Radio
                        label="Payme"
                        value="Payme"
                        labelPosition="left"
                        style={radio}
                        // checked={selectedRadio === "Payme"}
                        onClick={() => handleRadioChange("Payme")}
                     />
                  </Flex>
               </Radio.Group>
               <Flex justify="space-around">
                  <button style={btnStyle1} onClick={close}>
                     Bekor qilish
                  </button>
                  <button style={btnStyle2} onClick={handleSubmit}>
                     Tasdiqlash
                  </button>
               </Flex>
            </Box>
         </Modal>

         <Group position="center">
            <Button
               onClick={() => {
                  if (!user) {
                     navigate("/auth");
                  } else {
                     open();
                  }
               }}
               variant="light"
            >
               Xarid qilish
            </Button>
         </Group>
      </>
   );
}

export default Demo;
