import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography color="primary" align="center" variant="h2">
        To Do List
      </Typography>
      <Typography color="primary" align="center" variant="subtitle1">
        What would you like to do?
      </Typography>
    </div>
  );
};

export default Header;
