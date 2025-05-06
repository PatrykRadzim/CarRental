package com.example.top_car.service;

import com.example.top_car.model.Rental;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentalService extends com.example.top_car.service.Service<Rental> {

    @Override
    public void create(Rental entity) {
        super.create(entity);
    }

    @Override
    public Optional<Rental> getById(Long id) {
        return super.getById(id);
    }

    @Override
    public List<Rental> getAll() {
        return super.getAll();
    }

    @Override
    public void update(Long id, Rental updatedEntity) {
        super.update(id, updatedEntity);
    }

    @Override
    public void delete(Long id) {
        super.delete(id);
    }
}
