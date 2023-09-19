import { FunctionComponent } from "react";
import { Box, Flex, SegmentedControl } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { Img, Main } from "./companents";


interface ProfilProps {}
 
const Profil: FunctionComponent<ProfilProps> = () => {
    
    const { user } =useAuth()

    return ( 
           <Box>
           <SegmentedControl data={[]}/>
               <Flex w="100%"
               justify="space-around">
                  <Img/>
                  <Main/>
               </Flex>
           </Box>
             );
}
 
export default Profil;