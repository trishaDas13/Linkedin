import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Network from "../pages/Network/Network";
import Jobs from "../pages/jobs/Jobs";
import Quotes from "../pages/quotes/Quotes";
import Layout from "../layout/Layout";
import Profile from "../pages/profile/Profile";
import News from "../pages/news/News";
import OtherUsers from "../pages/otherUsers/OtherUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/network",
        element: <Network />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/profile/:name",
        element: <OtherUsers/>
      },
      {
        path: "/news",
        element: <News/>
      }
    ]
  }
  
]);
