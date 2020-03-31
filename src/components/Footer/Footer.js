import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <footer>
      <div>Copyright &copy; {year}</div>
      <div>Developed by: Michael Vano</div>
    </footer>
  );
};

export { Footer };
