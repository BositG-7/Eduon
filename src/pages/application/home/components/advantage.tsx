import { FunctionComponent } from "react";
import { Box, createStyles, Divider, Flex, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface AdvantageProps {}

const useStyles = createStyles(theme => ({
   borderPadding: {
      borderLeft: "1px solid rgba(17, 17, 17, 0.36)",
      paddingLeft: "10px"
   },
   borderPaddingLT: {
      borderLeft: "1px solid rgba(17, 17, 17, 0.36)",
      paddingLeft: "10px",
      paddingTop: "10px"
   }
}));

const Advantage: FunctionComponent<AdvantageProps> = () => {
   const { hovered, ref } = useHover();
   const { classes } = useStyles();
   const { hovered: hovered2, ref: ref2 } = useHover();
   const { hovered: hovered3, ref: ref3 } = useHover();
   const { hovered: hovered4, ref: ref4 } = useHover();
   const { hovered: hovered5, ref: ref5 } = useHover();

   return (
      <Box mt={10} mb={150}>
         <Title color="blue" size={18} align="center">
            Ustunlik
         </Title>
         <Title mt={16} size={40} align="center">
            {" "}
            <span style={{ color: "rgba(0, 106, 255, 1)" }}>Nega</span> aynan InfoNex?
         </Title>
         <Box mt={50}>
            <Flex justify="center">
               <Flex gap={200}>
                  <Box ref={ref} h={100} className={classes.borderPadding}>
                     <Title size={22} color={hovered ? "blue" : "rgba(17, 17, 17, 0.36)"}>
                        Istalgan joy
                     </Title>
                     <Title ref={ref} mt={5} size={16} color={hovered ? "black" : "rgba(17, 17, 17, 0.36)"}>
                        Internet bo’lsa bas, <br /> InfoNex har yerda ishlaydi.
                     </Title>
                  </Box>

                  <Box ref={ref2} h={100} className={classes.borderPadding}>
                     <Title size={22} color={hovered2 ? "blue" : "rgba(17, 17, 17, 0.36)"}>
                        Aktual
                     </Title>
                     <Title mt={5} size={16} color={hovered2 ? "black" : "rgba(17, 17, 17, 0.36)"}>
                        Barcha aktual sohalar <br /> bo’yicha darslar mavjud.
                     </Title>
                  </Box>
               </Flex>
            </Flex>
            <Divider w={940} ml={250} />
            <Flex justify="center">
               <Flex gap={200}>
                  <Box ref={ref3} h={50} className={classes.borderPaddingLT}>
                     <Title size={22} color={hovered3 ? "blue" : "rgba(17, 17, 17, 0.36)"}>
                        Qulay vaqt
                     </Title>
                     <Title mt={5} size={16} color={hovered3 ? "black" : "rgba(17, 17, 17, 0.36)"}>
                        Platformada 24/7 soat <br /> rejimida ishlaydi.
                     </Title>
                  </Box>

                  <Box ref={ref4} h={50} className={classes.borderPaddingLT}>
                     <Title size={22} color={hovered4 ? "blue" : "rgba(17, 17, 17, 0.36)"}>
                        Mutaxasislar
                     </Title>
                     <Title mt={5} size={16} color={hovered4 ? "black" : "rgba(17, 17, 17, 0.36)"}>
                        Darslar mutaxasislar <br /> tomonidan o’tiladi.
                     </Title>
                  </Box>

                  <Box ref={ref5} h={50} className={classes.borderPaddingLT}>
                     <Title size={22} color={hovered5 ? "blue" : "rgba(17, 17, 17, 0.36)"}>
                        Oson
                     </Title>
                     <Title mt={5} size={16} color={hovered5 ? "black" : "rgba(17, 17, 17, 0.36)"}>
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
