import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </BrowserRouter>
);
