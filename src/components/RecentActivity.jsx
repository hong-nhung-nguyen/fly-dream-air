import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import "./RecentActivity.css";

const RecentActivity = ({ className = "" }) => {
  return (
    <section className={`recent-activity ${className}`}>
      <Box className="frame-div">
        <Box className="card-base4">
          <Box className="horizontalborder">
            <Box className="heading-22">
              <Typography
                className="recent-activity2"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "600", lineHeight: "31.2px" }}
              >
                Recent Activity
              </Typography>
            </Box>
            <Box className="button2">
              <div className="download-statement">Download Statement</div>
            </Box>
          </Box>
          <Box className="card-activities">
            <Box className="activity-item-1">
              <Box className="container11">
                <button className="icon-background">
                  <Box className="container12">
                    <img
                      className="vector-icon2"
                      loading="lazy"
                      alt=""
                      src="/Vector1.svg"
                    />
                  </Box>
                </button>
                <Box className="margin4">
                  <Box className="heading-22">
                    <Box className="container14">
                      <div className="flight-fd892-lhr">
                        Flight FD892: LHR to JFK
                      </div>
                    </Box>
                    <Box className="container15">
                      <div className="sep-15-2024">
                        Sep 15, 2024 • Base Miles + Silver Bonus
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="container16">
                <Typography
                  className="download-statement"
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-24)", fontWeight: "700" }}
                >
                  + 3,450 pts
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="card-load-more">
            <Box className="button3">
              <div className="download-statement">Load More Activity</div>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

RecentActivity.propTypes = {
  className: PropTypes.string,
};

export default RecentActivity;
