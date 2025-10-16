package com.ekart.auth.repository;

import com.ekart.auth.entity.DbCheckEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DbCheckRepository extends JpaRepository<DbCheckEntity, Long> {}
