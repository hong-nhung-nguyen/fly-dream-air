import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPrimaryClick = useCallback(() => {
    navigate("/05-rewards-store");
  }, [navigate]);

  const onTierCardContainerClick = useCallback(() => {
    navigate("/03-member-dashboard");
  }, [navigate]);

  return (
    <section className={`points-card-container-parent ${className}`}>
      <Box className="points-card-container">
        <Box className="card-base">
          <Box className="content">
            <Box className="points-balance-details">
              <Box className="total-points-balance-wrapper">
                <Typography
                  className="total-points-balance"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ letterSpacing: "0.02em", fontWeight: "700" }}
                >
                  TOTAL POINTS BALANCE
                </Typography>
              </Box>
              <Box className="wrapper">
                <Typography
                  className="h2"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
                >
                  15,250
                </Typography>
              </Box>
              <Box className="ready-to-redeem-wrapper">
                <div className="ready-to-redeem">Ready to redeem</div>
              </Box>
            </Box>
          </Box>
          <Box className="button3">
            <Button
              className="button-primary2"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#001e40",
                borderRadius: "8px",
                "&:hover": { background: "#001e40" },
              }}
              onClick={onPrimaryClick}
            >
              Redeem Points
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="tier-card-container" onClick={onTierCardContainerClick}>
        <Box className="card-base2">
          <Box className="content">
            <Box className="points-balance-details">
              <Box className="total-points-balance-wrapper">
                <Typography
                  className="total-points-balance"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ letterSpacing: "0.02em", fontWeight: "700" }}
                >
                  CURRENT TIER
                </Typography>
              </Box>
              <Box className="tier-details-container">
                <Typography
                  className="silver-member"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "600" }}
                >
                  Silver Member
                </Typography>
                <img className="badge-icon" alt="" src="/badge.svg" />
              </Box>
            </Box>
          </Box>
          <Box className="content3">
            <Box className="progress-bar-parent">
              <Box className="progress-bar">
                <Box className="points-balance-details">
                  <Box className="pts-to-gold-parent">
                    <div className="ready-to-redeem">4,750 pts to Gold</div>
                    <div className="pts2">20,000 pts</div>
                  </Box>
                  <Box className="progress-bar-container">
                    <Box className="progress-bar-container-child" />
                  </Box>
                </Box>
              </Box>
              <Box className="view-tier-benefits-wrapper">
                <div className="ready-to-redeem">View Tier Benefits</div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="expiry-card-container" onClick={onTierCardContainerClick}>
        <Box className="card-base3">
          <Box className="card-base-inner">
            <Box className="vector-wrapper">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/Vector.svg"
              />
            </Box>
          </Box>
          <Box className="content4">
            <Box className="progress-bar">
              <Typography
                className="total-points-balance"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ letterSpacing: "0.02em", fontWeight: "700" }}
              >
                POINTS EXPIRY
              </Typography>
            </Box>
          </Box>
          <Box className="content5">
            <Box className="total-points-balance-wrapper">
              <div className="your-points-are">
                Your points are secure until
                <br />
                Dec 31, 2029.
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
