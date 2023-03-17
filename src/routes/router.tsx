import { lazy } from "react";
import {
  createBrowserRouter,
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
            const errors = {
              email: "",
              password: ""
            };

            Object.keys(updates).forEach((field) => {
              const value = updates[field];
              if(field === 'email') {
                if (typeof value !== "string" || !value.includes("@")) {
                  errors.email =
                    "That doesn't look like an email address";
                }
              }
              if(field === 'password') {
                if (typeof value !== "string" || value.length < 6) {
                  errors.password = "Password must be > 6 characters";
                }
              }
            });

            // return data if we have errors
            if (Object.keys(errors).length) {
              return errors;
            }
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
