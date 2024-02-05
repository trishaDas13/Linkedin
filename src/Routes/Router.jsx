import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
]);
