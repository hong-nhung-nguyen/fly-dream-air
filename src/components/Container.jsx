import { useCallback } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const onLinkContainerClick = useCallback(() => {
    navigate("/03-member-dashboard");
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/02-points-calculation");
  }, [navigate]);

  const onBrandClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRewardsStoreTextClick = useCallback(() => {
    navigate("/05-rewards-store");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/01-login");
  }, [navigate]);

  return (
    <Box className={`nav-container ${className}`}>
      <Box
        className="nav-brand"
        onClick={onBrandClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onBrandClick();
          }
        }}
      >
        <img 
          className="nav-logo-mark" 
          alt="FlyDreamAir" 
          src="/Icon.svg" 
          style={{ width: 32, height: 26, objectFit: "contain" }} 
        />
        
        <Typography
          className="flydreamair2"
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{
            fontWeight: "700",
            lineHeight: "var(--lh-32)",
            letterSpacing: "-0.01em",
          }}
        >
          FlyDreamAir
        </Typography>
      </Box>
      <Box className="nav-links">
        <Box className={`nav-link nav-link-dashboard ${path === '/03-member-dashboard' ? 'active' : ''}`} onClick={onLinkContainerClick}>
          <div className="nav-label">Member Dashboard</div>
        </Box>
        <Box className={`nav-link nav-link-calculator ${path === '/02-points-calculation' ? 'active' : ''}`} onClick={onLinkContainerClick1}>
          <div className="nav-label">Points Calculator</div>
        </Box>
        <Box className={`nav-link nav-link-rewards ${path === '/05-rewards-store' ? 'active' : ''}`} onClick={onRewardsStoreTextClick}>
          <div className="nav-rewards-label" >
            Rewards Store
          </div>
        </Box>
      </Box>
      <Box className="nav-actions">
        <Box className="nav-points-pill">
          <Typography
            className="nav-label"
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
          >
            15,250 pts
          </Typography>
        </Box>
        <Box className="nav-sign-out" onClick={onButtonContainerClick}>
          <div className="nav-label">Sign Out</div>
        </Box>
      </Box>
    </Box>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
