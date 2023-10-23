import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Flex, Title } from "@mantine/core";

interface AdvantageProps {}

const Advantage: FunctionComponent<AdvantageProps> = () => {
   const navigate = useNavigate();
   const [dates, setDates] = useState([
      { id: 1, isActive: false },
      { id: 2, isActive: false },
      { id: 3, isActive: true },
      { id: 4, isActive: false },
      { id: 5, isActive: false }
   ])

   const setIsActive = (id: number) => {
      const newDates = dates.map(date => ({ id: date.id, isActive: false }));

      newDates.forEach((date) => {
         if(date.id === id){
            date.isActive = true;
         }
      })
     setDates(newDates);
   };

   return (
      <Box mt={10} mb={150}>
         <Title color="blue" size={18} sx={{ textAlign: "center" }}>
            Ustunlik
         </Title>
         <Title mt={16} size={40} sx={{ textAlign: "center" }}>
            {" "}
            <span style={{ color: "rgba(0, 106, 255, 1)" }}>Nega</span> aynan InfoNex?
         </Title>
         <Box mt={50}>
            <Flex justify="center">
               <Flex gap={200}>
                  <Box h={100} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px" }} onClick={() => setIsActive(1)}>
                     <Title size={22} color={dates[0].isActive ? 'blue' : "rgba(17, 17, 17, 0.36)"}>
                        Istalgan joy
                     </Title>
                     <Title mt={5} size={16} color={dates[0].isActive ? 'black' : "rgba(17, 17, 17, 0.36)"}>
                        Internet bo’lsa bas, <br /> InfoNex har yerda ishlaydi.
                     </Title>
                  </Box>
                  <Box h={100} sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px" }} onClick={() => setIsActive(2)}>
                     <Title size={22} color={dates[1].isActive ? 'blue' : "rgba(17, 17, 17, 0.36)"}>
                        Aktual
                     </Title>
                     <Title mt={5} size={16} color={dates[1].isActive ? 'black' : "rgba(17, 17, 17, 0.36)"}>
                        Barcha aktual sohalar <br /> bo’yicha darslar mavjud.
                     </Title>
                  </Box>
               </Flex>
            </Flex>
            <Divider sx={{ width: 940, marginLeft: "250px" }} />
            <Flex justify="center">
               <Flex gap={200}>
                  <Box
                     h={50}
                     sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}
                     onClick={() => setIsActive(3)}
                  >
                     <Title size={22} color={dates[2].isActive ? 'blue' : "rgba(17, 17, 17, 0.36)"}>
                        Qulay vaqt
                     </Title>
                     <Title mt={5} size={16} color={dates[2].isActive ? 'black' : "rgba(17, 17, 17, 0.36)"}>
                        Platformada 24/7 soat <br /> rejimida ishlaydi.
                     </Title>
                  </Box>
                  <Box
                     h={50}
                     sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}
                     onClick={() => setIsActive(4)}
                  >
                     <Title size={22} color={dates[3].isActive ? 'blue' : "rgba(17, 17, 17, 0.36)"}>
                        Mutaxasislar
                     </Title>
                     <Title mt={5} size={16} color={dates[3].isActive ? 'black' : "rgba(17, 17, 17, 0.36)"}>
                        Darslar mutaxasislar <br /> tomonidan o’tiladi.
                     </Title>
                  </Box>
                  <Box
                     h={50}
                     sx={{ borderLeft: "1px solid rgba(17, 17, 17, 0.36)", paddingLeft: "10px", paddingTop: "10px" }}
                     onClick={() => setIsActive(5)}
                  >
                     <Title size={22} color={dates[4].isActive ? 'blue' : "rgba(17, 17, 17, 0.36)"}>
                        Oson
                     </Title>
                     <Title mt={5} size={16} color={dates[4].isActive ? 'black' : "rgba(17, 17, 17, 0.36)"}>
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
