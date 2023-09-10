import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import { Category, Titlee } from "./components";

interface FaqProps {}

const Faq: FunctionComponent<FaqProps> = () => {
   const i = 0;

   return (
      <>
         <Flex justify="center" align="center" direction="column" gap="40px" h="auto">
            <Titlee />
            <Category />
         </Flex>
      </>
   );
};

export default Faq;
