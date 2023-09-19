/* eslint-disable import/order */
import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Divider, Flex, Pagination, Title } from "@mantine/core";
import { useSpeaker } from "modules/kurslar/hooks/use-speakar";

import { useList } from "../../../../modules/kurslar/hooks/course-use-list";
import Course from "../components/course";

interface SinglePageSpeakerProps {}

const SinglePageSpeaker: FunctionComponent<SinglePageSpeakerProps> = () => {
   const { speakerID = "" } = useParams<{ speakerID: string }>();
   const { teacher } = useSpeaker(speakerID);

   const { course, isLoading } = useList();
   const [activePage, setPage] = React.useState(1);

   return (
      <Box mb={50}>
         <Flex direction="column">
            <Divider my="lg" />
            <Box>
               <Flex>
                  <Box>
                     <Title> {speakerID} </Title>
                  </Box>
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
                  <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr", gap: "20px" }}>
                     {
                        // @ts-ignore
                        course.results?.map((item, idx) => {
                           if (idx > 7) {
                              console.log(idx);
                              return;
                           }

                           // eslint-disable-next-line consistent-return
                           return (
                              <>
                                 {/* @ts-ignore */}
                                 <Course id={item.id} img={item.image} price={item.price} name={item.name} view={item.view} rating={item.rating} />
                              </>
                           );
                        })
                     }
                  </Box>
                  <Pagination
                     pt={50}
                     value={activePage}
                     onChange={setPage}
                     total={10}
                     getItemProps={page => ({
                        component: "a",
                        href: `#page-${page}`
                     })}
                     getControlProps={control => {
                        if (control === "first") {
                           return { component: "a", href: "#page-0" };
                        }

                        if (control === "last") {
                           return { component: "a", href: "#page-10" };
                        }

                        if (control === "next") {
                           return { component: "a", href: "#page-2" };
                        }

                        if (control === "previous") {
                           return { component: "a", href: "#page-1" };
                        }

                        return {};
                     }}
                  />
                  ;
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default SinglePageSpeaker;
