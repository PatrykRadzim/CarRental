package com.example.top_car.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.NumberDeserializers;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "rentals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @NotNull
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "car_id", nullable = false)
    @NotNull
    private Car car;

    @Column(name = "start_date", columnDefinition = "date", nullable = false)
    @NotNull
    private Date startDate;

    @Column(name = "end_date", columnDefinition = "date")
    private Date endDate;

    @Column(name = "total_price", columnDefinition = "decimal(10, 2)", nullable = false)
    @NotNull
    @JsonProperty("total_price")
    @JsonDeserialize(using = NumberDeserializers.BigDecimalDeserializer.class)
    private BigDecimal totalPrice;

    @Column(name = "status", columnDefinition = "text", nullable = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    private RentalStatus status = RentalStatus.ACTIVE;

    @Column(name = "created_at", columnDefinition = "timestamp", nullable = false)
    @NotNull
    private Timestamp createdAt = new Timestamp(System.currentTimeMillis());
}
