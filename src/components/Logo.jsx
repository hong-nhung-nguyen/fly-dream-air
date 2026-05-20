import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./Logo.css";

const Logo = ({ className = "" }) => {
  return (
    <Box className={`logo ${className}`}>
      <img className="icon" loading="lazy" alt="" src="/Icon.svg" />
    </Box>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
