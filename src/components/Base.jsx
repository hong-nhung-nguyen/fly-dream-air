import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./Base.css";

const Base = ({
  className = "",
  onLinkContainerClick,
  actionIcons,
  bookAFlight,
  usePointsOrCashForYourNext,
}) => {
  return (
    <Box className={`card-base4 ${className}`} onClick={onLinkContainerClick}>
      <Box className="content6">
        <Box className="action-icons-wrapper">
          <img
            className="action-icons"
            loading="lazy"
            alt=""
            src={actionIcons}
          />
        </Box>
        <Box className="book-a-flight-parent">
          <Typography
            className="book-a-flight"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500" }}
          >
            {bookAFlight}
          </Typography>
          <div className="use-points-or">{usePointsOrCashForYourNext}</div>
        </Box>
      </Box>
    </Box>
  );
};

Base.propTypes = {
  className: PropTypes.string,
  actionIcons: PropTypes.string,
  bookAFlight: PropTypes.string,
  usePointsOrCashForYourNext: PropTypes.string,

  /** Action props */
  onLinkContainerClick: PropTypes.func,
};

export default Base;
