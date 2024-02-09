import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Accounts from "./components/Accounts/index";
import Menu from "./components/Menu/index";
import Boards from "./components/Boards/Boards";
import { action as logoutAction } from "./components/logout";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "boards",
        element: <Boards />,
      },
      {
        path: "/logout",
        action: logoutAction,
      }
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
