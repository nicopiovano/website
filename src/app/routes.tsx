import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "experiencia", Component: Experience },
      { path: "portfolio", Component: Portfolio },
      { path: "sobre-mi", Component: About },
      { path: "contacto", Component: Contact },
    ],
  },
]);
