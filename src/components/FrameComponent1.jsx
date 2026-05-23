import { useState, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const [cardItems] = useState([
    {
      image: "/image@2x.png",
      imageIconWidth: "612px",
      imageIconHeight: "263px",
      imageIconMaxHeight: "",
      lOUNGEACCESS: "LOUNGE ACCESS",
      premiumLoungePass: "Premium Lounge Pass",
      enjoyComplimentaryFoodDrinks:
        "Enjoy complimentary food, drinks, and a quiet space before your flight.",
      pts: "5,000 pts",
    },
    {
      image: "/image1@2x.png",
      imageIconWidth: "394px",
      imageIconHeight: "unset",
      imageIconMaxHeight: "100%",
      lOUNGEACCESS: "FLIGHT ADD-ON",
      premiumLoungePass: "Extra Checked Baggage",
      enjoyComplimentaryFoodDrinks:
        "Add an additional 23kg checked bag to your upcoming itinerary.",
      pts: "3,500 pts",
    },
    {
      image: "/Frame-32@2x.png",
      imageIconWidth: "214px",
      imageIconHeight: "unset",
      imageIconMaxHeight: "100%",
      lOUNGEACCESS: "UPGRADE",
      premiumLoungePass: "One-Class Upgrade",
      enjoyComplimentaryFoodDrinks:
        "Elevate your travel experience with an upgrade to the next class.",
      pts: "12,000 pts",
    },
  ]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/05-rewards-store");
  }, [navigate]);

  return (
    <main className={`title-parent ${className}`}>
      <Box className="title">
        <Box className="rewards-title-container">
          <Typography
            className="recommended-rewards"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600" }}
          >
            Recommended Rewards
          </Typography>
        </Box>
        <Box className="frame-group">
          <Box className="rewards-title-container">
            <div className="curated-options-for">
              Curated options for your upcoming travel.
            </div>
          </Box>
          <Box
            className="view-rewards-store-wrapper"
            onClick={onFrameContainerClick}
          >
            <div className="curated-options-for">View Rewards Store</div>
          </Box>
        </Box>
      </Box>
      <Box className="cards">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            imageIconWidth={item.imageIconWidth}
            imageIconHeight={item.imageIconHeight}
            imageIconMaxHeight={item.imageIconMaxHeight}
            lOUNGEACCESS={item.lOUNGEACCESS}
            premiumLoungePass={item.premiumLoungePass}
            enjoyComplimentaryFoodDrinks={item.enjoyComplimentaryFoodDrinks}
            pts={item.pts}
          />
        ))}
      </Box>
    </main>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
