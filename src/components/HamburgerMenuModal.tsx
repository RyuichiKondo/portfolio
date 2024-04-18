import { Link } from "react-router-dom";
import ROUTES from "../constants/ROUTES";

export type HamburgerMenuModalProps = {
  numberOfPagesExcludingNotFoundPage: number,
  currentPath: string,
  onCreatePathName: (path: string) => string,
  onToggleIsMenuOpen: () => void;
};

const HamburgerMenuModal = (props: HamburgerMenuModalProps) => {
  const {numberOfPagesExcludingNotFoundPage, currentPath, onCreatePathName, onToggleIsMenuOpen} = props;
  return (
    <div className="bg-white shadow-lg w-full absolute mx-auto py-vh-3 z-10 md:hidden">
      <div className="flex flex-col text-center">  
        {ROUTES.map(({path}, i) =>
          ((i < numberOfPagesExcludingNotFoundPage) &&
            <Link key={i} to={path}
              className={
                (path === currentPath ? "text-primary" : "text-black") + " text-sm py-vh-1 my-vh-1"
              }
              onClick={onToggleIsMenuOpen}
            >
              {onCreatePathName(path)}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default HamburgerMenuModal;