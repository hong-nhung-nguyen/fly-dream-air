import { Typography, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import FrameComponent from "../components/FrameComponent";
import ActionCardsContainer from "../components/ActionCardsContainer";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home">
      <footer className="content-container">
        <NavBar navigationBar="Default Homepage" />
        <section className="main-content">
          <Box className="welcome-header">
            <Box className="welcome-header2">
              <Typography
                className="welcome-back-steve"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700", letterSpacing: "-0.02em" }}
              >
                Welcome back, Steve.
              </Typography>
            </Box>
            <Box className="your-journey-towards-the-eleva-wrapper">
              <div className="your-journey-towards">
                Your journey towards the elevated horizon continues. Review your
                loyalty status, plan your next adventure, and unlock exclusive
                rewards.
              </div>
            </Box>
          </Box>
        </section>
        <FrameComponent />
        <ActionCardsContainer />
        <FrameComponent1 />
        <Footer />
      </footer>
    </Box>
  );
};

export default Home;
