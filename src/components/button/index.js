import Button from "@mui/material/Button";
import { createElement } from "react";

const CustomButton = ({ children, icon, isOutlined, ...props }) => {
  return icon ? (
    <Button
      variant={isOutlined ? "outlined" : "contained"}
      startIcon={createElement(icon, {})}
      {...props}
    >
      {children}
    </Button>
  ) : (
    <Button variant={isOutlined ? "outlined" : "contained"} {...props}>
      {children}
    </Button>
  );
};
export default CustomButton;
