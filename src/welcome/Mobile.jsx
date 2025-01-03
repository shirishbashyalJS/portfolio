export const Mobile = ({ setCurrentPage }) => {
  return (
    <section
      className="mobile d-flex justify-content-center flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <p className="text fs-1" style={{ textShadow: "0 0 10px white" }}>
        Let's Get Started
      </p>
      <div className="switch">
        <input
          id="toggle"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              const interval1 = setTimeout(() => {
                setCurrentPage("welcome");
              }, 500);
              const interval2 = setTimeout(() => {
                setCurrentPage("portfolio");
              }, 3500);
              return () => clearTimeout(interval1, interval2);
            }
          }}
        />
        <label className="toggle" htmlFor="toggle">
          <i></i>
        </label>
      </div>
    </section>
  );
};
