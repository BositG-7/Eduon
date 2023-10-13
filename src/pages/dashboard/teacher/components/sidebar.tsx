import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, createStyles, Flex, getStylesRef, Navbar, rem } from "@mantine/core";
// eslint-disable-next-line import/order
import { BiFolderMinus, BiSolidAddToQueue } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiWallet3Fill } from "react-icons/ri";
import { TbSquareChevronsLeft, TbSquareChevronsRight } from "react-icons/tb";

const useStyles = createStyles(theme => ({
   header: {
      paddingBottom: theme.spacing.md,
      marginBottom: `calc(${theme.spacing.md} * 1.5)`,
      borderBottom: `${rem(2)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
   },

   link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: 16,
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 600,

      "&:hover": {
         backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : "rgba(128, 116, 248, 0.04)",
         color: theme.colorScheme === "dark" ? theme.white : theme.black,

         [`& .${getStylesRef("icon")}`]: {
            color: theme.colorScheme === "dark" ? theme.white : theme.black
         }
      }
   },

   linkIcon: {
      ref: getStylesRef("icon"),
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm
   },

   linkActive: {
      "&, &:hover": {
         backgroundColor: "rgba(128, 116, 248, 0.15)",
         color: "#3629B7",
         [`& .${getStylesRef("icon")}`]: {
            color: "#3629B7"
         }
      }
   }
}));

const data = [
   { link: "/dashboard/teacher/my-courses", label: "Kurslarim", icon: RiWallet3Fill },
   { link: "/dashboard/teacher/finance", label: "Moliya", icon: BiFolderMinus },
   { link: "/dashboard/teacher/profile", label: "Profile", icon: BsPerson },
   { link: "/dashboard/teacher/informations", label: "Ma’lumotlar", icon: HiOutlineDocumentText },
   { link: "/dashboard/teacher/create-course", label: "Kurs-qoshish", icon: BiSolidAddToQueue }
];

function Sidebar() {
   const { classes, cx } = useStyles();
   const [active, setActive] = useState("Home");
   const [sidebarVisible, setSidebarVisible] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      const savedSidebarVisibility = localStorage.getItem("sidebarVisible");

      if (savedSidebarVisibility) {
         setSidebarVisible(savedSidebarVisibility === "true");
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("sidebarVisible", sidebarVisible.toString());
   }, [sidebarVisible]);

   const links = data.map(item => (
      <p
         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
         key={item.label}
         onClick={event => {
            event.preventDefault();
            setActive(item.label);
            navigate(item.link);
         }}
      >
         <item.icon className={classes.linkIcon} />
         <span className="sidebarLink" style={{ fontWeight: "400", fontSize: "14px" }}>
            {item.label}
         </span>
      </p>
   ));

   const hideSidebar = () => {
      setSidebarVisible(false);
   };

   const showSidebar = () => {
      setSidebarVisible(true);
   };

   return (
      <Flex direction="column" align="center" h="auto">
         {sidebarVisible && (
            <>
               <div className="blur-overlay" onClick={hideSidebar} />
               <Navbar sx={{ height: "auto", border: "none" }} width={{ sm: 260 }} p="md">
                  <Navbar.Section grow>{links}</Navbar.Section>
               </Navbar>
               {/* <Button w="80%" m="0 26px " className="hide-show-btn" onClick={sidebarVisible ? hideSidebar : showSidebar}>
                  {sidebarVisible ? <TbSquareChevronsLeft size={24} /> : <TbSquareChevronsRight size={24} />}
               </Button> */}
            </>
         )}
         <Button w="80%" m="0 26px " className="hide-show-btn" onClick={sidebarVisible ? hideSidebar : showSidebar}>
            {sidebarVisible ? <TbSquareChevronsLeft size={24} /> : <TbSquareChevronsRight />}
         </Button>
      </Flex>
   );
}

export default Sidebar;
