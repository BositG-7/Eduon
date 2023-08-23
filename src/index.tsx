import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Containers } from "modules/auth";
// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
import { Routes } from "routes";

import Navbar from "components/navbar";

import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <BrowserRouter>
      <MantineProvider>
         <Containers.Auth>
            <Navbar />
            <Routes />
         </Containers.Auth>
      </MantineProvider>
   </BrowserRouter>
);
