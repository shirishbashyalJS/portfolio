export const Welcome = ({ currentPage }) => {
  return (
    <section
      className={
        currentPage === "portfolio"
          ? "welcome fade-out d-flex justify-content-center align-items-center"
          : "welcome d-flex justify-content-center align-items-center"
      }
      style={{
        height: " 100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <p className="welcome-text" style={{ userSelect: "none" }}>
        Welcome
      </p>
    </section>
  );
};
