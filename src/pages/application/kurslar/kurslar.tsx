import React, { FunctionComponent } from "react";
import { Box, Button, Checkbox, Divider, Flex, InputBase, Slider, Title } from "@mantine/core";
import { useList } from "modules/kurslar/hooks/course-use-list";
// eslint-disable-next-line import/order
import { AiFillStar, AiOutlineSend } from "react-icons/ai";

import Course from "./components/course";

interface KurslarProps {}

const Kurslar: FunctionComponent<KurslarProps> = () => {
   const { course, isLoading } = useList();
   const [value, setValue] = React.useState(50);

   const marks = [
      { value: 20, label: "" },
      { value: 50, label: "" },
      { value: 80, label: "" }
   ];

   console.log(course);

   return (
      <Box mb={50}>
         <Flex direction="column">
            <Flex direction="column" justify="center" align="center">
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
               <Flex>
                  <InputBase mb={20} autoFocus placeholder="kursni yozing..." radius="5px" w="400px" bg="#E7F0FF" p="8px" />
                  <Box sx={{ position: "relative", top: "17px", right: "30px" }}>
                     <AiOutlineSend />
                  </Box>
               </Flex>
            </Flex>

            <Divider my="lg" />
            <Flex gap={150} ml="20px">
               <Flex w="15vw" sx={{ flexDirection: "column" }}>
                  <Title color="grey" size={16} mt={30}>
                     Narx
                  </Title>
                  <Slider size={8} marks={marks} value={value} onChange={setValue} pt={20} defaultValue={50} />
                  <Title mt="md" size="sm">
                     onChange value: <b>{value}</b>
                  </Title>
                  <Flex justify="space-between" pt={20}>
                     <Title fw={500} size={12}>
                        10.000 <span style={{ color: "rgba(17, 17, 17, 0.36)" }}>so'm</span>{" "}
                     </Title>
                     <Title fw={500} size={12}>
                        10,000,000 <span style={{ color: "rgba(17, 17, 17, 0.36)" }}>so'm</span>{" "}
                     </Title>
                  </Flex>

                  <Divider my="lg" />
                  <Title mb={20} color="grey" size={16} mt={10}>
                     Reyting
                  </Title>

                  <Flex gap={10} sx={{ flexDirection: "column" }}>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Flex gap={5}>
                           <AiFillStar color="blue" size={22} />
                           <Title color="blue" size="sm">
                              4,5-5 (12,965)
                           </Title>
                        </Flex>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Flex gap={5}>
                           <AiFillStar color="blue" size={22} />
                           <Title color="blue" size="sm">
                              4,0-4,5 (98,144)
                           </Title>
                        </Flex>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Flex gap={5}>
                           <AiFillStar color="blue" size={22} />
                           <Title color="blue" size="sm">
                              3,0-4,0 (6,387)
                           </Title>
                        </Flex>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Flex gap={5}>
                           <AiFillStar color="blue" size={22} />
                           <Title color="blue" size="sm">
                              2,0-3,0 (165)
                           </Title>
                        </Flex>
                        <Checkbox />
                     </Flex>
                  </Flex>

                  <Divider my="lg" />
                  <Title mb={20} color="grey" size={16} mt={10}>
                     Til
                  </Title>

                  <Flex gap={10} sx={{ flexDirection: "column" }}>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           O’zbekcha
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Ruscha
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Inglizcha
                        </Title>
                        <Checkbox />
                     </Flex>
                  </Flex>

                  <Divider my="lg" />
                  <Title mb={20} color="grey" size={16} mt={10}>
                     Bo‘limlar
                  </Title>

                  <Flex gap={10} sx={{ flexDirection: "column" }}>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Frontend
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Backend
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Flutter
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Mobile
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Title color="rgba(17, 17, 17, 0.72)" size={16} mt={10}>
                           Sun’iy intelekt
                        </Title>
                        <Checkbox />
                     </Flex>
                     <Button h={50} mt={20} mb={10} sx={{ borderRadius: "10px" }}>
                        Ko‘rsatish
                     </Button>
                  </Flex>
               </Flex>

               <Flex align="center" sx={{ flexDirection: "column" }}>
                  <Flex gap={25} mt="30px">
                     <Button size="md" variant="light" color="#E7F0FF" sx={{ fontWeight: "normal" }}>
                        Barchasi
                     </Button>
                     <Button size="md" variant="light" sx={{ backgroundColor: "white", color: "gray", fontWeight: "normal" }}>
                        Zo‘rlari
                     </Button>
                     <Button size="md" variant="light" sx={{ backgroundColor: "white", color: "gray", fontWeight: "normal" }}>
                        Marketing
                     </Button>
                     <Button size="md" variant="light" sx={{ backgroundColor: "white", color: "gray", fontWeight: "normal" }}>
                        Dasturlash
                     </Button>
                  </Flex>
                  <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr ", gap: "20px" }}>
                     {
                        // @ts-ignore
                     }
                     {
                        // @ts-ignore
                        course.results?.map((item, idx) => {
                           if (idx > 8) {
                              return;
                           }

                           // eslint-disable-next-line consistent-return
                           return (
                              <>
                                 <Course id={item.id} img={item.image} price={item.price} name={item.name} view={item.view} rating={item.rating} />
                              </>
                           );
                        })
                     }
                  </Box>

                  <Button mt={40} size="lg" w={200}>
                     Yana ko'rish
                  </Button>
               </Flex>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Kurslar;
function useState(arg0: number): [any, any] {
   throw new Error("Function not implemented.");
}
