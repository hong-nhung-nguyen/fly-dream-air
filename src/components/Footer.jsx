import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <Box className="divider" />
      <div className="footer-row">
        <div className="footer-right">
          <Box className="col-discover">
            <div className="discover">DISCOVER</div>
            <div className="destinations">Destinations</div>
            <div className="destinations">Flight Status</div>
            <div className="destinations">Experience</div>
          </Box>
          <Box className="col-company">
            <div className="discover">COMPANY</div>
            <div className="destinations">Privacy Policy</div>
            <div className="destinations">Terms of Service</div>
            <div className="destinations">Contact Support</div>
            <div className="destinations">Careers</div>
          </Box>
        </div>
        <Box className="footer-left">
          <Box className="brand-wrapper">
            <Typography
              className="brand2"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
            >
              FlyDreamAir
            </Typography>
          </Box>
          <Box className="tagline-container">
            <div className="tagline2">
              Elevating your journey with every mile.
            </div>
          </Box>
          <Box className="tagline-container">
            <div className="copyright">
              © 2026 FlyDreamAir. The Elevated Horizon.
            </div>
          </Box>
        </Box>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
