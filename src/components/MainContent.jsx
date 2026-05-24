import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={`main-content ${className}`}>
      <Box className="welcome-header">
        <Box className="welcome-message">
          <Box className="welcome-header2">
            <Typography
              className="redeem-your-elevated"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700", letterSpacing: "-0.02em" }}
            >
              Redeem your elevated experiences
            </Typography>
          </Box>
          <Box className="use-your-hard-earned-points-to-wrapper">
            <div className="use-your-hard-earned">
              Use your hard-earned points to upgrade your journey, access
              premium lounges, or indulge in exclusive retail and dining
              options.
            </div>
          </Box>
        </Box>
        <Box className="current-balance-card">
          <Box className="container34">
            <Box className="container35">
              <Typography
                className="current-balance"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{
                  lineHeight: "var(--lh-12)",
                  letterSpacing: "var(--ls-0_6)",
                  fontWeight: "700",
                }}
              >
                Current Balance
              </Typography>
            </Box>
            <Box className="container36">
              <Typography
                className="h2"
                variant="inherit"
                variantMapping={{ inherit: "h2" }}
                sx={{
                  fontWeight: "600",
                  lineHeight: "38.4px",
                  letterSpacing: "-0.32px",
                }}
              >
                15,250
              </Typography>
            </Box>
          </Box>
          <Box className="background10">
            <Box className="container37">
              <img src="/Icon1.svg" alt="star" style={{ width: "100%", height: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
