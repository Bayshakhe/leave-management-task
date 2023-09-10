import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateDepartment from "./Components/CreateDepartment.jsx";
import AllDepartment from "./Components/AllDepartment.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <AllDepartment></AllDepartment>,
      },
      {
        path: "/createDepartment",
        element: <CreateDepartment></CreateDepartment>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
