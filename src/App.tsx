import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "./constants/ROUTES"
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <BrowserRouter>
      <Header isMenuOpen={isMenuOpen} onToggleIsMenuOpen={toggleIsMenuOpen}/>
      <main className="px-vw-5 py-vw-3">
        <Routes>
          {ROUTES.map(({path, Component}, i) =>
            <Route key={i} path={path} element={<Component />} />
          )}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;