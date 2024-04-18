import { RouteProps } from "react-router-dom"
import Work from "../components/pages/Work";
import About from "../components/pages/About";
// If you add pages, add them here.
import Notfound from "../components/pages/Notfound";

const ROUTES = [
  {path: "/portfolio/" , Component: Work},
  {path: "/portfolio/about", Component: About},
  // If you add pages, add them here.
  {path: "*", Component: Notfound},
] as const satisfies RouteProps[];

export default ROUTES;