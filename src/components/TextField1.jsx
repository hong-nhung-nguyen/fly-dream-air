import { useMemo } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import "./TextField1.css";

const TextField1 = ({
  className = "",
  lABEL,
  placeholder,
  fieldFontWeight,
  fieldFontSize,
  fieldColor,
}) => {
  const fieldStyle = useMemo(() => {
    return {
      fontWeight: fieldFontWeight,
      fontSize: fieldFontSize,
      color: fieldColor,
    };
  }, [fieldFontWeight, fieldFontSize, fieldColor]);

  return (
    <Box className={`member-id-field ${className}`}>
      <div className="label">{lABEL}</div>
      <TextField
        className="field"
        placeholder={placeholder}
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#d6dde7" },
          "& .MuiInputBase-root": {
            height: "48px",
            backgroundColor: "#f6f8fb",
            borderRadius: "12px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "rgba(75, 85, 99, 0.5)" },
        }}
        style={fieldStyle}
      />
    </Box>
  );
};

TextField1.propTypes = {
  className: PropTypes.string,
  lABEL: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  fieldFontWeight: PropTypes.string,
  fieldFontSize: PropTypes.string,
  fieldColor: PropTypes.string,
};

export default TextField1;
