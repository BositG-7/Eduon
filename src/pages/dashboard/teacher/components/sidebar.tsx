import { useState } from "react";
import { Code, createStyles, getStylesRef, Group, Navbar, rem } from "@mantine/core";
import { IconBellRinging, IconFingerprint, IconKey, IconReceipt2 } from "@tabler/icons-react";
// IconSwitchHorizontal

const useStyles = createStyles(theme => ({
   header: {
      paddingBottom: theme.spacing.md,
      marginBottom: `calc(${theme.spacing.md} * 1.5)`,
      borderBottom: `${rem(1)} solid ${
         theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`
   },

   footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
         theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`
   },

   link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
         backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
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
         backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor })
            .background,
         color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
         [`& .${getStylesRef("icon")}`]: {
            color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color
         }
      }
   }
}));

const data = [
   { link: "", label: "Profil", icon: IconBellRinging },
   { link: "", label: "Kurslarim", icon: IconReceipt2 },
   { link: "", label: "Moliya", icon: IconFingerprint },
   { link: "", label: "Ma'lumotlar", icon: IconKey }
];

function Sidebar() {
   const { classes, cx } = useStyles();
   const [active, setActive] = useState("Billing");

   const links = data.map(item => (
      <a
         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
         href={item.link}
         key={item.label}
         onClick={event => {
            event.preventDefault();
            setActive(item.label);
         }}
      >
         <item.icon className={classes.linkIcon} stroke={1.5} />
         <span>{item.label}</span>
      </a>
   ));

   return (
      <Navbar width={{ sm: 300 }} p="md">
         <Navbar.Section grow>
            <Group className={classes.header} position="apart">
               <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
            </Group>
            {links}
         </Navbar.Section>

         {/* <Navbar.Section className={classes.footer}>
            <a href="#" className={classes.link} onClick={event => event.preventDefault()}>
               <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
               <span>Change account</span>
            </a>
         </Navbar.Section> */}
      </Navbar>
   );
}
export default Sidebar;