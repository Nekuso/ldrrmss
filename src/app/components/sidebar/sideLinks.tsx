import { FaBullhorn, FaMobile, FaBox, FaUsers, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

export const sideLinks = [
  {
    title: "Dashboard",
    href: "/application",
    icon: <FaChartBar />,
  },
  {
    title: "Mobile Request",
    href: "/application/mobilerequest",
    icon: <FaMobile />,
  },
  {
    title: "Stocks",
    href: "/application/stocks",
    icon: <FaBox />,
  },
  {
    title: "Announcements",
    href: "/application/announcement",
    icon: <FaBullhorn />,
  },
  {
    title: "Account",
    href: "/application/account",
    icon: <FaUsers />,
  },
  {
    title: "Settings",
    href: "/application/settings",
    icon: <FaCog />,
  },
  {
    title: "Logout",
    href: "/",
    icon: <FaSignOutAlt />,
  },
];
