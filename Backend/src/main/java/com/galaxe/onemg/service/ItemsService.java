package com.galaxe.onemg.service;

import java.util.List;


import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.exceptions.ItemAlreadyExistsException;
import com.galaxe.onemg.exceptions.ItemDoesNotExistException;

public interface ItemsService {
public String addItem(Items items) throws ItemAlreadyExistsException;
public String editItems(Items items) throws ItemDoesNotExistException;
public List<ItemsDto> getItems() throws ItemDoesNotExistException;
public List<ItemsDto> searchItemByName(String itemName)throws ItemDoesNotExistException;
public String deleteItem(String itemName) throws ItemDoesNotExistException;
}
