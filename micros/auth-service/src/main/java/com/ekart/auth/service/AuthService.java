package com.ekart.auth.service;

import com.ekart.auth.dto.RegisterRequest;
import com.ekart.auth.entity.User;
import com.ekart.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;

     public User register(RegisterRequest request) {
         if(userRepository.findByEmail(request.getEmail()).isPresent()) {
             throw new RuntimeException("Email already exists");
         }

         User user = User.builder()
                 .fullName(request.getFullName())
                 .email(request.getEmail())
                 .password(request.getPassword())
                 .build();
         return userRepository.save(user);
     }

}
