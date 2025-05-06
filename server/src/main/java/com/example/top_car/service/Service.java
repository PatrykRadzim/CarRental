package com.example.top_car.service;

import com.example.top_car.model.Car;
import com.example.top_car.model.Rental;
import com.example.top_car.model.User;
import com.example.top_car.repo.RentalRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class Service<T> {

    @Autowired
    protected JpaRepository<T, Long> repository;

    @Autowired
    protected RentalRepository rentalRepository;

    public void create(T entity) {
        repository.save(entity);
    }

    public Optional<T> getById(Long id) {
        return repository.findById(id);
    }

    public List<T> getAll() {
        return repository.findAll();
    }

    public List<Rental> getRentals(Long id) {
        T entity = getById(id).orElse(null);

        if (entity instanceof User) {
            return rentalRepository.findByUser((User) entity);
        } else if (entity instanceof Car) {
            return rentalRepository.findByCar((Car) entity);
        } else {
            throw new IllegalArgumentException("Unknown entity");
        }
    }


    public void update(Long id, T updatedEntity) {
        repository.findById(id).ifPresentOrElse(existingEntity -> {
            copyNonNullProperties(updatedEntity, existingEntity);
            repository.save(existingEntity);
        }, () -> {
            throw new EntityNotFoundException("Entity with id " + id + " not found");
        });
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyNonNullProperties(T source, T target) {
        BeanUtils.copyProperties(source, target, "id", "createdAt");
    }
}
