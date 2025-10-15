package com.ekart.auth.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthController {

    @Value("${spring.application.name}")
    private String applicationName;

    @GetMapping("/")
    public Map<String, String> sayHello() {
        return Map.of("message", applicationName);
    }
}
