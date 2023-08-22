import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
import { Routes } from "routes";

import Navbar from "components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <BrowserRouter>
      <MantineProvider>
         <Navbar />
         <Routes />
      </MantineProvider>
   </BrowserRouter>
);
