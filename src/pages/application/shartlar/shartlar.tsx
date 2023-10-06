import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import { Main, Title } from "./components";

interface ShartlarProps {}

const Shartlar: FunctionComponent<ShartlarProps> = () => {
   const i = 0;

   return (
      <>
         <Flex justify="center" align="center" direction="column" gap="40px" h="auto">
            <Title />
            <Main />
         </Flex>
      </>
   );
};

export default Shartlar;
