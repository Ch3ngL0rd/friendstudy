import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blocked from "./routes/blocked";
import ErrorPage from "./error";
import Home from "./routes/home";
import Timer from "./routes/timer";
import "./main.css";

const router = createBrowserRouter([
  
  {
    path: "/blocked",
    element: <Blocked />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/timer/:time",
    element: <Timer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
