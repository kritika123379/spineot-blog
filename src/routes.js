import Dashboard from "views/Dashboard";
import TableList from "views/TableList";
import Currentusers from "views/Currentusers";
import Adduser from "views/Adduser";
import Blogs from "views/Blogs";
import Services from "views/Services";


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
    component:Blogs,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services",
    icon: "pe-7s-bell",
    component:Services,
    layout: "/admin"
  },
  {
    path: "/addUser",
    component:Adduser,
    layout: "/admin"
  },
  {
    path: "/editUser",
    component:Adduser,
    layout: "/admin"
  }
];

export default dashboardRoutes;
