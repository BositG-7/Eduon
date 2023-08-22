import React, { FunctionComponent } from "react"; // React import qilingan
import { useNavigate } from "react-router-dom";
import { Box, Button, Title } from "@mantine/core";

import Logo from "./Logo.svg";
import Search from "./Search.svg";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
   const navigate = useNavigate();

   return (
      <Box
         p="24px 100px"
         sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
         <Box
            onClick={() => {
               navigate("/");
            }}
         >
            <img src={Logo} alt="" />
         </Box>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: "30px",
               padding: "24px",
               color: "rgba(17, 17, 17, 0.54)", // rgba ni string sifatida ko'rsating
               fontFamily: "Gilroy",

               fontStyle: "normal",
               fontWeight: 500,
               lineHeight: "normal"
            }}
         >
            <Title size={14}>Bosh sahifa</Title>
            <Title size={14}>Kurslar</Title>
            <Title size={14}>FAQ</Title>
            <Title size={14}>Biz haqimizda</Title>
         </Box>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: "30px"
            }}
         >
            <img src={Search} alt="" />
            <Button
               variant="light"
               onClick={() => {
                  navigate("/auth");
               }}
            >
               Kirish
            </Button>
         </Box>
      </Box>
   );
};

export default Navbar;
