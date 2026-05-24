import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameCalculation.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`calculator-card-section-wrapper ${className}`}>
      <Box className="calculator-card-section">
        <Box className="decorative-background-element" />
        <div className="container2">
          <Box className="input-area">
            <Box className="container3">
              <Box className="label">
                <Typography
                  className="flight-cost-usd"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-12)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  FLIGHT COST (USD)
                </Typography>
              </Box>
              <TextField
                className="container4"
                placeholder="1250"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d6dde7" },
                  "& .MuiInputBase-root": {
                    height: "62px",
                    backgroundColor: "#f6f8fb",
                    borderRadius: "8px",
                    fontSize: "20px",
                  },
                  "& .MuiInputBase-input": { color: "#001e40" },
                }}
              />
            </Box>
            <Box className="backgroundborder">
              <Box className="container5">
                <Box className="margin">
                  <img className="icon2" alt="" src="/Icon1.svg" />
                </Box>
                <Box className="margin2">
                  <Box className="container6">
                    <Box className="label">
                      <Typography
                        className="gold-member-bonus"
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-24)", fontWeight: "700" }}
                      >
                        Gold Member Bonus
                      </Typography>
                    </Box>
                    <Box className="container7">
                      <div className="members-earn-5">
                        Members earn 5% bonus points on
                        <br />
                        all eligible flight purchases.
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="result-area">
            <Box className="margin3">
              <Box className="container8">
                <Typography
                  className="flight-cost-usd"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-12)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  POINTS TO BE EARNED
                </Typography>
              </Box>
            </Box>
            <Box className="margin4">
              <Box className="container9">
                <Typography
                  className="h2"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontWeight: "700",
                    lineHeight: "52.8px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  6,562
                </Typography>
              </Box>
            </Box>
            <Box className="background">
              <div className="members-earn-5">
                Based on 5 pts per $1 + 5% bonus
              </div>
            </Box>
          </Box>
        </div>
      </Box>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
