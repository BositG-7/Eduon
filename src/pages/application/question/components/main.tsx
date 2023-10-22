import { FunctionComponent } from "react";
import { Accordion, Box, createStyles } from "@mantine/core";
// import { IconPlus } from "@tabler/icons-react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import cls from "../../../../assets/styles/question.module.scss";

interface MainProps {
   value: string;
}

const useStyles = createStyles(theme => ({
   accordionItem: {
      borderRadius: "14px",
      border: "none",
      backgroundColor: "rgba(17, 17, 17, 0.02)",
      marginBottom: "18px",
      ":hover": {
         backgroundColor: "rgba(17, 17, 17, 0.02)"
      }
   },
   accordionControl: {
      borderRadius: "14px",
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "normal",
      color: "rgba(17, 17, 17, 0.72)",
      fontWeight: 400,
      ":hover": {
         backgroundColor: "rgba(17, 17, 17, 0.02)"
      }
   },
   accordionPanel: {
      color: "rgba(17, 17, 17, 0.54)",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
   }
}));

const accordionDates = [
   {
      value: "Kurs uchun to'lo'vni qanday amalga oshirsam bo'ladi?",
      description:
         "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."
   },
   {
      value: "Kurs pulini bo'lib to'lash imkoniyati mavjudmi?",
      description:
         "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."
   },
   {
      value: "Agar kurs yoqmasa to'lagan pulimni qaytarib olsam bo'ladimi? Agar mumkin bo'lsa u jarayon qanday bo'ladi?",
      description:
         "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."
   },
   {
      value: "Kurs uchun to'lovni online amalga oshirsam bo'ladimi?",
      description:
         "Ha albatta bo'ladi. Online to'lovni Click, Payme, Apelsin va bank online to'lov sistemalari orqali amalga oshirish mumkin. Profilga o'tib, to'lov tizimlaridan o'zingiz xohlagan tizimni qo'shish orqali amalga oshirasiz.Karta raqamlaringiz va to'lov haqidagi ma'lumotlar 3-shaxslardan sir saqlanadi va himoya qilinadi. Istalgan vaqt karta ma'lumotlarini o'chirish imkoniyatiga ega bo'lasiz."
   }
];

const Main: FunctionComponent<MainProps> = ({ value }) => {
   const { cx, classes } = useStyles();
   const Tolovlar = () => {
      const items = accordionDates.map((item, idx) => (
         <Accordion.Item className={classes.accordionItem} w="100%" key={item.value} value={item.value}>
            <Accordion.Control className={classes.accordionControl}>{item.value}</Accordion.Control>
            <Accordion.Panel className={classes.accordionPanel}>{item.description}</Accordion.Panel>
         </Accordion.Item>
      ));

      return (
         <Box w="100%" h="100%" mb="30px">
            <Accordion
               w="1132px"
               classNames={{ chevron: cls.chevron }}
               defaultValue="Kurs uchun to'lo'vni qanday amalga oshirsam bo'ladi?"
               chevron={<AiOutlinePlusCircle className={cls.icon} />}
            >
               {items}
            </Accordion>
         </Box>
      );
   };

   if (value === "To'lovlar") {
      return (
         <>
            <Box>{Tolovlar()}</Box>
         </>
      );
   }
   if (value === "Barchasi") {
      return (
         <>
            <Box>{Tolovlar()}</Box>
         </>
      );
   }

   return (
      <>
         <Box>
            <h1>{value}</h1>
         </Box>
      </>
   );
};

export default Main;
