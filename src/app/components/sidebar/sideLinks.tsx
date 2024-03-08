import { FaHome, FaMobileAlt, FaBell, FaUserAlt, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

export const sideLinks = [
  {
    title: "Dashboard",
    href: "/application",
    icon: <FaHome />,
  },
  {
    title: "Mobile Request",
    href: "/application/mobilerequest",
    icon: <FaMobileAlt />,
  },
  {
    title: "Announcements",
    href: "/application/announcement",
    icon: <FaBell />,
  },
  {
    title: "Account",
    href: "/application/account",
    icon: <FaUserAlt />,
  },
  {
    title: "Settings",
    href: "/application/settings",
    icon: <FaCog />,
  },
  {
    title: "Reports",
    href: "#",
    icon: <FaChartBar />,
  },
  {
    title: "Logout",
    href: "#",
    icon: <FaSignOutAlt />,
  },
];
