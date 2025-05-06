package com.example.top_car.controller;

import com.example.top_car.model.Rental;
import com.example.top_car.model.User;
import com.example.top_car.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public String add(@RequestBody User user) {
        userService.create(user);
        return "Added user: " + user;
    }

    @GetMapping("/{id}")
    public Optional<User> getById(@PathVariable("id") long id) {
        return userService.getById(id);
    }

    @GetMapping("")
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}/rentals")
    public List<Rental> getRentals(@PathVariable("id") long id) {
        return userService.getRentals(id);
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") long id, @RequestBody User user) {
        userService.update(id, user);
        return "Updated user: " + userService.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") long id) {
        userService.delete(id);
        return "Deleted user of id " + id;
    }
}
