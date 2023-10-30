import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import Main from "./components/main";
import { Title } from "./components";

interface FaqProps {}

const Faq: FunctionComponent<FaqProps> = () => (
   <Flex justify="center" align="center" direction="column" gap="40px" h="auto">
      <Title />
      <Main />
   </Flex>
);

export default Faq;
