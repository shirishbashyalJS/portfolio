export const About = () => {
  const about = {
    name: "Shirish Bashyal",
    age: "19 years",
    address: "Tilottama-16, Rupandehi, Nepal",
    contact: "+977 980246410",
    email: "shirisjbasjyal@gmail.com",
    education: "High School Graduate,...",
    source: "Official docs and youtube",
    hobby: "Learning...",
  };
  return (
    <section
      className="about col-md-5 p-2"
      id="about"
      style={{ borderRadius: "5px", backgroundColor: "black" }}
    >
      <div className="container d-flex flex-column align-items-center">
        <p className="heading">About</p>
        <ul className="about-list">
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Name:
            </span>
            {about.name}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Age:
            </span>
            {about.age}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Address:
            </span>
            {about.address}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Contact:
            </span>
            {about.contact}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Email:
            </span>
            {about.email}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Education:
            </span>
            {about.education}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Learning Source:
            </span>
            {about.source}
          </li>
          <li className="itm fs-3">
            <span className="fs-3" style={{ color: "GrayText" }}>
              Hobby:
            </span>
            {about.hobby}
          </li>
        </ul>
      </div>
    </section>
  );
};
