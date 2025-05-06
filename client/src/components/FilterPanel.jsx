import { Button, Paper, Stack } from "@mui/material";
import React from "react";
import Filter from "./Filter";
import { Clear } from "@mui/icons-material";

const FilterPanel = ({ cars, filters, onFilterChange, onReset }) => {
  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniqueModels = [...new Set(cars.map((car) => car.model))];

  return (
    <Paper
      sx={{
        width: "70vw",
        height: "10vh",
        margin: "auto",
        marginTop: "2vh",
        padding: "1vw",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vw",
        }}
      >
        <Filter
          name="brand"
          label="Brand"
          type="list"
          value={filters.brand}
          collection={uniqueBrands}
          onValueChange={onFilterChange}
        />
        <Filter
          name="model"
          label="Model"
          type="list"
          value={filters.model}
          collection={uniqueModels}
          onValueChange={onFilterChange}
          disabled={!filters.brand}
        />
        <Filter
          name="minPrice"
          label="Price from"
          type="number"
          value={filters.minPrice}
          adornment="$"
          onValueChange={onFilterChange}
        />
        <Filter
          name="maxPrice"
          label="Price to"
          type="number"
          value={filters.maxPrice}
          adornment="$"
          onValueChange={onFilterChange}
        />
        <Filter
          name="fuel"
          label="Fuel"
          type="list"
          value={filters.fuel}
          collection={["GASOLINE", "DIESEL", "ELECTRIC", "OTHER"]}
          onValueChange={onFilterChange}
        />
        <Button variant="outlined" startIcon={<Clear />} onClick={onReset}>
          reset
        </Button>
      </Stack>
    </Paper>
  );
};

export default FilterPanel;
