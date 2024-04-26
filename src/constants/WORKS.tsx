type worksItem = {
  name: string, 
  img: string,
  path: string
};

const assertsRootPath = window.location.hostname === "localhost"
  ? "/src/assets/"
  : "https://github.com/RyuichiKondo/portfolio/blob/main/src/assets/";
const createImgPath = (fileName: string): string => assertsRootPath + fileName;
const workPagesRootPath = "/portfolio/";
const createWorkPagePath = (path: string): string => workPagesRootPath + path;

const WORKS: worksItem[] = [
  {name: "study", img: createImgPath("lizard.png"), path: createWorkPagePath("study")},
  {name: "bar", img: createImgPath("lizard.png"), path: createWorkPagePath("bar")},
  {name: "foo", img: createImgPath("lizard.png"), path: createWorkPagePath("foo")},
  {name: "bar", img: createImgPath("lizard.png"), path: createWorkPagePath("bar")},
  // If you add pages, add them here.
];

export default WORKS;