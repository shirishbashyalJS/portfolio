// import { useEffect, useRef, useState } from "react";
// import { FcOpenedFolder } from "react-icons/fc";

// export const Desktop = () => {
//   const [rightEvent, setRightEvent] = useState();
//   const [rightX, setRightX] = useState(undefined);
//   const [rightY, setRightY] = useState(undefined);
//   const leftMenu = useRef(null);

//   useEffect(() => {
//     // const mouseRightClick = (e) => {
//     //   setRightX(e.clientX);
//     //   setRightY(e.clientY);
//     //   setRightEvent(true);
//     // };
//     // window.addEventListener(`contextmenu`, (e) => e.preventDefault());
//     // window.addEventListener("mousedown", (e) => {
//     //   if (e.button == 2) mouseRightClick(e);
//     //   if (e.button == 0 && !leftDivClick) {
//     //     setRightEvent(false);
//     //     setLeftDivClick(false);
//     //   }
//     //   console.log(leftDivClick);
//     // });
//     // return () => (
//     //   window.removeEventListener("mousedown", () => {}),
//     //   window.removeEventListener("contextmenu", (e) => e.preventDefault())
//     // );
//     const handleContextMenu = (e) => {
//       e.preventDefault();
//     };

//     const handleMouseDown = (e) => {
//       if (e.button === 2) {
//         // Right-click
//         setRightX(e.clientX);
//         setRightY(e.clientY);
//         setRightEvent(true);
//       } else if (e.button === 0) {
//         // Left-click
//         if (leftMenu.current && !leftMenu.current.contains(e.target)) {
//           setRightEvent(false);
//         }
//       }
//     };

//     window.addEventListener("contextmenu", handleContextMenu);
//     window.addEventListener("mousedown", handleMouseDown);

//     return () => {
//       window.removeEventListener("contextmenu", handleContextMenu);
//       window.removeEventListener("mousedown", handleMouseDown);
//     };
//   }, []);
//   return (
//     <section className="desktop">
//       {rightEvent && (
//         <div
//           ref={leftMenu}
//           className="leftClickMenu"
//           style={{
//             position: "absolute",
//             color: "black",
//             top: rightY,
//             left: rightX,
//             width: "200px",
//           }}
//         >
//           <div className="elements fs-3" style={{ width: "100%" }}>
//             <div className="element p-2 text-dark">View</div>
//             <div className="element p-2 text-dark">Short By</div>
//             <div
//               className="element p-2 text-dark"
//               onClick={() => location.reload()}
//             >
//               Refresh
//             </div>
//             <hr style={{ border: "0.5px solid black" }} />
//             <div className="element p-2 text-dark">New</div>
//             <div className="element p-2 text-dark">Display Setting</div>
//           </div>
//         </div>
//       )}
//       <div className="folders p-3">
//         <div
//           className="portfolio-folder d-flex flex-column align-items-center"
//           style={{
//             width: "100px",
//           }}
//           tabIndex={0}
//         >
//           <FcOpenedFolder style={{ fontSize: "50px" }} />
//           <p className="folder-text fs-3">Portfolio</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// // console.log(leftMenu.current.clientHeight, leftMenu.current.clientWidth);

import { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";

export const Desktop = ({ currentPage, setCurrentPage }) => {
  const [rightEvent, setRightEvent] = useState(false);
  const [rightX, setRightX] = useState(null);
  const [rightY, setRightY] = useState(null);
  const [view, setView] = useState(true);
  const [Added, setAdded] = useState("");

  const [folder, setFolder] = useState([{ name: "Shirish Bashyal" }]);

  const handleDblClick = (name) => {
    if (name === "Shirish Bashyal") {
      setCurrentPage("welcome");
      const interval = setTimeout(() => {
        setCurrentPage("portfolio");
      }, 3000);
      return () => clearTimeout(interval);
    }
  };
  const handleNew = () => {
    setFolder((prev) => [...prev, { name: "New Folder" }]);
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    setRightX(e.clientX);
    setRightY(e.clientY);
    setRightEvent(true);
  };

  const handleLeftClick = () => {
    setRightEvent(false);
  };
  useEffect(() => {
    console.log(Added);
  }, [Added]);

  return (
    <section
      className={currentPage === "welcome" ? "fade-out desktop" : "desktop"}
      onClick={handleLeftClick} // Close the menu on left-click anywhere
      onContextMenu={handleContextMenu} // Handle right-click on the desktop
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      {rightEvent && (
        <div
          className="leftClickMenu"
          style={{
            position: "absolute",
            color: "black",
            top: rightY,
            left: rightX,
            width: "200px",
          }}
        >
          <div className="elements fs-3" style={{ width: "100%" }}>
            <div
              className="element p-2 text-dark"
              onClick={() => {
                setView((prev) => {
                  return prev ? false : true;
                });
              }}
            >
              View
            </div>
            <div className="element p-2 text-dark">Sort By</div>
            <div
              className="element p-2 text-dark"
              onClick={() => location.reload()}
            >
              Refresh
            </div>
            <hr style={{ border: "0.5px solid black" }} />
            <div className="element p-2 text-dark" onClick={handleNew}>
              New
            </div>
            <div className="element p-2 text-dark">Display Setting</div>
          </div>
        </div>
      )}
      {view && (
        <div className="folders p-3">
          {folder.map((item, index) => {
            return (
              <div
                className="portfolio-folder d-flex flex-column align-items-center"
                style={{
                  width: "100px",
                }}
                key={index}
                tabIndex={0}
                onDoubleClick={() => {
                  handleDblClick(item.name);
                }}
              >
                <FcOpenedFolder style={{ fontSize: "50px" }} />
                <h1
                  className="folder-text fs-3"
                  style={{ userSelect: "none", textAlign: "center" }}
                >
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
