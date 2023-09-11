import { FunctionComponent } from "react";
import { Flex } from "@mantine/core";

import Footer from "components/footer";

import { Header } from "./components";

interface BizHaqimizdaProps {}

const BizHaqimizda: FunctionComponent<BizHaqimizdaProps> = () => {
   const i = 0;

   return (
      <>
         <Flex justify="center" bg="red" align="center" w="100%" gap="30px" direction="column" h="auto">
            <Header />
            <Footer />
         </Flex>
      </>
   );
};

export default BizHaqimizda;
