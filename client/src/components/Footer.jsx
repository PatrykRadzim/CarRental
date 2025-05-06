import { GitHub } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "auto",
        backgroundColor: "background",
      }}
    >
      <hr />
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="1vw"
      >
        &copy;2025 Patryk Radzim
        <a href="https://github.com/PatrykRadzim" target="_blank">
          <GitHub color="secondary" />
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
