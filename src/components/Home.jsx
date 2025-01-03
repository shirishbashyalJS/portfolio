export const Home = () => {
  return (
    <section
      className="profile col-md-5 p-5"
      id="profile"
      style={{
        borderRadius: "5px",
        backgroundColor: "black",
        marginTop: "5rem",
      }}
    >
      <div className="container d-flex flex-column align-items-center">
        <div
          className="profile-img"
          style={{
            width: "130px",
            height: "150px",
            borderRadius: "50%",
          }}
        >
          <img
            src="/image/pp size photo.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
          <img src="/image/thug glass.png" alt="" className="glass" />
        </div>
        <div className="welcome-text-container text-center">
          <p
            className="welcome-text-porfile fs-3 mt-5"
            style={{ textShadow: "0 0 10px blue, 0 0 5px blue" }}
          >
            Hello There, Myself{" "}
            <a href="#about" style={{ textDecoration: "none" }}>
              <span className=" fs-3" style={{ color: "#4286f4" }}>
                Shirish Basyal
              </span>
            </a>
            <br />
            MERN STACK DEVELOPER
          </p>
        </div>
      </div>
    </section>
  );
};
