package com.example.top_car.controller;

import com.example.top_car.model.Rental;
import com.example.top_car.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rentals")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @PostMapping("")
    public String add(@RequestBody Rental rental) {
        rentalService.create(rental);
        return "Added rental: " + rental;
    }

    @GetMapping("")
    public List<Rental> getAll() {
        return rentalService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Rental> getById(@PathVariable("id") long id) {
        return rentalService.getById(id);
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") long id, @RequestBody Rental rental) {
        rentalService.update(id, rental);
        return "Updated rental: " + rentalService.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") long id) {
        rentalService.delete(id);
        return "Deleted rental of id " + id;
    }
}
