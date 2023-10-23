import { FunctionComponent } from "react";
import { Accordion, Box, createStyles } from "@mantine/core";
// import { IconPlus } from "@tabler/icons-react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import cls from "../../../../assets/styles/question.module.scss";

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
      description: (
         <ol>
            <li>
               Ro'yxatdan o'ting: InfoNex platformasiga kirish uchun tizimga ro'yxatdan o'ting. Sizning foydalanuvchi hisobingizni yaratish uchun
               shaxsiy ma'lumotlaringizni kiritish va foydalanuvchi nomi va parol tanlash zarur.
            </li>
            <li>
               Kursni tanlang: InfoNex platformasidagi mavjud kurslarni ko'ring va o'zingiz uchun kerakli kursni tanlang. Har bir kursning haqiqiy
               holati, kurs davomiyligi va narxi ko'rsatiladi.
            </li>
            <li>
               To'lovni amalga oshiring: Kursni tanladiktan so'ng, to'lovni amalga oshirish uchun platformaning to'lov tizimi orqali to'lovingizni
               amalga oshiring. To'lovni qanday amalga oshirish kerakligi kurs narxi va platforma to'lov shartlari bo'yicha kurs muqovasi bilan
               ko'rsatiladi.
            </li>
            <li>
               Kursga kirish: To'lovni amalga oshirganingizdan so'ng, kursga kirish huquqini olishingiz mumkin bo'ladi. Bu kurs materiallariga va
               darslarga kirish huquqini olishingizni ta'minlaydi.
            </li>
            <li>
               O'qishni boshlang: Kursga kirilgach, kurs materiallarini o'qishni boshlang. Bu video darslar, darsliklar, mashqlar, interaktiv testlar
               yoki boshqa ta'lim vazifalari bo'lishi mumkin.
            </li>
         </ol>
      )
   },
   {
      value: "Kurs pulini bo'lib to'lash imkoniyati mavjudmi?",
      description:
         "Kurs pulini to'lashning mumkinligi platformangizning pullik shartnomasi va foydalanuvchilar uchun taqdim etilgan to'lov variantlariga bog'liqdir. Bu haqda to'liq ma'lumotni berish uchun, InfoNex platformasining rasmiy veb-saytini yoki ta'lim kurslarining haqida ma'lumot beruvchi maqolalarni o'rganing. Bu erda kurs narxlari, to'lov usullari va qo'shimcha ma'lumotlar mavjud bo'ladi. Platformangizning to'lov shartnomasini ham o'qing, chunki to'lov va qabul qilish shartlari platformadan platformaga farqli olaqchon o'zgartirishi mumkin."
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

const Main: FunctionComponent = () => {
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

   return (
      <>
         <Box>
            <h1>{Tolovlar()}</h1>
         </Box>
      </>
   );
};

export default Main;
