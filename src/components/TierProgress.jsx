import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import "./TierProgress.css";

const TierProgress = ({ className = "" }) => {
  return (
    <main className={`tier-progress ${className}`}>
      <Box className="card-base-frame">
        <Box className="card-base3">
          <Box className="tier-content">
            <Box className="tier-details">
              <Box className="tier-header">
                <Typography
                  className="tier-progress2"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "600" }}
                >
                  Tier Progress
                </Typography>
              </Box>
              <Box className="background">
                <Box className="container">
                  <img className="icon" loading="lazy" alt="" src="/Icon1.svg" />
                </Box>
                <Box className="margin">
                  <Typography
                    className="current-silver-member"
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-12)",
                      letterSpacing: "var(--ls-0_6)",
                      fontWeight: "700",
                    }}
                  >
                    Current: Silver Member
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="container2">
              <Typography
                className="current-silver-member"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{
                  lineHeight: "var(--lh-12)",
                  letterSpacing: "var(--ls-0_6)",
                  fontWeight: "700",
                }}
              >
                Next Tier: Gold
              </Typography>
              <Box className="container3">
                <Typography
                  className="pts-needed"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "500", lineHeight: "var(--lh-28)" }}
                >
                  3,000 pts needed
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="progress-bar-wrapper">
            <Box className="progress-bar">
              <Box className="progress-fill-parent">
                <Box className="progress-fill">
                  <Box className="progress-rect" />
                </Box>
                <Box className="tier-labels">
                  <Typography
                    className="priority-boarding"
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontWeight: "700" }}
                  >
                    Silver (0)
                  </Typography>
                  <Typography
                    className="priority-boarding"
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontWeight: "700" }}
                  >
                    Gold (5,000)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="benefit-container">
            <Box className="frame-parent">
              <input className="frame-input" type="checkbox" />
              <Box className="benefit-label">
                <div className="priority-boarding">Priority Boarding</div>
              </Box>
            </Box>
            <Box className="lounge-benefit-parent">
              <Box className="lounge-benefit">
                <img
                  className="lounge-icon"
                  loading="lazy"
                  alt=""
                  src="/Lounge-Icon.svg"
                />
              </Box>
              <Box className="benefit-label">
                <div className="priority-boarding">Lounge Access (Gold)</div>
              </Box>
            </Box>
            <Box className="bag-container-parent">
              <Box className="bag-container">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/Group.svg"
                />
              </Box>
              <Box className="benefit-label">
                <div className="priority-boarding">
                  Free Checked Bags (Gold)
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

TierProgress.propTypes = {
  className: PropTypes.string,
};

export default TierProgress;
