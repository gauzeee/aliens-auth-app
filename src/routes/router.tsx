import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { formActionBase } from "@/utils";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/authorization/Login"));
const Signup = lazy(() => import("../pages/authorization/Signup"));
const Forgot = lazy(() => import("../pages/authorization/Forgot"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PrivateRoute />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "auth",
      element: <PublicRoute />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="login" />,
        },
        {
          path: "login",
          action: formActionBase({ redirectPath: "/auth/login" }),
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
          action: formActionBase({ redirectPath: "/auth/signup" }),
        },
        {
          path: "forgot",
          element: <Forgot />,
          action: formActionBase({ redirectPath: "/auth/forgot" }),
        },
      ],
    },
  ],
  { basename: "/aliens-auth-app/" }
);
