package com.example.top_car.service;

import com.example.top_car.model.Car;
import com.example.top_car.model.Rental;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService extends com.example.top_car.service.Service<Car> {



    @Override
    public void create(Car entity) {
        super.create(entity);
    }

    @Override
    public Optional<Car> getById(Long id) {
        return super.getById(id);
    }

    @Override
    public List<Car> getAll() {
        return super.getAll();
    }

    @Override
    public List<Rental> getRentals(Long id) {
        return super.getRentals(id);
    }

    @Override
    public void update(Long id, Car updatedEntity) {
        super.update(id, updatedEntity);
    }

    @Override
    public void delete(Long id) {
        super.delete(id);
    }
}
