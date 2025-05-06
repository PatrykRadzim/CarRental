package com.example.top_car.repo;

import com.example.top_car.model.Car;
import com.example.top_car.model.Rental;
import com.example.top_car.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {
    List<Rental> findByCar(Car car);
    List<Rental> findByUser(User user);
}
