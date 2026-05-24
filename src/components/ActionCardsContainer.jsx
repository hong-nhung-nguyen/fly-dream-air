import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import PropTypes from "prop-types";
import "./ActionCardsContainer.css";

const ActionCardsContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBookFlightClick = useCallback(() => {
    // do nothing
  }, []);

  const onActivityHistoryClick = useCallback(() => {
    navigate("/03-member-dashboard");
  }, [navigate]);

  const onBaseContainerClick1 = useCallback(() => {
    navigate("/02-points-calculation");
  }, [navigate]);

  return (
    <section className={`action-cards-container ${className}`}>
      <Base
        onLinkContainerClick={onBookFlightClick}
        actionIcons="/Action-Icons.svg"
        bookAFlight="Book a Flight"
        usePointsOrCashForYourNext="Use points or cash for your next trip."
      />
      <Box className="card-base5" onClick={onBaseContainerClick1}>
        <Box className="content7">
          <Box className="content-inner">
            <Box className="flight-icon-wrapper">
              <img
                className="flight-icon"
                loading="lazy"
                alt=""
                src="/Flight-Icon.svg"
              />
            </Box>
          </Box>
          <Box className="points-calculator-parent">
            <Typography
              className="points-calculator2"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500" }}
            >
              Points Calculator
            </Typography>
            <div className="estimate-earnings-for">
              Estimate earnings for future flights.
            </div>
          </Box>
        </Box>
      </Box>
      <Base
        onLinkContainerClick={onActivityHistoryClick}
        actionIcons="/Vector1.svg"
        bookAFlight="Activity History"
        usePointsOrCashForYourNext="Review your past flights and points."
      />
    </section>
  );
};

ActionCardsContainer.propTypes = {
  className: PropTypes.string,
};

export default ActionCardsContainer;
