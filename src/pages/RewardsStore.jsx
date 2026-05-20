import { Typography, Box, Button } from "@mui/material";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import "./RewardsStore.css";

const RewardsStore = () => {
  return (
    <Box className="rewards-store">
      <main className="content-container">
        <NavBar navigationBar="Rewards Store" />
        <MainContent />
        <main className="content-area">
          <Box className="container">
            <section className="aside-filters-sidebar">
              <Box className="category-filter">
                <Box className="heading-3">
                  <Typography
                    className="category"
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "500", lineHeight: "var(--lh-28)" }}
                  >
                    Category
                  </Typography>
                </Box>
                <Box className="checkbox-group">
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="all"
                      defaultChecked
                    />
                    <span className="all-rewards">All Rewards</span>
                  </label>
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="flight-upgrades"
                    />
                    <span className="all-rewards">Flight Upgrades</span>
                  </label>
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="lounge-access"
                    />
                    <span className="all-rewards">Lounge Access</span>
                  </label>
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="extra-baggage"
                    />
                    <span className="all-rewards">Extra Baggage</span>
                  </label>
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="dining"
                    />
                    <span className="all-rewards">Dining</span>
                  </label>
                  <label className="category-option">
                    <input
                      className="category-checkbox"
                      type="checkbox"
                      name="category"
                      value="retail"
                    />
                    <span className="all-rewards">Retail</span>
                  </label>
                </Box>
              </Box>
              <Box className="container7">
                <Box className="heading-3">
                  <Typography
                    className="category"
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "500", lineHeight: "var(--lh-28)" }}
                  >
                    Points Range
                  </Typography>
                </Box>
                <Box className="container8">
                  <Box className="container9">
                    <Box className="container10">
                      <Typography
                        className="extra-baggage"
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{
                          lineHeight: "var(--lh-12)",
                          letterSpacing: "var(--ls-0_6)",
                          fontWeight: "700",
                        }}
                      >
                        0 pts
                      </Typography>
                    </Box>
                    <Box className="container10">
                      <Typography
                        className="extra-baggage"
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{
                          lineHeight: "var(--lh-12)",
                          letterSpacing: "var(--ls-0_6)",
                          fontWeight: "700",
                        }}
                      >
                        20,000+ pts
                      </Typography>
                    </Box>
                  </Box>
                  <img className="input-icon2" alt="" src="/Input1.svg" />
                  <Box className="container12">
                    <Typography
                      className="all-rewards"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-24)", fontWeight: "700" }}
                    >
                      Up to 15,250 pts
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </section>
            <div className="rewards-grid">
              <section className="card-1-business-class">
                <Box className="background">
                  <img
                    className="card-image-icon"
                    loading="lazy"
                    alt=""
                    src="/Card-Image@2x.png"
                  />
                  <Box className="background2">
                    <Typography
                      className="extra-baggage"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-12)",
                        letterSpacing: "var(--ls-0_6)",
                        fontWeight: "700",
                      }}
                    >
                      Flight Upgrades
                    </Typography>
                  </Box>
                </Box>
                <Box className="container13">
                  <Box className="heading-3margin">
                    <Box className="container10">
                      <Typography
                        className="business-class-upgrade"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "600", lineHeight: "var(--lh-31_2)" }}
                      >
                        Business Class Upgrade
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="margin">
                    <Box className="container14">
                      <div className="elevate-your-next">
                        Elevate your next journey with priority boarding,
                        <br />
                        spacious lie-flat seats, and premium dining.
                      </div>
                    </Box>
                  </Box>
                  <Box className="container15">
                    <Box className="container2">
                      <Typography
                        className="pts"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                      >
                        10,000 pts
                      </Typography>
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
                        width: 110,
                      }}
                    >
                      Redeem
                    </Button>
                  </Box>
                </Box>
              </section>
              <section className="card-2-lounge-pass">
                <Box className="background">
                  <img
                    className="background-child"
                    loading="lazy"
                    alt=""
                    src="/Frame-56@2x.png"
                  />
                  <Box className="background4">
                    <Typography
                      className="extra-baggage"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-12)",
                        letterSpacing: "var(--ls-0_6)",
                        fontWeight: "700",
                      }}
                    >
                      Lounge Access
                    </Typography>
                  </Box>
                </Box>
                <Box className="container17">
                  <Box className="heading-3margin">
                    <Box className="container10">
                      <Typography
                        className="business-class-upgrade"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "600", lineHeight: "var(--lh-31_2)" }}
                      >
                        Global Lounge Pass
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="margin">
                    <Box className="container10">
                      <div className="elevate-your-next">
                        Relax before your flight with complimentary
                        <br />
                        food, beverages, and Wi-Fi in our exclusive
                        <br />
                        global lounges.
                      </div>
                    </Box>
                  </Box>
                  <Box className="container15">
                    <Box className="container2">
                      <Typography
                        className="pts"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                      >
                        5,000 pts
                      </Typography>
                    </Box>
                    <Button
                      className="button-primary2"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#001e40",
                        borderRadius: "8px",
                        "&:hover": { background: "#001e40" },
                        width: 110,
                        height: 48,
                      }}
                    >
                      Redeem
                    </Button>
                  </Box>
                </Box>
              </section>
              <section className="card-3-extra-baggage">
                <Box className="background5">
                  <img
                    className="background-item"
                    loading="lazy"
                    alt=""
                    src="/Frame-55@2x.png"
                  />
                  <Box className="background6">
                    <Typography
                      className="extra-baggage"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-12)",
                        letterSpacing: "var(--ls-0_6)",
                        fontWeight: "700",
                      }}
                    >
                      Extra Baggage
                    </Typography>
                  </Box>
                </Box>
                <Box className="container17">
                  <Box className="heading-3margin">
                    <Box className="container10">
                      <Typography
                        className="business-class-upgrade"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "600", lineHeight: "var(--lh-31_2)" }}
                      >
                        Additional Checked Bag
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="margin">
                    <Box className="container10">
                      <div className="elevate-your-next">
                        Travel without compromises. Add an extra piece
                        <br />
                        of checked luggage to your booking (up to
                        <br />
                        23kg).
                      </div>
                    </Box>
                  </Box>
                  <Box className="container15">
                    <Box className="container2">
                      <Typography
                        className="pts"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                      >
                        2,500 pts
                      </Typography>
                    </Box>
                    <Button
                      className="button-primary2"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#001e40",
                        borderRadius: "8px",
                        "&:hover": { background: "#001e40" },
                        width: 110,
                        height: 48,
                      }}
                    >
                      Redeem
                    </Button>
                  </Box>
                </Box>
              </section>
              <section className="card-4-fine-dining">
                <Box className="background">
                  <img
                    className="fine-dining-experience"
                    loading="lazy"
                    alt=""
                    src="/Fine-dining-experience@2x.png"
                  />
                  <Box className="background8">
                    <Typography
                      className="extra-baggage"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-12)",
                        letterSpacing: "var(--ls-0_6)",
                        fontWeight: "700",
                      }}
                    >
                      Dining
                    </Typography>
                  </Box>
                </Box>
                <Box className="container17">
                  <Box className="heading-3margin">
                    <Box className="container10">
                      <Typography
                        className="business-class-upgrade"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "600", lineHeight: "var(--lh-31_2)" }}
                      >
                        $50 Partner Dining Voucher
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="margin">
                    <Box className="container14">
                      <div className="elevate-your-next">
                        Enjoy a world-class culinary experience at any
                        <br />
                        of our participating partner restaurants globally.
                      </div>
                    </Box>
                  </Box>
                  <Box className="container15">
                    <Box className="container2">
                      <Typography
                        className="pts"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                      >
                        4,000 pts
                      </Typography>
                    </Box>
                    <Button
                      className="button-primary2"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#001e40",
                        borderRadius: "8px",
                        "&:hover": { background: "#001e40" },
                        width: 110,
                        height: 48,
                      }}
                    >
                      Redeem
                    </Button>
                  </Box>
                </Box>
              </section>
              <section className="card-5-retail">
                <Box className="varad-murti-gxwwjojj5ss-unspla-parent">
                  <img
                    className="varad-murti-gxwwjojj5ss-unspla-icon"
                    loading="lazy"
                    alt=""
                    src="/varad-murti-GxWwjOjJ5Ss-unsplash-1@2x.png"
                  />
                  <Box className="background9">
                    <Typography
                      className="extra-baggage"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-12)",
                        letterSpacing: "var(--ls-0_6)",
                        fontWeight: "700",
                      }}
                    >
                      Retail
                    </Typography>
                  </Box>
                </Box>
                <Box className="container17">
                  <Box className="heading-3margin">
                    <Box className="container10">
                      <Typography
                        className="business-class-upgrade"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "600", lineHeight: "var(--lh-31_2)" }}
                      >
                        Noise-Canceling Headphones
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="margin">
                    <Box className="container10">
                      <div className="elevate-your-next">
                        Immerse yourself in tranquility during your flight
                        <br />
                        with premium, wireless noise-canceling
                        <br />
                        technology.
                      </div>
                    </Box>
                  </Box>
                  <Box className="container15">
                    <Box className="container2">
                      <Typography
                        className="pts"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                      >
                        15,000 pts
                      </Typography>
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
                        width: 110,
                      }}
                    >
                      Redeem
                    </Button>
                  </Box>
                </Box>
              </section>
            </div>
          </Box>
        </main>
        <Footer />
      </main>
    </Box>
  );
};

export default RewardsStore;
