import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { formActionBase } from "@/utils";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import fakeApi from "@/server/fakeApi";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/authorization/Login"));
const Signup = lazy(() => import("../pages/authorization/Signup"));
const Forgot = lazy(() => import("../pages/authorization/Forgot"));
const Email = lazy(() => import("../pages/authorization/Email"));

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
          action: formActionBase({
            redirectPath: "/",
            submitFunction: fakeApi.authorize,
          }),
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
          action: formActionBase({
            redirectPath: "/auth/login",
            submitFunction: fakeApi.createUser,
          }),
        },
        {
          path: "forgot",
          element: <Forgot />,
          action: formActionBase({
            redirectPath: "/auth/email",
            submitFunction: fakeApi.showPassword,
          }),
        },
        {
          path: "email",
          element: <Email />,
        },
      ],
    },
  ],
  { basename: "/aliens-auth-app/" }
);
