package com.galaxe.onemg.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxe.onemg.dtos.ItemsDto;
import com.galaxe.onemg.entities.Items;
import com.galaxe.onemg.exceptions.ItemAlreadyExistsException;
import com.galaxe.onemg.exceptions.ItemDoesNotExistException;
import com.galaxe.onemg.mapper.ItemsMapper;
import com.galaxe.onemg.repository.ItemRepository;

@Service
public class ItemsServiceImpl implements ItemsService {

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	ItemsMapper itemsMapper;

	@Override
	public String addItem(Items items) throws ItemAlreadyExistsException {
		String name = items.getItemName();
		Items findItem = itemRepository.findByItemName(name);
		if (findItem != null) {
			System.out.println("s");
			throw new ItemAlreadyExistsException("Item exists");
		} else {
			System.out.println(items);
			itemRepository.save(items);
			return "Item Added";
		}

	}

	@Override
	public List<ItemsDto> getItems() throws ItemDoesNotExistException {
		List<Items> allItemList = itemRepository.findAll();
		if (allItemList.isEmpty()) {
			throw new ItemDoesNotExistException("No Items Exists");
		}

		List<ItemsDto> listDtoItems = new ArrayList<ItemsDto>();
		for (Items item : allItemList)
			listDtoItems.add(itemsMapper.convertToDto(item));
		return listDtoItems;
	}

	@Override
	public List<ItemsDto> searchItemByName(String itemName) throws ItemDoesNotExistException {
		List<Items> allItemListByName = itemRepository.findByItemNameContaining(itemName);
		if (allItemListByName.isEmpty()) {
			throw new ItemDoesNotExistException("No Items Exists");
		}
		List<ItemsDto> allSearchItemList = new ArrayList<ItemsDto>();
		for (Items item : allItemListByName)
			allSearchItemList.add(itemsMapper.convertToDto(item));
		return allSearchItemList;
	}

	@Override
	public String deleteItem(String itemName) throws ItemDoesNotExistException {
		Items item = itemRepository.findByItemName(itemName);
		System.out.println(item);
		if (item == null) {
			throw new ItemDoesNotExistException("No Items Exists");
		}
		itemRepository.delete(item);
		return "Item deleted by admin";

	}

	@Override
	public String editItems(Items items) throws ItemDoesNotExistException {
		System.out.println("af");
		Items item = itemRepository.findByItemName(items.getItemName());
		if (item == null) {
			throw new ItemDoesNotExistException("No Items Exists");
		}
		item.setImageUrl(items.getImageUrl());
		item.setItemName(items.getItemName());
		item.setQuantity(items.getQuantity());
		item.setMrpPrice(items.getMrpPrice());
		item.setDiscount(items.getDiscount());
		item.setSellingPrice(items.getSellingPrice());

		itemRepository.save(item);
		System.out.println(item);
		return "Item Saved";
	}

}
