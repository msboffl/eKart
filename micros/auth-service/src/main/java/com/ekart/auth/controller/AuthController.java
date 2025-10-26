package com.ekart.auth.controller;

import com.ekart.auth.dto.RegisterRequest;
import com.ekart.auth.dto.RegisterResponse;
import com.ekart.auth.entity.DbCheck;
import com.ekart.auth.entity.User;
import com.ekart.auth.repository.DbCheckRepository;
import com.ekart.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
        "http://localhost:3000"
})
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    // -------------------------
    // 🔑 AUTH ENDPOINTS
    // -------------------------
    private final AuthService authService;
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        try {
            User user = authService.register(request);

            RegisterResponse response = RegisterResponse.builder()
                    .id(user.getId())
                    .email(user.getEmail())
                    .fullName(user.getFullName())
                    .message("User registered successfully")
                    .build();
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(RegisterResponse.builder().message(e.getMessage()).build());
        }
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

    // -------------------------------
    // 🧠 DATABASE CHECK ENDPOINT
    // -------------------------------
    @Autowired
    private DbCheckRepository dbCheckRepository;

    @GetMapping("/db-check")
    public ResponseEntity<String> checkDatabase() {
        try {
            var check = new DbCheck();
            check.setMessage("DB Working Test");
            dbCheckRepository.save(check);
            return ResponseEntity.ok("✅ Database is working! Saved ID: " + check.getId());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("❌ Database error: " + e.getMessage());
        }
    }

}
