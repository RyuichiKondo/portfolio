import { Link } from "react-router-dom";
import WORKS from "../../constants/WORKS";

const Work = () => {
  return (
    <div className="md:flex md:flex-wrap">
      {WORKS.map(
        ({name, img, link}, i) => (
          <div key={i}
            className={
              "border-solid border-primary border-2 h-vh-30 my-vh-5"
              // To display two columns, add a margin to the left of the element that will be the right column,
              // and set the width of the element to 50% minus the margin.
              + " md:w-[calc(50%_-_1.5vw)]" + (i % 2 === 1 ? " md:ml-vw-3" : "")
            }
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Link key={i} to={link.path ? link.path : "/"}
              className="flex items-center justify-center w-full h-full text-[min(10vw,80px)] font-bold text-white opacity-0
                hover:opacity-100 hover:bg-primary-opacity"
            >
              {name}
            </Link>
          </div>
        )
      )}    
    </div>
  )
}

export default Work;