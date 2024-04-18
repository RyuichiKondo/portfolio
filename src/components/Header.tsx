import { Link, useLocation } from "react-router-dom"
import ROUTES from "../constants/ROUTES"
import HamburgerMenuModal from "./HamburgerMenuModal"

export type HeaderProps = {
  isMenuOpen: boolean,
  onToggleIsMenuOpen: () => void
};

const Header = (props: HeaderProps) => {
  const {isMenuOpen, onToggleIsMenuOpen} = props;
  const menuLogoSvgPath = (<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>);
  const closeLogoSvgPath = (<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>);
  const numberOfPagesExcludingNotFoundPage = ROUTES.length - 1;
  const defaultPath = "/portfolio/";
  const defaultPathName = "WORK";
  const currentPath = useLocation().pathname;
  const createPathName = (path: string): string =>
    path === defaultPath ? defaultPathName : path.substring(defaultPath.length, path.length).toUpperCase();

  return (
    <>
      <header className="bg-white w-full flex justify-between items-center px-vw-5 py-vw-3">
        <Link to={defaultPath} className="" onClick={() => onToggleIsMenuOpen()}>
          <img src="" alt="logo"/>
        </Link>
        {/* Hamburger Menu */}
        <div className="flex md:hidden">
          <button type="button" aria-label="toggle menu" onClick={() => onToggleIsMenuOpen()}>
            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              {isMenuOpen ? closeLogoSvgPath : menuLogoSvgPath}
            </svg>
          </button>
        </div>
        {/* Menu Link */}
        <nav className="hidden md:flex flex-row items-center">
          {ROUTES.map(({path}, i) =>
            ((i < numberOfPagesExcludingNotFoundPage) &&
              <Link key={i} to={path}
                className={
                  (path === currentPath ? "text-primary" : "text-black") + " ml-vw-3 text-sm hover:text-primary"
                }
              >
                {createPathName(path)}
              </Link>
            )
          )}
        </nav>
      </header>
      {isMenuOpen &&
        <HamburgerMenuModal
          numberOfPagesExcludingNotFoundPage={numberOfPagesExcludingNotFoundPage}
          currentPath={currentPath}
          onCreatePathName={createPathName}
          onToggleIsMenuOpen={onToggleIsMenuOpen}
        />
      }
    </>
  )
}

export default Header;