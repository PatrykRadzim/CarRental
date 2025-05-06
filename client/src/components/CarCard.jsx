import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Bullet = () => (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      "::before": {
        content: '"•"',
      },
      userSelect: "none",
    }}
  />
);

const CarCard = ({ car }) => {
  const carImage = car.image ? car.image : "src/assets/no image.jpg";
  return (
    <Card sx={{ width: "16vw", height: "30vh" }}>
      <CardMedia
        component="img"
        image={carImage}
        alt={car.brand + " " + car.model}
        sx={{
          width: "100%",
          height: "20vh",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography variant="h6">
          {car.brand} {car.model}
        </Typography>

        <Typography>
          <Box component="span">{car.year}</Box> <Bullet />{" "}
          <Box component="span">
            {car.fuel.charAt(0) + car.fuel.slice(1).toLowerCase()}
          </Box>
          {car.horsepower && (
            <>
              {" "}
              <Bullet /> <Box component="span">{car.horsepower} HP</Box>
            </>
          )}
          {car.engine && (
            <>
              {" "}
              <Bullet />{" "}
              <Box component="span">
                {car.engine} cm
                <Box component="sup" sx={{ verticalAlign: "top" }}>
                  3
                </Box>
              </Box>
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarCard;
