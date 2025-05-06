package com.example.top_car.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name", columnDefinition = "text", nullable = false)
    @NotNull
    private String name;

    @Column(name = "email", columnDefinition = "text", unique = true, nullable = false)
    @NotNull
    private String email;

    @Column(name = "password", columnDefinition = "text", nullable = false)
    @NotNull
    private String password;

    @Column(name = "role", columnDefinition = "text", nullable = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    private UserRole role = UserRole.CUSTOMER;

    @Column(name = "created_at", columnDefinition = "timestamp", nullable = false)
    @NotNull
    private Timestamp createdAt = new Timestamp(System.currentTimeMillis());

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Rental> rentals;
}
