import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
);
