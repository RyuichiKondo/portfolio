import { RouteProps } from "react-router-dom"
import Work from "../components/pages/Work";
import About from "../components/pages/About";
// If you add pages, add them here.
import Study from "../components/pages/Study";
import Notfound from "../components/pages/Notfound";

const ROUTES = [
  {path: "/portfolio/" , Component: Work},
  {path: "/portfolio/about", Component: About},
  // If you add pages, add them here.
  {path: "/portfolio/study", Component: Study},
  {path: "*", Component: Notfound},
] as const satisfies RouteProps[];

export default ROUTES;