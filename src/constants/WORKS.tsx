import { RouteProps } from "react-router-dom"
import About from "../components/pages/About";
// If you add pages, add them here.

type worksItem = {
  name: string, 
  img: string,
  link: RouteProps
};

const WORKS: worksItem[] = [
  {name: "foo", img: "/src/assets/lizard.png", link: {path: "/portfolio/foo", Component: About}},
  {name: "bar", img: "/src/assets/lizard.png", link: {path: "/portfolio/bar", Component: About}},
  {name: "foo", img: "/src/assets/lizard.png", link: {path: "/portfolio/foobar", Component: About}},
  {name: "bar", img: "/src/assets/lizard.png", link: {path: "/portfolio/foobar", Component: About}},
  // If you add pages, add them here.
];

export default WORKS;