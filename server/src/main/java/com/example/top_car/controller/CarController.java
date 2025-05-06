package com.example.top_car.controller;

import com.example.top_car.model.Car;
import com.example.top_car.model.Rental;
import com.example.top_car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping("")
    public String add(@RequestBody Car car) {
        System.out.println("Received car: " + car);
        carService.create(car);
        return "Added car: " + car;
    }

    @GetMapping("")
    public List<Car> getAll() {
        return carService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Car> getById(@PathVariable("id") long id) {
        return carService.getById(id);
    }

    @GetMapping("/{id}/rentals")
    public List<Rental> getRentals(@PathVariable("id") long id) {
        return carService.getRentals(id);
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") long id, @RequestBody Car car) {
        carService.update(id, car);
        return "Updated car: " + carService.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") long id) {
        carService.delete(id);
        return "Deleted car of id " + id;
    }


}
