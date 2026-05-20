import { Typography, Box } from "@mui/material";
import UpgradeCard from "./UpgradeCard";
import PropTypes from "prop-types";
import "./RecommendedUpgrades.css";

const RecommendedUpgrades = ({ className = "" }) => {
  return (
    <section className={`recommended-upgrades ${className}`}>
      <Box className="section-recommended-upgrades">
        <Box className="container9">
          <Box className="heading-2">
            <Typography
              className="recommended-upgrades2"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "600", lineHeight: "31px" }}
            >
              Recommended Upgrades
            </Typography>
          </Box>
          <Box className="link">
            <div className="view-all">View all</div>
          </Box>
        </Box>
        <section className="container10">
          <UpgradeCard
            background="/Background@2x.png"
            flightFD402Oct12="Flight FD402 - Oct 12"
            premiumEconomyUpgrade="Premium Economy Upgrade"
            enjoyExtraLegroomAndPriority="Enjoy extra legroom and priority service on your upcoming flight to Tokyo."
            pts="8,500 pts"
            buttonPrimary="Upgrade Now"
          />
          <UpgradeCard
            background="/Background1@2x.png"
            flightFD402Oct12="Available Anytime"
            premiumEconomyUpgrade="Day Lounge Pass"
            enjoyExtraLegroomAndPriority="Relax in our exclusive DreamLounge before your next departure."
            pts="4,000 pts"
            buttonPrimary="Get Pass"
          />
        </section>
      </Box>
    </section>
  );
};

RecommendedUpgrades.propTypes = {
  className: PropTypes.string,
};

export default RecommendedUpgrades;
