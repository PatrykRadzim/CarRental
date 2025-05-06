package com.example.top_car.service;

import com.example.top_car.model.Rental;
import com.example.top_car.model.User;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService extends com.example.top_car.service.Service<User> {

    @Override
    public void create(User entity) {
        super.create(entity);
    }

    @Override
    public Optional<User> getById(Long id) {
        return super.getById(id);
    }

    @Override
    public List<User> getAll() {
        return super.getAll();
    }

    @Override
    public List<Rental> getRentals(Long id) {
        return super.getRentals(id);
    }

    @Override
    public void update(Long id, User updatedEntity) {
        super.update(id, updatedEntity);
    }

    @Override
    public void delete(Long id) {
        super.delete(id);
    }
}
