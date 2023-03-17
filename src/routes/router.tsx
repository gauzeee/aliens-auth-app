import { lazy } from "react";
import {
  createBrowserRouter,
  Link,
  Navigate,
  redirect,
} from "react-router-dom";
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
          action: async ({ request }) => {
            const formData = await request.formData();
            console.log(formData);
            const updates = Object.fromEntries(formData);
            console.log(updates);
            return redirect("/auth/login");
          },
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "forgot",
          element: <Forgot />,
        },
      ],
    },
  ],
  { basename: "/aliens-auth-app/" }
);
