import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Adicionar from "./pages/Adicionar.jsx";
import { GeralProvider } from "./contexts/GeralProvider.jsx";
import { AdicionarProvider } from "./contexts/AdicionarProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Adicionar",
    element: (
      <AdicionarProvider>
        <Adicionar />
      </AdicionarProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeralProvider>
      <RouterProvider router={router} />
    </GeralProvider>
  </StrictMode>
);
