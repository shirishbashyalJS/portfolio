import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const Technology = () => {
  const handleIconClick = (link) => {
    window.open(link);
  };
  return (
    <section
      className="technology col-md-5 p-5"
      id="technology"
      style={{ borderRadius: "5px", backgroundColor: "black" }}
    >
      <div className="container">
        <p className="heading">Technology</p>
        <div
          className="items d-flex flex-wrap row-gap-3 column-gap-3"
          style={{ justifyContent: "center" }}
        >
          <div
            className="item p-2 d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() =>
              handleIconClick(
                "https://developer.mozilla.org/en-US/docs/Web/HTML"
              )
            }
          >
            <FaHtml5 style={{ fontSize: "25px" }} className="icon-tech" />

            <p className="tech-name m-0 fs-4">HTML</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() =>
              handleIconClick(
                "https://developer.mozilla.org/en-US/docs/Web/CSS"
              )
            }
          >
            <BiSolidFileCss
              style={{ fontSize: "25px" }}
              className="icon-tech"
            />
            <p className="tech-name m-0 fs-4">CSS</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() =>
              handleIconClick(
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              )
            }
          >
            <IoLogoJavascript
              style={{ fontSize: "25px" }}
              className="icon-tech"
            />
            <p className="tech-name m-0 fs-4">JS</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() => handleIconClick("https://react.dev/")}
          >
            <FaReact style={{ fontSize: "25px" }} className="icon-tech" />
            <p className="tech-name m-0 fs-4">React</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() =>
              handleIconClick("https://nodejs.org/docs/latest/api/")
            }
          >
            <FaNodeJs style={{ fontSize: "25px" }} className="icon-tech" />
            <p className="tech-name m-0 fs-4 text-nowrap">Node JS</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() => handleIconClick("https://www.mongodb.com/docs/")}
          >
            <SiMongodb style={{ fontSize: "25px" }} className="icon-tech" />
            <p className="tech-name fs-4  m-0 text-nowrap">Mongo DB</p>
          </div>
          <div
            className="item p-2  d-flex flex-column align-items-center"
            style={{ width: "25%", borderRadius: "5px" }}
            onClick={() =>
              handleIconClick("https://reactnative.dev/docs/getting-started")
            }
          >
            <TbBrandReactNative
              style={{ fontSize: "25px" }}
              className="icon-tech"
            />
            <p className="tech-name fs-4 m-0 text-nowrap">React Native</p>
          </div>
        </div>
      </div>
    </section>
  );
};
