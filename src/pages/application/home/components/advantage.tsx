import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Flex, Title } from "@mantine/core";

interface AdvantageProps {}

const Advantage: FunctionComponent<AdvantageProps> = () => {
   const navigete = useNavigate();

   return (
      <Box mt={10} mb={150}>
       <Title color='blue' size={18} sx={{textAlign:'center'}}>Ustunlik</Title>
       <Title mt={16} size={40} sx={{textAlign:'center'}}> <span style={{color:'rgba(0, 106, 255, 1)'}} >Nega</span>  aynan EduOn?</Title>
      <Box mt={50} >
         <Flex justify="center">
            <Flex gap={200}>
               <Box h={100} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px" }}>
                  <Title size={22} color="rgba(17, 17, 17, 0.36)">
                     Istalgan joy
                  </Title>
                  <Title mt={5} size={16} color="rgba(17, 17, 17, 0.36)">
                     Internet bo’lsa bas, <br /> EduOn har yerda ishlaydi.
                  </Title>
               </Box>
               <Box h={100} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px" }}>
                  <Title size={22} color="rgba(17, 17, 17, 0.36)">
                     Aktual
                  </Title>
                  <Title mt={5} size={16} color="rgba(17, 17, 17, 0.36)">
                     Barcha aktual sohalar <br /> bo’yicha darslar mavjud.
                  </Title>
               </Box>
            </Flex>
         </Flex>
         <Divider sx={{ width: 940, marginLeft: "250px"  }} />
         <Flex justify="center" >
            <Flex gap={200}>
               <Box h={50} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}>
                  <Title size={22} color="blue">
                     Qulay vaqt
                  </Title>
                  <Title mt={5} size={16} color="black">
                     Platformada 24/7 soat <br /> rejimida ishlaydi.
                  </Title>
               </Box>
               <Box h={50} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}>
                  <Title size={22} color="rgba(17, 17, 17, 0.36)">
                     Mutaxasislar
                  </Title>
                  <Title mt={5} size={16} color="rgba(17, 17, 17, 0.36)">
                     Darslar mutaxasislar <br /> tomonidan o’tiladi.
                  </Title>
               </Box>
               <Box h={50} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}>
                  <Title size={22} color="rgba(17, 17, 17, 0.36)">
                     Oson
                  </Title>
                  <Title mt={5} size={16} color="rgba(17, 17, 17, 0.36)">
                     Samarali ilm olish uchun <br /> barcha imkoniyatlar.
                  </Title>
               </Box>
            </Flex>
         </Flex>
      </Box>
      </Box>
   );
};

export default Advantage;
