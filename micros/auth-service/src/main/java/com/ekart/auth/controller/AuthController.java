package com.ekart.auth.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    // -------------------------
    // 🔑 AUTH ENDPOINTS
    // -------------------------
    @PostMapping("/register")
    public ResponseEntity<String> register() {
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login() {
        return ResponseEntity.ok("User logged in successfully");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok("User logged out successfully");
    }

    @PostMapping("/validate")
    public ResponseEntity<String> validate() {
        return ResponseEntity.ok("Token is valid");
    }

    @PostMapping("/refresh")
    public ResponseEntity<String> refresh() {
        return ResponseEntity.ok("Token refreshed successfully");
    }

    // -------------------------
    // 🔐 PASSWORD ENDPOINTS
    // -------------------------
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword() {
        return ResponseEntity.ok("Password reset link sent");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword() {
        return ResponseEntity.ok("Password reset successfully");
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword() {
        return ResponseEntity.ok("Password changed successfully");
    }
}
