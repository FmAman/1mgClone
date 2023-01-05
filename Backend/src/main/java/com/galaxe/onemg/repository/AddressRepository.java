package com.galaxe.onemg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.onemg.entities.Address;
import com.galaxe.onemg.entities.User;

@Repository
public interface AddressRepository extends JpaRepository<Address,Integer> {
public List<Address> findByUser(User user);
public Address findByCustomerName(String customerName);
}
