import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Tagline = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
  [theme.breakpoints.up("xs")]: {
    fontSize: "8vw",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "6vw",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3.5vw",
  },
}));

const CarImg = styled("img")(({ theme }) => ({
  maxWidth: "15vw",
  aspectRatio: "1/1",
  objectFit: "cover",
  borderRadius: "50%",
}));

const CarImgMobile = styled("img")(({ theme }) => ({
  maxHeight: "20vw",
  margin: "auto",
}));

const Home = () => {
  return (
    <Box bgcolor="background">
      <Stack
        sx={{
          width: "80vw",
          margin: "auto",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: { xs: "70%", md: "30%" },
            marginTop: { xs: "2vh", md: "8vw" },
            marginBottom: { xs: "10vw", md: 0 },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ marginBottom: { xs: "4vh", sm: "2vh" } }}>
            <Tagline>Lots of cars,</Tagline>
            <Tagline sx={{ marginTop: "-1.5vw" }}>zero hassle.</Tagline>
            <Typography
              color="secondary"
              sx={{
                fontSize: { xs: "4vw", sm: "2vw", md: "1.5vw", xl: "1vw" },
              }}
            >
              Your next ride is just a few clicks away!
            </Typography>
          </Box>

          <Button
            variant="contained"
            href="/cars"
            sx={{
              width: { md: "13vw", lg: "10vw", xl: "8vw" },
              height: { md: "5vw", lg: "4vw", xl: "3vw" },
              display: { xs: "none", md: "flex" },
              borderRadius: "0.5vw",
            }}
          >
            Pick a car
          </Button>
        </Stack>

        <Box
          sx={{
            width: "40%",
            height: "28vw",
            marginTop: "8vh",
            paddingLeft: "1vw",
            display: { xs: "none", md: "block" },
            position: "relative",
          }}
        >
          <CarImg
            src="src/assets/josh-berquist-_4sWbzH5fp8-unsplash.jpg"
            sx={{ position: "absolute", left: "6vw", zIndex: 3 }}
          />
          <CarImg
            src="src/assets/zakaria-zayane-pb_1XXdKldQ-unsplash.jpg"
            sx={{
              position: "absolute",
              top: "5vw",
              left: "18vw",
              zIndex: 1,
            }}
          />
          <CarImg
            src="src/assets/martin-katler-WTN4tbN_tNQ-unsplash.jpg"
            sx={{
              position: "absolute",
              top: "13vw",
              left: "9vw",
              zIndex: 2,
            }}
          />
        </Box>
      </Stack>

      {/* Mobile layout */}
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CarImgMobile
            src="src/assets/mobile1.png"
            sx={{
              position: "absolute",
              top: "calc(50% - 3vw)",
              left: "calc(50% - 16vw)",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
          <CarImgMobile
            src="src/assets/mobile2.png"
            sx={{
              position: "absolute",
              top: "calc(50% + 0vw)",
              left: "calc(50% + 0vw)",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
          <CarImgMobile
            src="src/assets/mobile3.png"
            sx={{
              position: "absolute",
              top: "calc(50% + 3vw)",
              left: "calc(50% + 16vw)",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
            }}
          />
        </Box>

        <Button
          variant="contained"
          href="/cars"
          sx={{
            width: "30vw",
            height: "12vw",
            margin: "auto",
            marginTop: "10vh",
            borderRadius: "4vw",
          }}
        >
          Pick a car
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
