import { FunctionComponent } from "react";
import { Accordion, Box, createStyles } from "@mantine/core";
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
      description: (
         <ol>
            <li>
               Kursning qaytarilish shartlari, InfoNex to'lov politikasi va kurslar xususiyatlariga qarab o'zgarishi mumkin. Qaytarish shartlari,
               o'quvchilarni kursni to'lashdan oldin yoki kursni olishdan keyin o'qib chiqarishlari uchun berilgan va uni bajarishdan qanday qilib
               bo'lishini ta'riflaydi.
            </li>
            <li>
               Bu sababli, kursni sotib olishingiz va kursni olishingizdan oldin InfoNexning to'lov va qaytarish shartlarini o'rganishingiz juda
               muhim. Ko'p onlayn ta'lim platformalari, kurslarni sotib olishdan so'ng bir hafta yoki bir necha kun ichida qaytarishga ruxsat
               berishadi, lekin bunga qarab kursni sotib olish paytida yoki to'lab olish paytida muddat belgilanadi.
            </li>
            <li>
               To'lov va qaytarish shartlari o'qituvchining va platformaning siyosati va shartnomasi asosida o'zgarishi mumkin. Buning uchun
               InfoNexning rasmiy veb-saytini yoki ularning xizmat ko'rsatuvchilariga murojaat qilishingiz kerak. Shunday qilib, to'lov shartlari va
               qaytarishni amalga oshirishni to'liq tushunishingiz mumkin bo'ladi. Bu sizning o'quv va ta'limning muhim qismlaridan biri bo'ladi.
            </li>
         </ol>
      )
   },
   {
      value: "Kurs uchun to'lovni online amalga oshirsam bo'ladimi?",
      description: (
         <ol>
            <li>
               Payme Integratsiyasi: Agar Payme to'lov tizimi platformangizni qo'llab-quvvatlayotgan bo'lsa, o'quvchilar Payme orqali to'lovni amalga
               oshirishlari mumkin. Bu o'quvchilarning o'quv kurslariga yo'naltirilgan to'lovni sodda va ishonchli usullar bilan bajarishlari uchun
               samarali bo'ladi.
            </li>
            <li>
               Click Integratsiyasi: Agar Click to'lov tizimi platformangizni qo'llab-quvvatlayotgan bo'lsa, o'quvchilar Click orqali to'lovni amalga
               oshirishlari mumkin. Bu uni platformangizga o'rnating va to'lov jarayonini amalga oshirishlari uchun yordamchi bo'lsa, o'quvchilarni
               qo'llab-quvvatlash uchun qulaydir.
            </li>
            <li>
               Boshqa to'lov integratsiyalari: Boshqa onlayn to'lov tizimlariga ham tayyor integratsiyalar mavjud bo'lishi mumkin. Misol uchun,
               PayPal, Stripe, Yandex Money yoki boshqa to'lov xizmatlarini qo'llab-quvvatlashni o'rganishingiz mumkin.
            </li>
            <li>
               Shuningdek, unutmang ki, o'quvchilarning shaxsiy to'lov ma'lumotlari yaxshi himoya qilinishi kerak. To'lov integratsiyasi
               ishlatilayotganda, ma'lumotlarni maxfiyatiylikni saqlash, xavfsizlik va amaliyoti ta'minlash uchun keng qamrovli xavfsizlik
               chora-tadbirlarini olib borish juda muhimdir.
            </li>
         </ol>
      )
   }
];

const Main: FunctionComponent = () => {
   const { classes } = useStyles();
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
