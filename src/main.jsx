import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Auth/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import PropertyContext from "./Context/PropertyContext.jsx";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PropertyContext>
          <RouterProvider router={Router} />
        </PropertyContext>
      </AuthProvider>
    </QueryClientProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
