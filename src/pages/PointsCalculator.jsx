import { Typography, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import FrameCalculation from "../components/FrameCalculation";
import FrameCalculation1 from "../components/FrameCalculation1";
import Footer from "../components/Footer";
import "./PointsCalculator.css";

const PointsCalculator = () => {
  return (
    <Box className="points-calculator">
      <footer className="content-container">
        <NavBar navigationBar="Points Calculator" />
        <section className="main-content">
          <Box className="welcome-header">
            <Box className="welcome-header2">
              <Typography
                className="points-calculator2"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700", letterSpacing: "-0.02em" }}
              >
                Points Calculator
              </Typography>
            </Box>
            <Box className="header-content">
              <div className="estimate-your-rewards">
                Estimate your rewards before you fly. Discover how quickly you
                can reach your next tier or dream destination.
              </div>
            </Box>
          </Box>
        </section>
        <FrameCalculation />
        <FrameCalculation1 />
        <Footer />
      </footer>
    </Box>
  );
};

export default PointsCalculator;
