import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import { Main, Title } from "./components";

interface RulesProps {}

const Rules: FunctionComponent<RulesProps> = () => (
      <>
         <Flex justify="center" align="center" direction="column" gap="40px" h="auto">
            <Title />
         </Flex>
            <Main />
      </>
   );

export default Rules;
