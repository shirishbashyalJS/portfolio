import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav } from "./components/nav";
import { Home } from "./components/Home";
import { Technology } from "./components/Technology";
import { Project } from "./components/Project";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Desktop } from "./welcome/Desktop";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";
import { Mobile } from "./welcome/Mobile";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.innerWidth >= 831 ? "desktop" : "mobile";
  });
  useEffect(() => {
    if (currentPage === "welcome" || currentPage === "portfolio") {
      const handleMouseMove = (e) => {
        const Top = e.pageY;
        const Left = e.pageX;

        // Create a new div for the balloon
        const balloon = document.createElement("ballon");
        balloon.style.top = `${Top}px`;
        balloon.style.left = `${Left}px`;
        let size = Math.random() * 100;
        balloon.style.width = 20 + size + "px";
        balloon.style.height = 20 + size + "px";

        // Append the balloon to the body
        document.body.appendChild(balloon);
        setTimeout(() => {
          balloon.remove();
        }, 1800);
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup event listener
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [currentPage]);

  return (
    <>
      {currentPage === "desktop" && (
        <Desktop currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "mobile" && <Mobile setCurrentPage={setCurrentPage} />}
      {currentPage === "welcome" && <Welcome currentPage={currentPage} />}
      {currentPage === "portfolio" && (
        <>
          <div
            className="fade-in"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <Nav />
            <div className="container ">
              <div className="components  d-flex flex-column align-items-center mt-5 gap-3 ">
                <Home />
                <Technology />
                <Project />
                <About />
                <Contact />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
