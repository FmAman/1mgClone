package com.galaxe.onemg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.onemg.entities.Cart;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.entities.User;
@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
public Cart findByItemsAndUser(Items items,User user);
public List<Cart> findByUser(User user);
}
