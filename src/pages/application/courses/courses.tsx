import React, { FunctionComponent } from "react";
import { Box, Button, Checkbox, Divider, Flex, InputBase, Slider, Title } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { useList } from "modules/courses/hooks/course-use-list";
// import { useCourse } from "modules/courses/context"
// import { useFilter } from "modules/courses/hooks/use-filter";
// eslint-disable-next-line import/order
import { AiOutlineSend } from "react-icons/ai";
import { Paginated } from "utils/paginate";

import Paginate from "components/pagination";

import Course from "./components/course";

interface CoursesProps {}

const Courses: FunctionComponent<CoursesProps> = () => {
   const [value, setValue] = React.useState(50);
   // const { course } = useCourse();
   const { course } = useList();

   console.log("input value  => ", value);

   const [pageSize, setPageSize] = React.useState<number>(9);
   const [currentPage, setCurrentPage] = React.useState<number>(1);
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const paginated = Paginated({ currentPage, pageSize });

   const marks = [{ value: 1000, label: "1000" }];

   const initialValues = {
      daraja: [
         { label: "Yuqori", checked: false, key: 1 },
         { label: "Orta", checked: false, key: 2 },
         { label: "Boshlangich", checked: false, key: 3 }
      ],
      til: [
         { label: "Ozbekcha", checked: false, key: 1 },
         { label: "Inglizcha", checked: false, key: 2 },
         { label: "Ruscha", checked: false, key: 3 }
      ]
   };

   const [valuesDaraja, handlersDaraja] = useListState(initialValues.daraja);
   const [valuesTil, handlersTil] = useListState(initialValues.til);

   const itemsDaraja = valuesDaraja.map((value, index) => (
      <Checkbox
         mt="xs"
         styles={{
            input: {
               border: "2px solid #006AFA"
            }
         }}
         label={value.label}
         key={value.key}
         checked={value.checked}
         onChange={event => handlersDaraja.setItemProp(index, "checked", event.currentTarget.checked)}
      />
   ));
   const itemsTil = valuesTil.map((value, index) => (
      <Checkbox
         mt="xs"
         styles={{
            input: {
               border: "2px solid #006AFA"
            }
         }}
         label={value.label}
         key={value.key}
         checked={value.checked}
         onChange={event => handlersTil.setItemProp(index, "checked", event.currentTarget.checked)}
      />
   ));

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
                  <Slider max={1000} size={8} marks={marks} value={value} onChange={setValue} pt={20}  />
                  <Title mt="md" size="sm">
                     onChange value: {value}
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
                     Daraja
                  </Title>

                  {itemsDaraja}

                  <Divider my="lg" />
                  <Title mb={20} color="grey" size={16} mt={10}>
                     Til
                  </Title>

                  {itemsTil}

                  <Button onClick={event => console.log(event)} h={50} mt={20} mb={10} sx={{ borderRadius: "10px" }}>
                     Ko‘rsatish
                  </Button>
               </Flex>

               <Flex align="center" sx={{ flexDirection: "column" }}>
                  <Flex align="center" sx={{ flexDirection: "column" }}>
                     <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr ", gap: "20px" }}>
                        {
                           // @ts-ignore
                           course?.map(item => (
                              <Course
                                 key={item.id}
                                 id={String(item.id)}
                                 img={item.image}
                                 price={item.price}
                                 name={item.name}
                                 view={String(item.view)}
                              />
                           ))
                        }
                     </Box>

                     {/* @ts-ignore */}
                     <Paginate total={course?.length} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Courses;
