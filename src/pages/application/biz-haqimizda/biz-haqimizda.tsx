import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import Footer from "components/footer";

import { Category, Form, Hamkor, Header, Main } from "./components";

interface BizHaqimizdaProps {}

const BizHaqimizda: FunctionComponent<BizHaqimizdaProps> = () => {
   const i = 0;

   return (
      <>
         <Flex p="24px" justify="center" mt="30px" align="center" w="100%" gap="30px" direction="column" h="auto">
            <Header />
            <Hamkor />
            <Main />
            <Category />
            <Form />
            <Footer />
         </Flex>
      </>
   );
};

export default BizHaqimizda;
