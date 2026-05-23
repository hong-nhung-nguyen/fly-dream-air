import { useEffect } from "react";
import {
  Navigate,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PointsCalculation from "./pages/PointsCalculator";
import MemberDashboard from "./pages/MemberDashboard";
import RewardsStore from "./pages/RewardsStore";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
      case "/03-member-dashboard":
        title = "FlyDreamAir | Member Dashboard";
        metaDescription = "Review your FlyDreamAir rewards balance, status, and recommended redemptions.";
        break;
      case "/01-login":
        title = "FlyDreamAir | Login";
        metaDescription = "Sign in to your FlyDreamAir Rewards account.";
        break;
      case "/02-points-calculation":
      case "/04-points-calculator":
        title = "FlyDreamAir | Points Calculator";
        metaDescription = "Estimate FlyDreamAir points earned from future flights.";
        break;
      case "/home":
        title = "FlyDreamAir | Home";
        metaDescription = "Explore your FlyDreamAir Rewards overview.";
        break;
      case "/05-rewards-store":
      case "/rewards-store":
        title = "FlyDreamAir | Rewards Store";
        metaDescription = "Redeem FlyDreamAir points for upgrades, lounges, dining, retail, and travel extras.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/01-login" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/01-login" element={<Login />} />
      <Route path="/02-points-calculation" element={<PointsCalculation />} />
      <Route path="/03-member-dashboard" element={<MemberDashboard />} />
      <Route path="/05-rewards-store" element={<RewardsStore />} />
      <Route
        path="/rewards-store"
        element={<Navigate to="/05-rewards-store" replace />}
      />
      <Route
        path="/04-points-calculator"
        element={<Navigate to="/02-points-calculation" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default App;
