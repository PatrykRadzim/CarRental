import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const AboutSection = ({ header, content, image, reverse = false }) => {
  return (
    <>
      {/* Desktop */}
      <Grid
        container
        spacing="1vw"
        sx={{
          width: { md: "80vw", lg: "60vw", xl: "40vw" },
          marginBottom: "5vh",
          display: { xs: "none", md: "flex" },
          flexDirection: reverse ? "row-reverse" : "row",
          justifyContent: "center",
        }}
      >
        <Grid size={6}>
          <Typography
            variant="h4"
            color="primary"
            fontWeight="600"
            sx={{ fontSize: { md: "3vw", lg: "2vw" } }}
          >
            {header}
          </Typography>
          <Typography marginTop="1vh" color="secondary" variant="body1">
            {content}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Box
            component="img"
            src={image}
            sx={{
              width: "100%",
              height: "25vh",
              objectFit: "cover",
              borderRadius: "1vw",
            }}
          />
        </Grid>
      </Grid>

      {/* Mobile */}
      <Stack
        sx={{
          width: "80vw",
          marginBottom: "8vh",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            height: "20vh",
            marginBottom: "1vh",
            objectFit: "cover",
            borderRadius: "1vw",
          }}
        />
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          textAlign="center"
        >
          {header}
        </Typography>
        <Typography>{content}</Typography>
      </Stack>
    </>
  );
};

export default AboutSection;
