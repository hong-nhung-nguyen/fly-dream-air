import { Typography, Box } from "@mui/material";
import Card from "./Card";
import PropTypes from "prop-types";
import "./FrameCalculation1.css";

const cardItems = [
  {
    image: "/paul-zoetemeijer-JtdCQPKPxp4-unsplash-1@2x.png",
    imageIconWidth: "432px",
    imageIconHeight: "220px",
    imageIconMaxHeight: "",
    lOUNGEACCESS: "2 PTS / $1",
    premiumLoungePass: "Airport Shops",
    enjoyComplimentaryFoodDrinks:
      "Dine and shop at partner locations before you board to boost your balance.",
    pts: "View Partners",
  },
  {
    image: "/polina-zimenkova-805sx-BprfY-unsplash-1@2x.png",
    imageIconWidth: "432px",
    imageIconHeight: "220px",
    imageIconMaxHeight: "",
    lOUNGEACCESS: "3 PTS / $1",
    premiumLoungePass: "Duty-Free Shopping",
    enjoyComplimentaryFoodDrinks:
      "Exclusive bonus rates on luxury goods, fragrances, and spirits.",
    pts: "Explore Duty-Free",
  },
  {
    image: "/oskar-kadaksoo-i8fRj3z8bvk-unsplash-1@2x.png",
    imageIconWidth: "432px",
    imageIconHeight: "220px",
    imageIconMaxHeight: "",
    lOUNGEACCESS: "1 PTS / $1",
    premiumLoungePass: "In-Flight Services",
    enjoyComplimentaryFoodDrinks:
      "Earn on Wi-Fi packages, premium beverage upgrades, and boutique purchases.",
    pts: "See Services",
  },
];

const FrameComponent1 = ({ className = "" }) => {
  return (
    <main className={`title-parent ${className}`}>
      <Box className="title">
        <Box className="earn-beyond-the-sky-wrapper">
          <Typography
            className="earn-beyond-the"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "600" }}
          >
            Earn beyond the sky
          </Typography>
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
