import React, { FunctionComponent, useState } from "react";
import { Box, SegmentedControl } from "@mantine/core";

import Main from "./main";

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
   const [selectedValue, setSelectedValue] = useState("Barchasi"); // Initial selected value

   return (
      <>
         <Box
            mt="150px"
            w="100%"
            display="flex"
            sx={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}
         >
            <hr style={{ width: "100%" }} />
            <SegmentedControl
               sx={{
                  color: "rgba(17, 17, 17, 0.54)",
                  fontFamily: "Gilroy-Medium",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal"
               }}
               data={[
                  { label: "Barchasi", value: "Barchasi" },
                  { label: "To’lovlar", value: "To’lovlar" },
                  { label: "Kurslar", value: "Kurslar" },
                  { label: "Xarid qilish", value: "Xarid qilish" },
                  { label: "Profil", value: "Profil" }
               ]}
               value={selectedValue} // Set the selected value
               onChange={value => setSelectedValue(value)} // Update the selected value
            />
            <Main value={selectedValue} /> {/* Pass the selected value to the Main component */}
         </Box>
      </>
   );
};

export default Category;
