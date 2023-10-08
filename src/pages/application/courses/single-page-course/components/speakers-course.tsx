import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Flex, Title } from "@mantine/core";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";

import Demo from "../../components/modal";

interface CourseProps { }

const SpeakersCourse: FunctionComponent<CourseProps> = () => {
   const navigete = useNavigate();

   return (
      <Box>
         <Flex>
            <Box>

               <img
                  style={{
                     width: "200px",
                     height: "150px",
                     backgroundSize: "cover",
                     borderRadius: "25px"
                  }}
                  src='data:image/jpeg;base64,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'
                  alt=""
               />


               <Flex mt={10} justify="space-between">
                  <Title color="gray" size={14}>
                     Biznesda CRM sistema
                  </Title>
                  <BsBookmarkDash size={20} color="blue" />
               </Flex>

               <Flex mt={4} gap={15}>
                  <Flex gap={5}>
                     <AiFillStar color="rgba(0, 106, 255, 1)" />

                     <Title color="rgba(0, 106, 255, 1)" size={12}>
                        500
                     </Title>

                  </Flex>
                  <Flex gap={2}>
                     <AiOutlineEye color="rgba(0, 106, 255, 1)" />
                     <Title color="rgba(0, 106, 255, 1)" size={12}>
                        54,112
                     </Title>
                  </Flex>
               </Flex>
               <Divider my="sm" />
               <Flex align="center" justify="space-between">

                  <Title size={12} color='gray'>
                     120.000
                  </Title>


                  <Demo />
               </Flex>
               {/* {!price ? <h1>{price}</h1> : <Button>Bepul</Button>} */}
            </Box>
         </Flex>
      </Box>
   );
};

export default SpeakersCourse;
