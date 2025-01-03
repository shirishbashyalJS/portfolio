import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  const handleGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shirisjbasjyal@gmail.com"
    );
  };
  return (
    <section
      className="contact  col-md-5 p-5"
      id="contact"
      style={{
        borderRadius: "5px",
        backgroundColor: "black",
      }}
    >
      <div className="container d-flex flex-column">
        <p className="heading">Contact</p>
        <div className="links">
          <ul className="d-flex flex-1 justify-content-between">
            <li className="contact-links">
              <a
                className="text-body-secondary d-flex flex-column align-items-center"
                href="https://www.facebook.com/shirish.bashyal.5"
                target="_blank"
              >
                <FaFacebook className="fs-1" />
                <p className="text fs-3">FaceBook</p>
              </a>
            </li>
            <li className="contact-links">
              <div
                onClick={handleGmail}
                className=" d-flex flex-column align-items-center"
                style={{ cursor: "pointer" }}
              >
                <SiGmail className="fs-1" />
                <p className="text fs-3">Gmail</p>
              </div>
            </li>
            <li className="contact-links">
              <a
                className="text-body-secondary d-flex flex-column align-items-center"
                href="https://github.com/shirishbashyalJS?tab=repositories"
                target="_blank"
              >
                <FaGithub className="fs-1" />
                <p className="text fs-3">GitHub</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
