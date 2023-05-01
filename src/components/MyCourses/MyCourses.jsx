import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { Link } from "react-router-dom";
const MyCourses = () => {
  return (
    <Box sx={{ padding: "20px 0px 20px 20px" }}>
      <Box sx={{ margin: "10px 0", padding: 0, width: "40%" }}>
        <Typography sx={{ fontSize: "65px", fontWeight: "bold" }}>
          Мои Курсы
        </Typography>
      </Box>
      <Box sx={{ width: "85%", margin: "0 auto" }}>
        <Divider sx={{ height: "90px", borderBottomWidth: 5 }} />
      </Box>
      <Box>
        <Link to="/page">
          <Box
            sx={{
              borderRadius: "10px",
              margin: "35px 0 0 105px",
              width: "20%",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              boxSizing: "border-box",
              backgroundColor: "#E0E0E0",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "yellow",
                width: "75px",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <JavascriptIcon sx={{ fontSize: "80px", color: "black" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "25px",
                margin: "0 auto",
                fontWeight: "bold",
                color: "black",
              }}
            >
              JavaScript
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default MyCourses;
