package com.galaxe.onemg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.onemg.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
public User findByCustomerEmail(String customerEmail);
}
