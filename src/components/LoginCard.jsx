import { useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "./Logo";
import TextField1 from "./TextField1";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LoginCard.css";

const LoginCard = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    navigate("/home");
  }, [navigate]);

  return (
    <section className={`login-card ${className}`}>
      <Box className="block-1">
        <Box className="logo2">
          <Logo />
        </Box>
        <Box className="brand-name">
          <Box className="flydreamair-wrapper">
            <Typography
              className="flydreamair"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "800" }}
            >
              FlyDreamAir
            </Typography>
          </Box>
          <Box className="tagline-wrapper">
            <div className="tagline">THE ELEVATED HORIZON</div>
          </Box>
        </Box>
      </Box>
      <form className="block-2" onSubmit={onSubmit}>
        <Box className="input-field">
          <TextField1 lABEL="MEMBER ID" placeholder="Enter your unique ID" />
          <Box className="password-field">
            <TextField1
              lABEL="PASSWORD"
              placeholder="••••••••"
              fieldFontWeight="500"
              fieldFontSize="16px"
              fieldColor="rgba(115, 119, 128, 0.5)"
            />
            <Box className="forgot-password">
              <div className="forgot-password2">FORGOT PASSWORD?</div>
            </Box>
          </Box>
        </Box>
        <Button
          className="button-primary"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#001e40",
            borderRadius: "8px",
            "&:hover": { background: "#001e40" },
          }}
          type="submit"
        >{`Login `}</Button>
      </form>
      <Box className="block-3">
        <div className="not-a-member-container">
          <Typography
            variant="inherit"
            variantMapping={{ inherit: "span" }}
          >{`Not a member yet? `}</Typography>
          <Typography
            className="join-flydreamair-rewards"
            variant="inherit"
            variantMapping={{ inherit: "span" }}
          >
            Join FlyDreamAir Rewards
          </Typography>
        </div>
      </Box>
    </section>
  );
};

LoginCard.propTypes = {
  className: PropTypes.string,
};

export default LoginCard;
