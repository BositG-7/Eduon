import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Containers } from "modules/auth";
// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
import { Routes } from "routes";

import Navbar from "components/navbar";

import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

console.log();

root.render(
   <BrowserRouter>
      <MantineProvider>
         <Containers.Auth>
            <>
               <Notifications position="top-right" />
               <Navbar />
               <Routes />
            </>
         </Containers.Auth>
      </MantineProvider>
   </BrowserRouter>
);
