import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    },
    {
        path: '/addCoffee',
        element: <AddCoffee/>
    },
    {
        path: '/updateCoffee',
        element: <UpdateCoffee/>
    }
]);
