package com.ekart.auth.entity;


import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Table(name = "db_check")
public class DbCheck {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Setter
    private String message;

    public Long getId() { return id; }
    public String getMessage() { return message; }
}
