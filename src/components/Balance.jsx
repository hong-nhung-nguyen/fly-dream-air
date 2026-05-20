import { Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Balance.css";

const Balance = ({ className = "" }) => {
  return (
    <section className={`balance ${className}`}>
      <section className="card-base-wrapper">
        <Box className="card-base">
          <Box className="content">
            <Box className="balance-details">
              <Box className="available-balance-wrapper">
                <Typography
                  className="available-balance"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ letterSpacing: "0.02em", fontWeight: "700" }}
                >
                  AVAILABLE BALANCE
                </Typography>
              </Box>
              <Box className="balance-value">
                <Typography
                  className="dream-miles-label"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
                >
                  15,250
                </Typography>
              </Box>
              <Box className="miles-label">
                <div className="dreammiles">DreamMiles</div>
              </Box>
            </Box>
          </Box>
          <Box className="button">
            <Button
              className="button-primary"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#001e40",
                borderRadius: "8px",
                "&:hover": { background: "#001e40" },
                width: 200.3,
              }}
            >
              Redeem Points
            </Button>
            <Button
              className="button-primary"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#001e40",
                fontSize: "16",
                background: "#f6f8fb",
                border: "#001e40 solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#f6f8fb" },
                width: 200.3,
              }}
            >
              Transfer Points
            </Button>
          </Box>
        </Box>
      </section>
      <section className="card-base-container">
        <Box className="card-base2">
          <Box className="expiry-icon-wrapper">
            <Box className="expiry-icon">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/Vector.svg"
              />
            </Box>
          </Box>
          <Box className="expiry-details">
            <Typography
              className="points-expiring-soon"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500", letterSpacing: "0.02em" }}
            >
              Points Expiring Soon
            </Typography>
          </Box>
          <Box className="expiry-details2">
            <div className="of-your-dreammiles">
              2,500 of your DreamMiles will expire on October 31st, 2024. Use
              them now to avoid losing them.
            </div>
          </Box>
          <button className="expiry-options">
            <div className="view-redemption-options">
              View Redemption Options
            </div>
          </button>
        </Box>
      </section>
    </section>
  );
};

Balance.propTypes = {
  className: PropTypes.string,
};

export default Balance;
