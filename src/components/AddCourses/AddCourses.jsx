import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const AddCourses = () => {
  return (
    <div>
      <Box
        align="center"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "70vh",
          display: "flex",
          marginBottom: "0px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            // color: "#E5E5E5",
            color: "#181818",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          ADD COURSES
        </Typography>
        <Box
          sx={{
            width: "50vw",
            margin: "3vh auto 10vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            gridGap: "15px",
          }}
        >
          <TextField
            sx={{
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            size="small"
          />

          <TextField
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            size="small"
          />

          <TextField
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Picture"
            variant="outlined"
            name="picture"
            size="small"
          />
          <TextField
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Type"
            variant="outlined"
            name="type"
            size="small"
          />

          <Button
            sx={{
              borderColor: "black",
              backgroundColor: "black",
              color: "white",
              transition: "1000s",
              gridColumn: "1/3",
            }}
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
          >
            Add Courses
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddCourses;
