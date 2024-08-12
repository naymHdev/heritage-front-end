import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Auth/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
