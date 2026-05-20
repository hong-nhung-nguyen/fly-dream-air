import { Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import "./UpgradeCard.css";

const UpgradeCard = ({
  className = "",
  background,
  flightFD402Oct12,
  premiumEconomyUpgrade,
  enjoyExtraLegroomAndPriority,
  pts,
  buttonPrimary,
}) => {
  return (
    <Box className={`upgrade-card-1 ${className}`}>
      <img className="background-icon" loading="lazy" alt="" src={background} />
      <Box className="container4">
        <Box className="margin2">
          <Box className="container5">
            <Typography
              className="flight-fd402-"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "var(--lh-12)",
                letterSpacing: "var(--ls-0_6)",
                fontWeight: "700",
              }}
            >
              {flightFD402Oct12}
            </Typography>
          </Box>
        </Box>
        <Box className="heading-3margin">
          <Box className="container5">
            <Typography
              className="premium-economy-upgrade"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500", lineHeight: "var(--lh-28)" }}
            >
              {premiumEconomyUpgrade}
            </Typography>
          </Box>
        </Box>
        <Box className="margin3">
          <Box className="container5">
            <div className="enjoy-extra-legroom">
              {enjoyExtraLegroomAndPriority}
            </div>
          </Box>
        </Box>
        <Box className="container7">
          <Box className="container5">
            <Typography
              className="premium-economy-upgrade"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500", lineHeight: "var(--lh-28)" }}
            >
              {pts}
            </Typography>
          </Box>
          <Button
            className="button-primary3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#001e40",
              fontSize: "16",
              background: "#fff",
              border: "#001e40 solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff" },
            }}
          >
            {buttonPrimary}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

UpgradeCard.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  flightFD402Oct12: PropTypes.string,
  premiumEconomyUpgrade: PropTypes.string,
  enjoyExtraLegroomAndPriority: PropTypes.string,
  pts: PropTypes.string,
  buttonPrimary: PropTypes.string,
};

export default UpgradeCard;
