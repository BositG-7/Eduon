/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, createStyles, Flex, getStylesRef, Group, Menu, Navbar, rem, Text, UnstyledButton } from "@mantine/core";
// eslint-disable-next-line import/order
import { useAuth } from "modules/auth/context";
import { BsFillShieldLockFill, BsGrid } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight, FiPieChart } from "react-icons/fi";
import { IoLogOut, IoNotificationsOutline, IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";

const useStyles = createStyles(theme => ({
   header: {
      paddingBottom: theme.spacing.md,
      marginBottom: `calc(${theme.spacing.md} * 1.5)`,
      borderBottom: `${rem(2)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
   },

   footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `${rem(2)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
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
   },

   user: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      transition: "background-color 100ms ease",
      fontWeight: 400,

      "&:hover": {
         backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
      },

      [theme.fn.smallerThan("xs")]: {
         display: "none"
      }
   },

   userActive: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
   }
}));

const data = [
   { link: "/dashboard/hospitals", label: "Hospitals", icon: BsGrid },
   { link: "/dashboard/booking", label: "Booking", icon: TbCalendarTime },
   { link: "/dashboard/history", label: "History", icon: FiPieChart },
   { link: "/dashboard/specialization", label: "Specialization", icon: IoNotificationsOutline }
];

function Sidebar() {
   const { classes, cx } = useStyles();
   const [active, setActive] = useState("Home");
   const [sidebarVisible, setSidebarVisible] = useState(true);
   const [userMenuOpened, setUserMenuOpened] = useState(false);
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

   const { user, methods } = useAuth();

   return (
      <div className="sidebar">
         {sidebarVisible && (
            <>
               <div className="blur-overlay" onClick={hideSidebar} />
               <Navbar sx={{ height: "100vh" }} width={{ sm: 260 }} p="md">
                  <Navbar.Section grow>
                     <Group className={classes.header} position="apart">
                        <Box sx={{ fontWeight: 700, fontSize: 25 }}>
                           <img src="" alt="" />
                        </Box>
                     </Group>
                     <Text sx={{ color: "#3629B7" }} ml={12}>
                        Menu
                     </Text>
                     {links}
                  </Navbar.Section>
                  <Navbar.Section className={classes.footer}>
                     <Menu width={180} position="right" onClose={() => setUserMenuOpened(false)} onOpen={() => setUserMenuOpened(true)} withinPortal>
                        <Menu.Target>
                           <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                              <Flex align="center" gap="xs">
                                 <Avatar src="" radius="xl" size={30} />
                                 <div>
                                    <Flex align="center" gap="xs" sx={{ justifyContent: "space-between" }}>
                                       <Text sx={{ color: "#494949", fontWeight: "lighter", fontSize: "16px" }} size="m">
                                          {user?.firstName}
                                       </Text>
                                       <PiDotsThreeOutlineLight />
                                    </Flex>
                                    <Text sx={{ fontWeight: "lighter", fontSize: "12px", color: "#494949" }} weight={500} size="xs" color="grey">
                                       {user?.email}
                                    </Text>
                                 </div>
                              </Flex>
                           </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                           <Menu.Item onClick={() => navigate("/dashboard/profile")}>
                              <Flex gap="xs">
                                 <IoPerson />
                                 Profile
                              </Flex>
                           </Menu.Item>
                           <Menu.Item onClick={() => navigate("/dashboard/change-password")}>
                              <Flex gap="xs">
                                 <BsFillShieldLockFill />
                                 Change Password
                              </Flex>
                           </Menu.Item>
                           <Menu.Item onClick={() => navigate("/dashboard/change-email")}>
                              <Flex gap="xs">
                                 <MdEmail />
                                 Change Email
                              </Flex>
                           </Menu.Item>
                           <Menu.Item color="red">
                              <Flex gap="xs" onClick={methods.logout}>
                                 <IoLogOut />
                                 Logout
                              </Flex>
                           </Menu.Item>
                        </Menu.Dropdown>
                     </Menu>
                  </Navbar.Section>
               </Navbar>
            </>
         )}
         <button className="hide-show-btn" onClick={sidebarVisible ? hideSidebar : showSidebar}>
            {sidebarVisible ? <FiChevronLeft /> : <FiChevronRight />}
         </button>
      </div>
   );
}

export default Sidebar;
