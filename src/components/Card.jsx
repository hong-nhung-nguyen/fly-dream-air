import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
  className = "",
  image,
  imageIconWidth,
  imageIconHeight,
  imageIconMaxHeight,
  lOUNGEACCESS,
  premiumLoungePass,
  enjoyComplimentaryFoodDrinks,
  pts,
}) => {
  const imageIconStyle = useMemo(() => {
    return {
      width: imageIconWidth,
      height: imageIconHeight,
      maxHeight: imageIconMaxHeight,
    };
  }, [imageIconWidth, imageIconHeight, imageIconMaxHeight]);

  return (
    <Box className={`card-1 ${className}`}>
      <img className="image-icon" alt="" src={image} style={imageIconStyle} />
      <Box className="content8">
        <Box className="reward-titles-parent">
          <Box className="reward-titles">
            <Typography
              className="lounge-access"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ letterSpacing: "0.01em", fontWeight: "700" }}
            >
              {lOUNGEACCESS}
            </Typography>
          </Box>
          <Box className="reward-subtitles">
            <Typography
              className="premium-lounge-pass"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500" }}
            >
              {premiumLoungePass}
            </Typography>
          </Box>
          <Box className="reward-descriptions">
            <div className="enjoy-complimentary-food">
              {enjoyComplimentaryFoodDrinks}
            </div>
          </Box>
        </Box>
        <Box className="reward-prices">
          <Box className="pts-wrapper">
            <div className="redeem">{pts}</div>
          </Box>
          <Box className="redeem-actions">
            <div className="redeem">Redeem</div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  lOUNGEACCESS: PropTypes.string,
  premiumLoungePass: PropTypes.string,
  enjoyComplimentaryFoodDrinks: PropTypes.string,
  pts: PropTypes.string,

  /** Style props */
  imageIconWidth: PropTypes.string,
  imageIconHeight: PropTypes.string,
  imageIconMaxHeight: PropTypes.string,
};

export default Card;
