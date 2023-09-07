import { Pagination } from "@mantine/core";

export default function PaginationControl() {
   return (
      <Pagination
         total={10}
         position="center"
         styles={theme => ({
            control: {
               "&[data-active]": {
                  backgroundImage: theme.fn.gradient({ from: "lightBlue", to: "blue" }),
                  border: 0
               }
            }
         })}
      />
   );
}
