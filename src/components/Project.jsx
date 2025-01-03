import { MdPadding } from "react-icons/md";

export const Project = () => {
  const projects = [
    {
      name: "Weather App",
      img: "/image/weather.png",
      link: "https://webproject-6a8m.onrender.com/",
      about: "Provides real time weather details of a particular city.",
    },
    {
      name: "Country App",
      img: "/image/country.png",
      link: "https://countryreactjs.netlify.app/",
      about: "Provides fact about every country.",
    },
    {
      name: "Grocery Store",
      img: "/image/grocery.png",
      link: "https://bashyal.netlify.app/",
      about: "Full Stack online store using MERN.",
    },
  ];
  const handleProjectClick = (link) => {
    window.open(link);
  };
  return (
    <section
      className="project  col-md-5 p-3 pt-5"
      id="project"
      style={{ borderRadius: "5px", backgroundColor: "black" }}
    >
      <div className="container">
        <p className="heading">Project</p>
        <div className="projects">
          <ul className="items p-0 " style={{ direction: "none" }}>
            {projects.map((itm, index) => {
              return (
                <li
                  onClick={() => handleProjectClick(itm.link)}
                  className="item d-flex mb-4 p-2"
                  key={index}
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                  }}
                >
                  <div
                    className="image-div"
                    style={{
                      minwidth: "40%",
                      maxWidth: "40%",
                    }}
                  >
                    <img
                      src={itm.img}
                      alt="shirish bashyal"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                      }}
                    />
                  </div>
                  <div
                    className="details-div d-flex flex-column align-items-center justify-content-center w-100"
                    style={{ textAlign: "center" }}
                  >
                    <p className="title fs-3 m-0">{itm.name}</p>
                    <p
                      className="discription fs-5 m-0"
                      style={{ color: "GrayText" }}
                    >
                      {itm.about}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
