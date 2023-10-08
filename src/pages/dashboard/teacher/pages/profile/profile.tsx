import React, { FunctionComponent, useState } from "react";
import { Box, Flex, SegmentedControl } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import Data from "./companents/data";
import Parol from "./companents/password";
import { CardPage } from "./companents";

interface ProfileTeacherProps {}

const ProfileTeacher: FunctionComponent<ProfileTeacherProps> = () => {
   
   const { user } = useAuth();
   
   const [segmentValue, setSegmentValue] = useState("ma’lumotlar"); // Default value

   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };

   return (
      <>
         <Flex w="100%" justify="start">
            <SegmentedControl
               data={[
                  { label: "Ma’lumotlar", value: "ma’lumotlar" },
                  { label: "Karta", value: "karta" },
                  { label: "Parol", value: "parol" }
               ]}
               value={segmentValue}
               onChange={handleSegmentChange}
               style={{ background: "white" }}
            />
         </Flex>
         <hr />
         <Box>
            {segmentValue === "ma’lumotlar" && <Data />}
            {segmentValue === "karta" && <CardPage />}
            {segmentValue === "parol" && <Parol />}
         </Box>
      </>
   );
};

export default ProfileTeacher;
