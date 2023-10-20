import React, { FunctionComponent, useState } from "react";
import { Box } from "@mantine/core";

import Main from "./main";

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
   const [selectedValue, setSelectedValue] = useState("Barchasi");

   return (
      <>
         <Box w="100%" display="flex" sx={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Main value={selectedValue} />
         </Box>
      </>
   );
};

export default Category;
