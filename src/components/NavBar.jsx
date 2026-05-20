import Container from "./Container";
import PropTypes from "prop-types";
import "./NavBar.css";

const NavBar = ({ className = "", navigationBar = "Default (Homepage)" }) => {
  return (
    <header
      className={`nav-bar ${className}`}
      data-navigationBar={navigationBar}
    >
      <Container />
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  navigationBar: PropTypes.string,
};

export default NavBar;
