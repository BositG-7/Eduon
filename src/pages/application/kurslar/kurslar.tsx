import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider,  Flex,  Title } from "@mantine/core";

interface KurslarProps {}

const Kurslar: FunctionComponent<KurslarProps> = () => {
   const navigete = useNavigate();
   const [searchValue, onSearchChange] = useState("");

   return (
      <Box>
         <Box>
            <Title size="60px" color="#006AFF" sx={{ marginTop: "50px", textAlign: "center" }}>
               Xush kelibsiz
            </Title>
            <Title sx={{ textAlign: "center" }}>ilm izlanuvchi</Title>
            <Title
               size="20px"
               sx={{
                  fontWeight: "normal",
                  textAlign: "center",
                  marginTop: "15px",
                  marginBottom: "50px"
               }}
            >
               Xo‘sh bugun qanday bilimlar o‘rganamiz?
            </Title>
            <Divider my="sm" />
            <Flex gap={25} mt='30px'>
               <Button size='md' variant="light" color="#E7F0FF" sx={{fontWeight: "normal"}} >Barchasi</Button>
               <Button size='md' variant="light" sx={{backgroundColor:'white', color:'gray', fontWeight: "normal" }}>Bepul</Button>
               <Button size='md' variant="light" sx={{backgroundColor:'white', color:'gray', fontWeight: "normal" }}>Zo‘rlari</Button>
               <Button size='md' variant="light" sx={{backgroundColor:'white', color:'gray', fontWeight: "normal" }}>Marketing</Button>
               <Button size='md' variant="light" sx={{backgroundColor:'white', color:'gray', fontWeight: "normal" }}>Dasturlash</Button>
            </Flex>
         </Box>
      </Box>
   );
};

export default Kurslar;
