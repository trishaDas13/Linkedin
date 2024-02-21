import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { app } from "./FirebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <>
        <RouterProvider router={router} />
        <ToastContainer/>
   </>
);
