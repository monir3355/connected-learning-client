import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import About from "../pages/about/About";
import Course from "../pages/course/Course";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import AddCourse from "../pages/AddCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addCourse",
        element: <AddCourse />,
      },
    ],
  },
]);
export default router;
