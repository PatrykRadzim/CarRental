package com.example.top_car.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.NumberDeserializers;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "cars")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "brand", columnDefinition = "text", nullable = false)
    @NotNull
    private String brand;

    @Column(name = "model", columnDefinition = "text", nullable = false)
    @NotNull
    private String model;

    @Column(name = "year", columnDefinition = "integer", nullable = false)
    @NotNull
    private Integer year;

    @Column(name = "fuel", columnDefinition = "text", nullable = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    private CarFuel fuel;

    @Column(name = "horsepower", columnDefinition = "integer")
    private Integer horsepower;

    @Column(name = "engine_capacity", columnDefinition = "integer")
    private Integer engineCapacity;

    @Column(name = "status", columnDefinition = "text", nullable = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    private CarStatus status = CarStatus.AVAILABLE;

    @Column(name = "price_per_day", columnDefinition = "decimal(10, 2)", nullable = false)
    @NotNull
//    @JsonProperty("price_per_day")
//    @JsonDeserialize(using = NumberDeserializers.BigDecimalDeserializer.class)
    private BigDecimal pricePerDay;

    @Column(name = "created_at", columnDefinition = "timestamp", nullable = false)
    @NotNull
    private Timestamp createdAt = new Timestamp(System.currentTimeMillis());

}
