import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Divider, Flex,  Title } from "@mantine/core";
import { useSpeaker } from "modules/kurslar/hooks/use-speakar";
import { Paginated } from "utils/paginate";

import Paginate from "components/pagination";

import { useList } from "../../../../modules/kurslar/hooks/course-use-list";
import Course from "../components/course";


interface SinglePageSpeakerProps {}

const SinglePageSpeaker: FunctionComponent<SinglePageSpeakerProps> = () => {
   const { speakerID = "" } = useParams<{ speakerID: string }>();
   const { teacher } = useSpeaker(speakerID);

   const { course, isLoading } = useList();

   const [pageSize, setPageSize] = React.useState<number>(8);
   const [currentPage, setCurrentPage] = React.useState<number>(1);
   const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page);
 };

 const paginated = Paginated({ currentPage, pageSize });

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
                  </Flex>
                  <Box mt={20} sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr", gap: "20px" }}>
                  {paginated.map(item => (
                       <Course key={item.id} id={String(item.id)} img={item.image} price={item.price} name={item.name} view={String(item.view)} />
                     ))}
                  </Box>
                
                  {/* @ts-ignore */}
                  <Paginate total={course?.results?.length} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default SinglePageSpeaker;
