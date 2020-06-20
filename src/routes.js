
import Dashboard from "views/Dashboard";
import TableList from "views/TableList";
import Currentusers from "views/Currentusers";
import Adduser from "views/Adduser";

/*

import Login from "views/Login";
mport Icons from "views/Icons";
import Maps from "views/Maps";
import Form from "./views/Form";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";*/

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Queries",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/currentuser",
    name: "Current Users",
    icon: "pe-7s-news-paper",
    component: Currentusers,
    layout: "/admin"
  },
  {
    path:"/blogs",
    name: "Blogs",
    icon: "pe-7s-science",
    component:Adduser,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services",
    icon: "pe-7s-bell",
    component:Adduser,
    layout: "/admin"
  },

 
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
