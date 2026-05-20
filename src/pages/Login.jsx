import { Box } from "@mui/material";
import LoginCard from "../components/LoginCard";
import "./Login.css";

const Login = () => {
  return (
    <Box className="login">
      <LoginCard />
      <Box className="legal-footer">
        <Box className="legal-links">
          <div className="privacy-policy">PRIVACY POLICY</div>
          <div className="privacy-policy">TERMS OF SERVICE</div>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
