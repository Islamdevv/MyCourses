import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ADMIN } from "../../const";
import { useAuth } from "../../context/AuthContextProvider";

export default function Header() {
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();
  const admin = "iaubakirov@gmail.com";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#181818" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography sx={{ color: "#fff" }} variant="h6" component="div">
              motion
              <span style={{ backgroundColor: "#fff", color: "black" }}>S</span>
            </Typography>
          </Link>
          {email === admin && (
            <Box sx={{ marginLeft: "30px" }}>
              <Button onClick={() => navigate("/add-courses")}>
                <AddBoxIcon />
              </Button>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "200%",
              color: "#fff",
            }}
          >
            <Link to="/my-courses">
              <Typography sx={{ color: "#fff" }}>Мои курсы</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button onClick={() => navigate("/auth")} color="inherit">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
