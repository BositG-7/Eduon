import { FunctionComponent } from "react";
import { Box, Flex, SegmentedControl } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { Img, Main } from "./companents";

interface ProfilProps {}

const Profil: FunctionComponent<ProfilProps> = () => {
   const { user } = useAuth();


   return (
      <Box>
         <Flex w="100%" justify="start">
            <SegmentedControl
               data={[
                  { label: "Ma’lumotlar", value: "ma’lumotlar" },
                  { label: "Karta", value: "karta" },
                  { label: "Parol", value: "parol" }
               ]}
               style={{ background:"white" } }
            />
         </Flex>
         <hr />
         <Flex w="100%" justify="space-around" mt="30px">
            <Img />
            <Main />
         </Flex>
      </Box>
   );
};

export default Profil
