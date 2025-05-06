import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import { getAllCars } from "../services/carService";
import CarCard from "../components/CarCard";
import FilterPanel from "../components/FilterPanel";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    fuel: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        console.log(data);
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error getting cars:", err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetFilters = () =>
    setFilters({ brand: "", model: "", minPrice: "", maxPrice: "", fuel: "" });

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.model || car.model === filters.model) &&
      (!filters.minPrice || car.pricePerDay >= Number(filters.minPrice)) &&
      (!filters.maxPrice || car.pricePerDay <= Number(filters.maxPrice)) &&
      (!filters.fuel || car.fuel === filters.fuel) &&
      (!filters.minYear || car.year >= Number(filters.minYear)) &&
      (!filters.maxYear || car.year <= Number(filters.maxYear)) &&
      (!filters.minHorsepower ||
        car.horsepower >= Number(filters.minHorsepower)) &&
      (!filters.maxHorsepower ||
        car.horsepower <= Number(filters.maxHorsepower))
    );
  });

  if (loading) return <CircularProgress sx={{ margin: "auto" }} />;

  return (
    <>
      <FilterPanel
        cars={cars}
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />

      <Stack
        sx={{
          width: "80vw",
          margin: "auto",
          marginTop: "5vh",
          justifyContent: "center",
          flexDirection: "row",
          gap: "2vw",
        }}
      >
        {filteredCars.map((car) => (
          <CarCard car={car} />
        ))}
      </Stack>
    </>
  );
};

export default Cars;
