import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import User from "../Pages/User";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => fetch("http://localhost:3000/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
    loader: () => fetch("http://localhost:3000/user"),
  },
]);
