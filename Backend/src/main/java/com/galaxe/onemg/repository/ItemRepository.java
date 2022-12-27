package com.galaxe.onemg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.galaxe.onemg.entities.Items;
@Repository
public interface ItemRepository extends JpaRepository<Items, Integer>{
public List<Items> findByItemNameContaining(String itemName);
public Items findByItemId(Integer itemId);
public Items findByItemName(String itemName);
}
