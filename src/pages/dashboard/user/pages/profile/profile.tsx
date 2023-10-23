import { FunctionComponent, useState } from "react";
import { Box, Flex, SegmentedControl } from "@mantine/core";
import Password from "pages/dashboard/teacher/pages/profile/companents/password";

import Data from "./companents/data";

interface ProfileProps { }

const ProfileUser: FunctionComponent<ProfileProps> = () => {
   const [segmentValue, setSegmentValue] = useState("ma’lumotlar"); // Default value

   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };

   return (
         < >
            <Flex w="100%" justify="start">
               <SegmentedControl
                  data={[
                     { label: "Ma’lumotlar", value: "ma’lumotlar" },
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
               {segmentValue === "parol" && <Password />}
            </Box>
         </>
  );
};

export default ProfileUser;
