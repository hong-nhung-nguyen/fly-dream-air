import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import Balance from "../components/Balance";
import TierProgress from "../components/TierProgress";
import RecommendedUpgrades from "../components/RecommendedUpgrades";
import RecentActivity from "../components/RecentActivity";
import Footer from "../components/Footer";
import "./MemberDashboard.css";

const MemberDashboard = () => {
  return (
    <Box className="member-dashboard">
      <main className="content-container">
        <NavBar navigationBar="Member Dashboard" />
        <Balance />
        <TierProgress />
        <RecommendedUpgrades />
        <RecentActivity />
        <Footer brandFontWeight="unset" />
      </main>
    </Box>
  );
};

export default MemberDashboard;
