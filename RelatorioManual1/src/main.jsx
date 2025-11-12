import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Adicionar from "./pages/Adicionar.jsx";
import { ModalDateProvider } from "./contexts/ModalDateProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Adicionar",
    element: <Adicionar />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalDateProvider>
      <RouterProvider router={router} />
    </ModalDateProvider>
  </StrictMode>
);
